import express from "express";
import { getMaterials } from "../controllers/materials-controller.js";
import { realisationController } from "../controllers/realisation-controller.js";
import authController from "../controllers/auth-controller.js";
import { authMiddleWare } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/materials", getMaterials);
router.get("/realisation", realisationController.getRealisations);
router.post("/realisation", realisationController.addRealisation);
router.put("/updateRealisation", realisationController.updateRealisationQty);
router.post("/login", authMiddleWare, authController.login);

export default router;
