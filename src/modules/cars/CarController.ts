import { Request, Response } from "express";
import { createCarService, listCarsService } from "./CarService";

export const listCarController = async (req: Request, res: Response) => {
    const user = await listCarsService();

    return res.json(user);
};

export const createCarController = async (req: Request, res: Response) => {
    const { ...data } = req.body;
    const user = await createCarService(data);

    return res.json(user);
};
