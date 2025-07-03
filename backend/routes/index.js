import express from "express";
import { getMaterials } from "../controllers/materials-controller.js";
import { realisationController } from "../controllers/realisation-controller.js";

const router = express.Router();

router.get("/materials", getMaterials);
router.get("/realisation", realisationController.getRealisations);
router.post("/realisation", realisationController.addRealisation);
router.put("/updateRealisation", realisationController.updateRealisationQty);

export default router;
