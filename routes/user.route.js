import { Router } from "express";
import { userControler } from "../controler/user.controler.js";

const userRoute = Router();
userRoute.get("/", userControler);

export default userRoute;
