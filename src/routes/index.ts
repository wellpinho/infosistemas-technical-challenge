import { Request, Response, Router } from "express";
import { carRoutes } from "../modules/cars/routes/Car.routes";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    return res.json({ message: "Welcome to Info Sistemas" });
});

routes.use(carRoutes);

export { routes };
