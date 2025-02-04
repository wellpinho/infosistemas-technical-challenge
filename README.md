# CRUD Simples com Node.js, MongoDB e Swagger

Este projeto consiste em um CRUD simples desenvolvido com Node.js e MongoDB, documentado utilizando Swagger.

## Tecnologias Utilizadas

- **Node.js** - Plataforma para executar código JavaScript no servidor.
- **Express.js** - Framework web para Node.js.
- **MongoDB** - Banco de dados (SGBD) não relacional, de código aberto e orientado a documentos.
- **Swagger** - Documentação interativa para APIs REST.
- **Docker** - Para facilitar a implantação e execução do projeto.
- **Mocha** - Para testes unitários.

## Metodologia que gosto e pratico no meu dia a dia

- **Kanban** - Para organizar as tarefas.
- **SCRUM** - Para planejar o tamanho da sprint e priorizar as tarejas.

## Funcionalidades

- Criar, ler, atualizar e deletar registros.
- Persistência de dados utilizando MongoDB.
- Documentação interativa da API com Swagger.
- Execução simplificada via Docker.

## Como Rodar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/wellpinho/infosistemas-technical-challenge.git
cd infosistemas-technical-challenge
```

### 2. Rodar com Docker

```bash
docker-compose up -d
```

O servidor será iniciado na porta definida no arquivo `docker-compose.yml`.

##### Caso não queira usar Docker ou não queira instalar docker para testar.

Entre na pasta do porjeto e rode o comando:
` npm run dev`

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
