# Mars Rover 

### Sobre

A Mars Rover API é uma aplicação desenvolvida para simular a movimentação de rovers em um platô de Marte. A aplicação permite configurar o tamanho do platô e enviar comandos para controlar os rovers, registrando suas posições iniciais, comandos recebidos e posições finais.

### Funcionalidades Principais

- **Configuração do Platô:** Permite definir as dimensões do platô onde os rovers irão se movimentar.
- **Movimentação dos Rovers:** Recebe comandos para movimentar os rovers e calcula suas posições finais.
- **Registro de Log:** Armazena a posição inicial, comandos e posição final dos rovers em um banco de dados MongoDB.

### Tecnologias Utilizadas

- **Node.js:** Plataforma de desenvolvimento JavaScript.
- **TypeScript:** Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **Express:** Framework web para Node.js, utilizado para criar e gerenciar as rotas da API.
- **MongoDB:** Banco de dados NoSQL utilizado para armazenar os dados dos rovers.
- **Mongoose:** Biblioteca de modelagem de dados para MongoDB e Node.js.

### Como rodar na minha maquina

- Clone o projeto `git clone https://github.com/matheusleite01/Mars-rover-back.git`
- Rode `npm install`
- Crie um arquivo `.env` com a variavel `DB_CONNECTION_STRING=<sua_string_de_conexão>`
- Rode `npm run dev`

### Documentação da API:

- Domínio da aplicação: `https://api-mars-rover-back.onrender.com`








