import { AppError } from "../../errors/AppError";
import { ICar } from "../../interfaces";
import { prismaClient } from "../../prismaClient";

export const listCarsService = async () => {
    const cars = await prismaClient.car.findMany();

    return cars;
};

export const createCarService = async ({ ...data }: ICar) => {
    const { placa, ano, chassi, marca, modelo, renavam } = data;

    const hasCar = await prismaClient.car.findFirst({
        where: {
            placa,
        },
    });

    if (hasCar) {
        return new AppError("Car already exists", 400);
    }

    await prismaClient.car.create({
        data: {
            placa,
            ano,
            chassi,
            marca,
            modelo,
            renavam,
        },
    });

    return { code: 201, message: "New Car created successfully!" };
};

export const showCarService = async (placa: string) => {
    const car = await prismaClient.car.findUnique({
        where: {
            placa,
        },
    });

    return car;
};
