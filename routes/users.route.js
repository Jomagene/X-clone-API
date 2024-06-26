import { Router } from "express";
import { readUserTweets } from "../controler/users.controler.js";

const usersRoute = Router();
usersRoute.get("/:userName", readUserTweets);

export default usersRoute;
