import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";
import { AppError } from "./errors/AppError";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: "Error",
            message: error.message,
        });
    }

    return res.status(500).json({
        status: "Error",
        message: "Internal Server Error",
        error,
    });
});

const port = process.env.API_PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
