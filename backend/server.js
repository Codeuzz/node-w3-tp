import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.API_PORT || 8000;
const ORIGIN = process.env.ORIGIN || "http://localhost:5173";

const server = express();
server.use(
  cors({
    origin: ORIGIN,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cookieParser());

server.use(router);

server.listen(PORT, console.log("API listening on port: " + PORT));
