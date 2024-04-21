import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsPDF } from 'jspdf';
import { Cliente } from '../../../models/cliente/cliente.module';


@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
  styleUrls: ['./relatorio-clientes.component.css']
})

export class RelatorioClientesComponent {
  clientes: Cliente[] = [];
  logo: string = "/assets/logobantads.png";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get<any[]>('http://localhost:3000/clientes').subscribe((cliente) => {
        this.clientes = [...cliente].sort((a, b) => a.nome.localeCompare(b.nome));
      });
  }

  gerarRelatorio(){
    const doc = new jsPDF();

    doc.addImage(this.logo, 'PNG', 30, 5, 40, 40);

    doc.setFont('Georgia');
    doc.setFontSize(26);
    doc.text('Clientes BanTads', 80, 25);

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

    doc.setFontSize(12);
    doc.text(`Data: ${dataFormatada}`, 93, 31);


    let y = 70; // Posição vertical para começar a adicionar os dados

    doc.setFontSize(13);
    for (const cliente of this.clientes) {
      if (y > 250) {
        doc.addPage(); // Adiciona uma nova página se a altura exceder 250
        y = 20; // Reinicia a posição vertical
      }

      doc.text(`Nome: ${cliente.nome}`, 30, y);
      doc.text(`CPF: ${cliente.cpf}`, 140, y);
      doc.text(`Gerente: ${cliente.gerente}`, 30, y + 6);
      doc.text(`Limite: ${cliente.limite} R$`, 90, y + 6);
      doc.text(`Saldo: ${cliente.saldo} R$`, 140, y + 6);

      y += 25; // Aumenta a posição vertical para a próxima linha
    }

    doc.save('relatorio_clientes.pdf');
  } 
}