# CRUD Simples com Node.js, MongoDB e Swagger

Este projeto consiste em um CRUD simples desenvolvido com Node.js e MongoDB, documentado utilizando Swagger.

## Tecnologias Utilizadas

- **Node.js** - Plataforma para executar código JavaScript no servidor.
- **Express.js** - Framework web para Node.js.
- **MongoDB** - Banco de dados (SGBD) não relacional, de código aberto e orientado a documentos.
- **Swagger** - Documentação interativa para APIs REST.
- **Docker** - Para facilitar a implantação e execução do projeto.
- **JEST** - Para testes unitários.

## Metodologia que gosto e pratico no meu dia a dia

- **Kanban** - Para organizar as tarefas.
- **SCRUM** - Para planejar o tamanho da sprint e priorizar as tarejas.

## Funcionalidades

- Criar, ler, atualizar e deletar registros.
- Persistência de dados utilizando MongoDB.
- Documentação interativa da API com Swagger.
- Execução simplificada via Docker.

## Como Rodar o Projeto

Para rodar coverage dos teste: `npm run test:coverage`
Para abrir o coverage no navegador: vá na pasta `coverage/index.html` e abra usando opção google ou seu navegador favorito. Ou instaler a extensão live server e depois só abrir o html.
Para ver os testes pelo terminal: `npm run test`

### 1. Clonar o Repositório

```bash
git clone https://github.com/wellpinho/infosistemas-technical-challenge.git
cd infosistemas-technical-challenge
```

### 2. Rodar com Docker

```bash
docker-compose build api && docker compose up -d api && docker compose logs -f api
```

saída do log deve se igual a esta: Server running on port 4000

### 3 Caso não queira usar Docker ou não queira instalar docker para testar.

Entre na pasta do projeto e rode o comando:

1. `npm i`
2. ` npx prisma generate`
3. ` npm run dev`

### 4 Site que usei para criar os dados fakes para testes de cadastro de um carro

[4devs.com](https://www.4devs.com.br/gerador_de_veiculos)

### 3. Acessar a Documentação Swagger

Após iniciar o servidor, acesse `http://localhost:3000/api-docs` para visualizar a documentação da API.

## Estrutura do Projeto

```
├── src
│   ├── modules
│       ├── cars
│           ├── controllers
│           ├── services
│           ├── routes
│   ├── prisma
│   ├── swagger
│   ├── app.js
├── docker-compose.yml
├── Dockerfile
├── package.json
├── README.md
```

## Endpoints Principais

| Método | Rota      | Descrição                 |
| ------ | --------- | ------------------------- |
| GET    | /         | Página de boas vindas     |
| GET    | /cars     | Lista todos os carros     |
| GET    | /cars/:id | Obtém um carro pelo ID    |
| POST   | /cars     | Cadastra um novo carro    |
| PUT    | /cars/:id | Atualiza um carro pelo ID |
| DELETE | /cars/:id | Remove um carro pelo ID   |

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch (`feature/defina-nome-da-sua-branch`).
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça um push para a branch (`git push origin feature/nome-da-sua-branch`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

### Criado por Wellington Pinho

[Linkedin](https://www.linkedin.com/in/wellpinho/)
[Portfolio](https://wellpinho.com)
