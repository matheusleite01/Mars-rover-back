let plateau = { maxX: 0, maxY: 0 };

export const setPlateau = (x: number, y: number) => {
  plateau = { maxX: x, maxY: y };
};

export const getPlateau = (): { maxX: number; maxY: number } => plateau;
