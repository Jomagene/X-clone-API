import express from "express";
import dotenv from "dotenv";
import data from "./data.js";

dotenv.config();

const server = express();
const { PORT } = process.env;

server.use(express.json());

server.use("/tweets");
server.use("/users");
server.use("/user");

server.listen(PORT);
