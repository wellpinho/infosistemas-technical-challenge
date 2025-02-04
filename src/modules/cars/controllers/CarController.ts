import { Request, Response } from "express";
import { createCarService } from "../services/CarService";

export const createCarController = async (req: Request, res: Response) => {
    const { ...data } = req.body;
    const user = await createCarService(data);

    return res.json(user);
};
