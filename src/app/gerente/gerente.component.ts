import { Component } from '@angular/core';

interface PedidoAutocadastro {
  cpf: string;
  nome: string;
  salario: number;
}

interface AprovacaoReprovacao {
  cpf: string;
  aprovado: boolean;
  motivo: string;
  dataHora: Date;
}

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css']
})
export class GerenteComponent {
  pedidosAutocadastro: PedidoAutocadastro[] = [
    { cpf: '123.456.789-01', nome: 'João da Silva', salario: 5000 },
    
  ];
  
  aprovarCliente(cpf: string): void {
    pedido.aprovado = true;
    console.log('Cliente ${cliente.cpf} aprovado!'); 
  }

  reprovarCliente(cpf: string, motivo: string): void {
    pedido.aprovado = false;
    console.log('Cliente ${cliente.cpf} reprovado!');     
  }
  
  document.getElementById('aprovarBtn')!.addEventListener('click', () => {
    aprovarCliente(pedido);
});

document.getElementById('rejeitarBtn')!.addEventListener('click', () => {
    reprovarCliente(pedido);
});
}
