# Login Interface

O projeto consiste em uma página de Login com autenticação de usuário, onde apresente uma pagina de boas-vindas ao(a) usuário(a) logado.

Para instalação do projeto é necessário que baixe os repositórios do back-end e front-end:

## Repositórios

[Backend] - (https://github.com/Kjuh28/LoginDB)

[Frontend] - (https://github.com/Kjuh28/Login_Interface)


## Instalação

Instale as dependências do back-end com:

```bash
  'node_modules':
   npm i
```
```bash
  'package-lock.json':
   npm init -y
```
Crie um arquivo chamado '.env' na raiz do projeto.

Para instalar as dependências do front-end, utilize os comandos:
```bash
  'node_modules':
   npm i
```
```bash
  'package-lock.json':
   npm init -y
```
Crie um arquivo chamado '.env' na raiz do projeto.
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

No arquivo .env do backend:

PGHOST=''
PGDATABASE=''
PGUSER=''
PGPASSWORD=''
ENDPOINT_ID=''

Para adquirir esses dados, é necessário que haja uma conta no 'https://neon.tech/'. Ao realizar o login, é necessário ter um projeto criado.
- Ao entrar no projeto pronto, ir na aba 'Quickstart', selecionar o icone do 'Node.js' e posteriormente selecionar a opção abaixo: '.env'. Deve-se copiar as informações da pagina e colar dentro do arquivo '.env' criado no projeto.


No arquivo .env do frontend:

DB_URL = 'http://localhost:3332'





## Rodando o projeto

Para rodar o projeto, é necessário que o backend e frontend estejam ativos simultaneamente.

Para incializar o backend, utilize o comando no terminal:

```bash
  npm run dev
```

Para incializar o frontend, utilize o comando no terminal:

```bash
  npm run dev
```

após incializar o frontend, copie o link 'http://localhost:5173/' e cole na aba do navegador para então navegar no projeto. 
