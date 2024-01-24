import { Router } from "express";
import { registerForm, registerUser } from "../controler/user.controler.js";

const userRoute = Router()

userRoute.route('/register')
.get(registerForm)
.post(registerUser)



export default userRoute

