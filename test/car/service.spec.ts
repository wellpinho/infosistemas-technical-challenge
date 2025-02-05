import { describe, expect, test } from "@jest/globals";
import {
    createCarService,
    deleteCarService,
    listCarsService,
    showCarService,
    updateCarService,
} from "../../src/modules/cars/CarService";
import { AppError } from "../../src/errors/AppError";

describe("Car Service", () => {
    const given = {
        marca: "Audi",
        modelo: "A4 2.0 Avant TFSI 200/214cv Multitron",
        ano: 2007,
        renavam: "39088639547",
        placa: "LWW-3221",
        chassi: "1HGCM82633A123456",
    };
    const { ano, chassi, marca, modelo, placa, renavam } = given;
    test("should create a car", async () => {
        const response = await createCarService({
            ano,
            chassi,
            marca,
            modelo,
            placa,
            renavam,
        });

        const expected = {
            code: 201,
            message: "New Car created successfully!",
        };

        expect(response).toStrictEqual(expected);
    });

    test("should receive erro when car already exists", async () => {
        const response = await createCarService({
            ano,
            chassi,
            marca,
            modelo,
            placa,
            renavam,
        });

        const expected = new AppError("Car already exists", 400);

        expect(response).toStrictEqual(expected);
    });

    test("should receive list of cars", async () => {
        const response = await listCarsService();

        expect(response.length).toStrictEqual(1);
    });

    test("should receive one car when give placa", async () => {
        const response = await showCarService(given.placa);

        expect(response?.placa).toStrictEqual(given.placa);
    });

    test("should receive null when car not found in database", async () => {
        const response = await showCarService("fake-placa");
        expect(response).toStrictEqual(null);
    });

    test("expect to receive cars with updated year", async () => {
        const response = await updateCarService({ ...given, ano: 2010 });
        expect(response.ano).toStrictEqual(2010);
    });

    test("expect delete a car when give placa", async () => {
        const response = await deleteCarService(given.placa);
        expect(response).toStrictEqual({
            message: "Car removed sucessfully",
            code: 200,
        });
    });
});
