import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";

import connection from "./db/db.js";
import router from "./route.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router)

const port = 8085;
app.listen(port, () => console.log(`server running on ${port}`));
connection();