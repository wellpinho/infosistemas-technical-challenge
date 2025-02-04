import { Router } from "express";
import { celebrate, Joi, errors, Segments } from "celebrate";
import { createCarController } from "../controllers/CarController";

const carRoutes = Router();

carRoutes.post(
    "/cars",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            placa: Joi.string().required(),
            chassi: Joi.string().required(),
            renavam: Joi.string().required(),
            modelo: Joi.string().required(),
            marca: Joi.string().required(),
            ano: Joi.number().required(),
        }),
    }),
    createCarController as any
);

carRoutes.use(errors());
export { carRoutes };
