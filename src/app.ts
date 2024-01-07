import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

//para pider recibir paramtros del body
app.use(express.json());
app.use(router);
db().then(() => console.log("Connection Succesful"));
app.listen(PORT, () => console.log("Inicando sesion......."));
