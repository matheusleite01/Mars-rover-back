import { Movement } from "../models/Movement";
import { move, turnLeft, turnRight } from "../utils/directions";
import { getPlateau } from "../utils/plateauConfig";

class MovementService {
  async createMovement(
    initialPosition: any,
    commands: string,
  ): Promise<string> {
    let [x, y, direction] = initialPosition.split(" ");
    x = parseInt(x);
    y = parseInt(y);
    const log: string[] = [`${x} ${y} ${direction}`];

    for (const command of commands) {
      if (command === "L") {
        direction = turnLeft(direction);
      } else if (command === "R") {
        direction = turnRight(direction);
      } else if (command === "M") {
        const [newX, newY] = move(x, y, direction);
        const { maxX, maxY } = getPlateau();
        if (newX >= 0 && newX <= maxX && newY >= 0 && newY <= maxY) {
          x = newX;
          y = newY;
        }
      }
      log.push(`${x} ${y} ${direction}`);
    }

    const finalPosition = `${x} ${y} ${direction}`;
    const rover = new Movement({
      initialPosition: initialPosition,
      commands: commands,
      finalPosition: finalPosition,
      log: log,
    });
    await rover.save();

    return finalPosition;
  }

  async getAllMovements() {
    return await Movement.find({});
  }

  async getMovementById(id: string) {
    return await Movement.findById(id);
  }
}

export default MovementService;
