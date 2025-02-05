import { describe, expect, test } from "@jest/globals";
import {
    createCarService,
    listCarsService,
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
});
