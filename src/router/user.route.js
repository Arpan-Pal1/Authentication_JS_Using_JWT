import { Router } from "express";
import { registerForm, registerUser, loginForm, loginUser } from "../controler/user.controler.js";

const userRoute = Router()

userRoute.route('/register')
.get(registerForm)
.post(registerUser)


userRoute.route('/login')
.get(loginForm)
.post(loginUser)



export default userRoute

