import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import usersRoute from "./routes/users.route.js";
import tweetsRoute from "./routes/tweets.route.js";

dotenv.config();

const server = express();
const { PORT } = process.env;

server.use(express.json());

server.use("/tweets", tweetsRoute);
server.use("/users", usersRoute);
server.use("/user", userRoute);

server.listen(PORT);
