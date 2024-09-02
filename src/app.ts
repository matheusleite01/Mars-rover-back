import express from "express";
import connectDatabase from "./db/dbConfig";
import routes from "./routes";
import cors from "cors";

const corsOptions = {
  origin: ["http://localhost:3000", "https://mars-rover-front-mu.vercel.app"],
  optionsSuccessStatus: 200,
};

connectDatabase();

const app = express();

app.use(cors(corsOptions));

routes(app);

export default app;
