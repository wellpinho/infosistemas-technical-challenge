# CRUD Simples com Node.js, MongoDB e Swagger

Este projeto consiste em um CRUD simples desenvolvido com Node.js e MongoDB, documentado utilizando Swagger.

## Tecnologias Utilizadas

-   **Node.js** - Plataforma para executar código JavaScript no servidor.
-   **Express.js** - Framework web para Node.js.
-   **MongoDB** - Banco de dados (SGBD) não relacional, de código aberto e orientado a documentos.
-   **Swagger** - Documentação interativa para APIs REST.
-   **Docker** - Para facilitar a implantação e execução do projeto.
-   **JEST** - Para testes unitários.

## Metodologia que gosto e pratico no meu dia a dia

-   **Kanban** - Para organizar as tarefas.
-   **SCRUM** - Para planejar o tamanho da sprint e priorizar as tarejas.
    ![alt text](./assets/image-2.png)

## Funcionalidades

-   Criar, ler, atualizar e deletar registros.
-   Persistência de dados utilizando MongoDB.
-   Documentação interativa da API com Swagger.
-   Execução simplificada via Docker.

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

Crie um arquivo .env na raiz do projeto com este environment:
`DATABASE_URL="mongodb+srv://test:TEMPORARY-TEST@cluster0.pquzp.mongodb.net/cars?retryWrites=true&w=majority&appName=Cluster0"`

Em seguida execute o comando para fazer o build, subir o container e exibir os logs no terminal.

```bash
docker-compose build api && docker compose up -d api && docker compose logs -f api
```

saída do log deve se igual a esta: Server running on port 4000

### 3 Caso não queira usar Docker ou não queira instalar docker para testar.

Entre na pasta do projeto e execute o comando:

1. `npm i`
2. ` npx prisma generate`
3. ` npm run dev`

### 4 Site que usei para criar os dados fakes para testes de cadastro de um carro

[4devs.com](https://www.4devs.com.br/gerador_de_veiculos)

### 3. Acessar a Documentação Swagger

![alt text](./assets/image-1.png)

Após iniciar o servidor, acesse `http://localhost:4000/api-docs` para visualizar a documentação da API.

## Estrutura do Projeto

```
├── src
│   ├── modules
│       ├── cars
│           ├── CarControllers.ts
│           ├── CarServices.ts
│           ├── Car.routes.ts
│   ├── prisma/
│   ├── errors/
│   ├── interfaces/
│   ├── prismaClient/
│   ├── utils/
│   ├── routes/
│   ├── server.ts
│   ├── swagger.ts
│   ├── test/
├── docker-compose.yml
├── Dockerfile
├── package.json
├── README.md
```

## Endpoints Principais

| Método | Rota               | Descrição                    |
| ------ | ------------------ | ---------------------------- |
| GET    | /                  | Página de boas vindas        |
| GET    | /cars              | Lista todos os carros        |
| GET    | /cars/:placa       | Obtém um carro pela PLACA    |
| POST   | /cars              | Cadastra um novo carro       |
| PUT    | /cars/placa/:placa | Atualiza um carro pela PLACA |
| DELETE | /cars/placa/:placa | Remove um carro pela PLACA   |

## Coverage de testes

![alt text](./assets/image.png)

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
