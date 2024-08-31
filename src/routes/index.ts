import express, { Express } from "express";
import movement from "./movementRoutes";
import plateu from "./plateuRoutes";

const routes = (app: Express) => {
  app.use(express.json(), movement, plateu);
};

export default routes;
