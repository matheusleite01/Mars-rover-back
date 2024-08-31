const directions = ["N", "E", "S", "W"];

type DirectionProps = "N" | "E" | "S" | "W";

export const move = (
  x: number ,
  y: number ,
  direction: DirectionProps,
): [number, number] => {
  switch (direction) {
    case "N":
      return [x, y + 1];
    case "E":
      return [x + 1, y];
    case "S":
      return [x, y - 1];
    case "W":
      return [x - 1, y];
    default:
      return [x, y];
  }
};

export const turnLeft = (direction: DirectionProps) => {
  const currentIndex = directions.indexOf(direction);
  const newIndex = (currentIndex + 3) % 4;
  return directions[newIndex];
};

export const turnRight = (direction: DirectionProps) => {
  const currentIndex = directions.indexOf(direction);
  const newIndex = (currentIndex + 1) % 4;
  return directions[newIndex];
};
