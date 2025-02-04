import { AppError } from "../../../errors/AppError";
import { ICar } from "../../../interfaces";
import { prismaClient } from "../../../prismaClient";

export const createCarService = async ({ ...data }: ICar) => {
    const { placa, ano, chassi, marca, modelo, renavam } = data;

    try {
        const hasCar = await prismaClient.car.findFirst({
            where: {
                placa,
            },
        });

        if (hasCar) {
            throw new AppError("Car already exists", 400);
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
    } catch (error) {
        return error;
    }
};
