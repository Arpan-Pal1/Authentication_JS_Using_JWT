import { Router } from "express";
import { homePage, secretPage } from "../controler/home.controler.js";
import { loginCheck } from "../middleware/userCheck.middleware.js";

const homeRouter = Router()

// home page
homeRouter.route('/')
.get(loginCheck, homePage)

// secret page
homeRouter.route('/secret')
.get(loginCheck, secretPage)

export {homeRouter}