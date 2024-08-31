import { Request, Response } from "express";
import MovementService from "../services/movementService";

const movementService = new MovementService();

class MovementController {
  static async createMovement(req: Request, res: Response) {
    try {
      const { initialPosition, commands } = req.body;
      const finalPosition = await movementService.createMovement(
        initialPosition,
        commands,
      );
      res.json({ finalPosition });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }

  static async getAllMovemet(req: Request, res: Response) {
    try {
      const movements = await movementService.getAllMovements();
      return res.json(movements);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({ error: error.message });
      }
    }
  }

  static async getMovementById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const movement = await movementService.getMovementById(id);
      if (!movement) {
        return res.status(400).send({ error: "ID informado é inválido" });
      }
      return res.json(movement);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({ error: error.message });
      }
    }
  }
}

export default MovementController;
