import { Request, Response } from "express";
import {
    createCarService,
    deleteCarService,
    listCarsService,
    showCarService,
    updateCarService,
} from "./CarService";

export const listCarController = async (req: Request, res: Response) => {
    const user = await listCarsService();

    return res.json(user);
};

export const createCarController = async (req: Request, res: Response) => {
    const { ...data } = req.body;
    const user = await createCarService(data);

    return res.json(user);
};

export const showCarController = async (req: Request, res: Response) => {
    const { placa } = req.params;
    const user = await showCarService(placa);

    return res.json(user);
};

export const updateCarController = async (req: Request, res: Response) => {
    const { placa } = req.params;
    const { ...data } = req.body;
    const user = await updateCarService({ placa, ...data });
    return res.json(user);
};

export const deleteCarController = async (req: Request, res: Response) => {
    const { placa } = req.params;
    const user = await deleteCarService(placa);

    return res.json(user);
};
