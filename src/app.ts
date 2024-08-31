import express from "express";
import connectDatabase from "./db/dbConfig";
import routes from "./routes";

connectDatabase();

const app = express();
routes(app);

export default app;
