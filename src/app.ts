import express, { Application } from "express";
import cors from "cors";
import { corsOptions } from "./config/cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/api.Routes";
import baseRoutes from "./routes/base.Routes";
import modificationsRoutes from './routes/modifications.Routes';

// -----------------------------------------------------------------------------

dotenv.config();

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));

// Register base routes
app.use("/", baseRoutes);

// Register API routes
app.use("/api", apiRoutes);

// Register modifications routes

app.use('/api/modifications', modificationsRoutes);



export default app;
