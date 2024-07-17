# CRUD

Este é um projeto de CRUD (Create, Read, Update, Delete) que desenvolvi para fins de estudo. Comecei a desenvolver como intuito de aprimorar meus conhecimentos em TypeORM.

## Tecnologias/Framework
<b>Desenvolvido ultilizando:</b>
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Adicionar um novo item na lista
- Editar um item existente na lista
- Excluir um item da lista
- Listar todos os itens cadastrados

## Como instalar
- Abra o seu terminal e digite os seguintes comandos:

```
git clone https://github.com/jaohv/project_crud.git
cd project_crud
npm install
```
- Vá até o arquivo `database/data-source.ts`


- Altere o `username`, `password` e `database` de acordo com as suas informações


## Como usar o projeto de CRUD

#### 1. Digite os seguinte comandos:

```
npx typeorm migration:run
npm run dev:server
```

#### 2. Abra o cliente de API de sua preferência

Abra o cliente de API de sua preferência (Exemplo: Insomnia, Postman, etc)

#### 3. Crie um HTPP Request para cada uma dos métodos (POST, GET, PUT, DELETE)

Crie um HTPP Request para cada uma dos métodos disponíveis no projeto:

- POST: cria um novo registro no banco de dados
- GET: recupera um registro específico ou uma lista de todos os registros
- PUT: atualiza um registro existente no banco de dados
- DELETE: exclui um registro específico do banco de dados

Certifique-se de preencher corretamente as informações necessárias em cada request, como URL, headers, body, etc.
