import { Router } from "express";
import MovementController from "../controllers/movementController";

const router = Router();

router
  .post("/movement", MovementController.createMovement)
  .get("/movement", MovementController.getAllMovemet)
  .get("/movement:id", MovementController.getMovementById);

export default router;
