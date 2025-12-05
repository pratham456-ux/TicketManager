import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();    
const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Importing Routes

import ticketRoutes from "./routes/ticket.routes.js";

app.use("/api", ticketRoutes);

export default app;