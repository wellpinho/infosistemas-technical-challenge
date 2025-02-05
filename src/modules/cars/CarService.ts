import { AppError } from "../../errors/AppError";
import { ICar } from "../../interfaces";
import { IUpdateCar } from "../../interfaces/ICar";
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

export const updateCarService = async ({ ...data }: IUpdateCar) => {
    const response = await prismaClient.car.update({
        where: {
            placa: data.placa,
        },
        data: {
            ...data,
        },
    });

    return response;
};

export const deleteCarService = async (placa: string) => {
    const response = await prismaClient.car.delete({
        where: {
            placa,
        },
    });

    if (!response) {
        return new AppError("Car not found");
    }

    return { message: "Car removed sucessfully", code: 200 };
};
