import express from "express";
import dotenv from "dotenv";
import data from "./data.js";

dotenv.config();

const server = express();
const { PORT } = process.env;

server.use(express.json());

function getPosts() {
  return data;
}

server.use((req, res) => {
  console.log(req.url);
  res.json(data);
});

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
