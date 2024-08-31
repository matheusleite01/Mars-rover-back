import { Request, Response } from "express";
import { setPlateau } from "../utils/plateauConfig";

class PlateauController {
  static async configurePlateau(req: Request, res: Response) {
    try {
      const { maxX, maxY } = req.body;
      setPlateau(maxX, maxY);
      res.json({ message: "Plateau configured", maxX, maxY });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }
}

export default PlateauController;
