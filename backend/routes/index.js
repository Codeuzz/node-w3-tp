import express from "express";
import { getMaterials } from "../controllers/materials-controller.js";
import { realisationController } from "../controllers/realisation-controller.js";
import authController from "../controllers/auth-controller.js";
import { authMiddleWare } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/materials", authMiddleWare, getMaterials);
router.get(
  "/realisation",
  authMiddleWare,
  realisationController.getRealisations
);
router.post(
  "/realisation",
  authMiddleWare,
  realisationController.addRealisation
);
router.put(
  "/updateRealisation",
  authMiddleWare,
  realisationController.updateRealisationQty
);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

export default router;
