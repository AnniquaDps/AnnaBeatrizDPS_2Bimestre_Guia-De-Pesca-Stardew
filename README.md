# Guia de Pesca - Stardew Valley

## Descrição

O **Guia de Pesca - Stardew Valley** é um projeto desenvolvido para a disciplina de Desenvolvimento Web I (DW1). O sistema reúne informações sobre os peixes presentes no jogo *Stardew Valley*, permitindo que o usuário consulte dados como nome dos peixes, estação do ano, horário, local de pesca e outras informações relevantes.

O projeto é dividido em três partes: Front-end, Back-end e Banco de Dados, trabalhando em conjunto para fornecer uma aplicação organizada e funcional.

---

## Tecnologias Utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript

### Back-end

* Node.js
* Express
* JavaScript

### Banco de Dados

* PostgreSQL

---

## Estrutura do Projeto

```text
A - PROJETO - 2 BIMESTRE - DW1/
│── Back/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
│── Database/
│   └── dw1 - projeto - stardew CREATE.sql
│
│── FRONT/
│   ├── fonte/
│   ├── Peixe Stardew/
│   ├── entrada.css
│   └── entrada.html
│
│── Imagem html/
│
└── README.md
```

---

## Funcionalidades

* Consulta de informações sobre os peixes de Stardew Valley.
* Interface simples e intuitiva.
* Organização dos dados por meio de banco de dados.
* Comunicação entre Front-end e Back-end.
* Exibição das informações para facilitar a consulta dos jogadores.
* Estilização inspirada no universo do jogo.

---

## Como executar o projeto

### 1. Git clone

* Faça o download ou clone o projeto.
* Abra a pasta do projeto.

### 2. Banco de Dados

* Abra o terminal ou o aplicativo/site que é utilizado para rodar o database.
* Execute o arquivo:

```text
Database/dw1 - projeto - stardew CREATE.sql
```

Esse script criará o banco de dados e as tabelas necessárias.

### 3. Back-end

Entre na pasta **Back** pelo terminal:

```bash
cd Back
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` com as informações do banco de dados.

Depois, inicie o servidor no terminal integrado do arquivo utilizando:

```bash
node --watch server.js
```

### 4. Front-end

Abra o arquivo:

```text
Front/entrada.html
```

Preferencialmente utilizando a extensão **Live Server** no Visual Studio Code.

---

## Objetivo

Este projeto tem como objetivo aplicar os conhecimentos adquiridos na disciplina de Desenvolvimento Web I, integrando HTML, CSS, JavaScript, Node.js e PostgreSQL na construção de um sistema completo para consulta de informações sobre a pesca no jogo Stardew Valley.

---

## Autor

**Anna Beatriz Dal Pasquale de Souza**

Projeto desenvolvido para a disciplina de Desenvolvimento Web I (DW1).
