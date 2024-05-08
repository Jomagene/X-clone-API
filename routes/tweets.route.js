import { Router } from "express";
import { createTweet, readTweet } from "../controler/tweets.controler.js";

const tweetsRoute = Router();
tweetsRoute.get("/", readTweet);
tweetsRoute.post("/", createTweet);

export default tweetsRoute;
