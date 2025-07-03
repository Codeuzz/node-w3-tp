import express from "express";
import { getMaterials } from "../controllers/materials-controller.js";

const router = express.Router();

router.get("/materials", getMaterials);

export default router;
