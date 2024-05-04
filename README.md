## Bantads - Banco TADS

**Introdução**

O Bantads é um sistema de internet banking desenvolvido para o curso de Tecnologia em Análise e Desenvolvimento de Sistemas da UFPR. O projeto utiliza arquitetura de microsserviços e segue os padrões de design mais modernos.

**Tecnologias**

* **Front-end:**
    * Angular 16.2.1
    * TailwindCSS
    * zod
* **Back-end:**
    * Java Spring Boot
    * Spring Data JPA
    * PostgreSQL
    * MongoDB
    * RabbitMQ
    * Docker
* **Outros:**
    * JSON Server
    * Localstorage

**Funcionalidades**

O Bantads oferece diversas funcionalidades para seus usuários, divididas em três perfis:

**Cliente**

* Autocadastro
* Login/Logout
* Tela inicial com saldo
* Alteração de perfil
* Depósito
* Saque
* Transferência
* Consulta de extrato

**Gerente**

* Tela inicial com pedidos de autocadastro
* Aprovar cliente
* Rejeitar cliente
* Consultar todos os clientes
* Consultar cliente por CPF
* Consultar 3 melhores clientes

**Administrador**

* Tela inicial com informações sobre gerentes
* Relatório de clientes
* CRUD de gerentes

**Arquitetura**

O Bantads é composto por diversos microsserviços independentes, cada um responsável por uma funcionalidade específica. Os microsserviços se comunicam entre si através de mensagens, utilizando o RabbitMQ. Essa arquitetura modular facilita o desenvolvimento, a manutenção e a escalabilidade do sistema.

**Requisitos Não-Funcionais**

* **Segurança:**
    * Senhas criptografadas
    * Validação de campos
    * Máscaras de entrada
* **Usabilidade:**
    * Layout agradável
    * Campos com validação
    * Datas e valores no formato brasileiro
    * Bancos de dados normalizados
    * Suporte ao navegador Firefox

**Observações**

* O projeto segue o Modelo de Maturidade de Richardson Nível 2.
* As transações distribuídas utilizam o padrão SAGA.
* O microsserviço de Conta utiliza o padrão CQRS.
* O build, a geração de imagens e a execução são automatizados por shell script.
* O sistema foi testado no navegador Firefox.

**Conclusão**

O Bantads é um projeto completo e bem documentado que demonstra o conhecimento adquirido na disciplina DS152 - DAC. O sistema atende aos requisitos funcionais e não-funcionais definidos e segue as melhores práticas de desenvolvimento de software.

**Links Úteis**

* [Repositório GitHub](https://github.com/r94oliveira/DAC-BANTADS)

**Referências**

* [Artigo sobre Arquitetura de Microsserviços](https://www.martinfowler.com/articles/microservices.html)
* Artigo sobre Padrão CQRS [URL inválido removido]
* Artigo sobre Padrão SAGA [URL inválido removido]
* Documentação do RabbitMQ [URL inválido removido]
* [Documentação do Docker](https://docs.docker.com/)

**Contato**

Para mais informações, entre em contato com o autor do projeto:

* [Nome do Autor](seu_nome@email.com)
