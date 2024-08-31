import { Router } from "express";
import PlateuController from "../controllers/PlateauController";

const router = Router();

router.post("/plateau", PlateuController.configurePlateau);

export default router;
