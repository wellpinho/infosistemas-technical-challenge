import { OpenAPIV3 } from "openapi-types";

const swaggerDocs: OpenAPIV3.Document = {
    openapi: "3.0.0",
    info: {
        title: "API de Carros",
        description:
            "API para gerenciar informações de carros. URL padrão: http://localhost:4000",
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
                },
            },
        },
        "/cars/{id}": {
            get: {
                summary: "Buscar um carro pelo ID",
                operationId: "getCarById",
                tags: ["Carros"],
                parameters: [
                    {
                        name: "id",
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
                summary: "Atualizar um carro pelo ID",
                operationId: "updateCar",
                tags: ["Carros"],
                parameters: [
                    {
                        name: "id",
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
                },
            },
            delete: {
                summary: "Deletar um carro pelo ID",
                operationId: "deleteCar",
                tags: ["Carros"],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "string" },
                    },
                ],
                responses: {
                    "204": { description: "Carro deletado com sucesso" },
                },
            },
        },
    },
    components: {
        schemas: {
            Car: {
                type: "object",
                properties: {
                    id: { type: "string", example: "65bdf8d7b5e8a2f1c4d3e6a9" },
                    placa: { type: "string", example: "LWW-3221" },
                    chassi: { type: "string", example: "1HGCM82633A123456" },
                    renavam: { type: "string", example: "39088639547" },
                    modelo: {
                        type: "string",
                        example: "A4 2.0 Avant TFSI 200/214cv Multitron",
                    },
                    marca: { type: "string", example: "Audi" },
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
