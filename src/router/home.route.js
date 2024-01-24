import { Router } from "express";
import { homePage } from "../controler/home.controler.js";

const homeRouter = Router()


homeRouter.route('/')
.get(homePage)


export {homeRouter}