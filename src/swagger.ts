const swaggerDocs = {
    openapi: "3.0.0",
    info: {
        title: "API de Carros",
        description:
            "API para gerenciar informações de carros. URL base: http://localhost:4000",
        version: "1.0.0",
    },
    paths: {
        "/cars": {
            get: {
                summary: "Listar todos os carros",
                operationId: "getCars",
                tags: ["Carros"],
                responses: {
                    "200": {
                        description: "Lista de carros",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Car" },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                summary: "Criar um carro",
                operationId: "createCar",
                tags: ["Carros"],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Car" },
                        },
                    },
                },
                responses: {
                    "201": { description: "Carro criado com sucesso" },
                    "400": { description: "Dados inválidos" },
                },
            },
        },
        "/cars/placa/{placa}": {
            get: {
                summary: "Buscar um carro pela placa",
                operationId: "getCarByPlaca",
                tags: ["Carros"],
                parameters: [
                    {
                        name: "placa",
                        in: "path",
                        required: true,
                        schema: { type: "string" },
                    },
                ],
                responses: {
                    "200": {
                        description: "Carro encontrado",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Car" },
                            },
                        },
                    },
                    "404": { description: "Carro não encontrado" },
                },
            },
            put: {
                summary: "Atualizar um carro pela placa",
                operationId: "updateCarByPlaca",
                tags: ["Carros"],
                parameters: [
                    {
                        name: "placa",
                        in: "path",
                        required: true,
                        schema: { type: "string" },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Car" },
                        },
                    },
                },
                responses: {
                    "200": { description: "Carro atualizado com sucesso" },
                    "404": { description: "Carro não encontrado" },
                    "400": { description: "Dados inválidos" },
                },
            },
            delete: {
                summary: "Excluir um carro pela placa",
                operationId: "deleteCarByPlaca",
                tags: ["Carros"],
                parameters: [
                    {
                        name: "placa",
                        in: "path",
                        required: true,
                        schema: { type: "string" },
                    },
                ],
                responses: {
                    "200": { description: "Carro excluído com sucesso" },
                    "404": { description: "Carro não encontrado" },
                },
            },
        },
    },
    components: {
        schemas: {
            Car: {
                type: "object",
                properties: {
                    placa: { type: "string", example: "ABC1D23" },
                    chassi: { type: "string", example: "9BWZZZ377VT004251" },
                    renavam: { type: "string", example: "12345678900" },
                    modelo: { type: "string", example: "Corolla" },
                    marca: { type: "string", example: "Toyota" },
                    ano: { type: "integer", example: 2023 },
                },
                required: [
                    "placa",
                    "chassi",
                    "renavam",
                    "modelo",
                    "marca",
                    "ano",
                ],
            },
        },
    },
};

export default swaggerDocs;
