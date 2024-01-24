import { Router } from "express";
import { registerForm, registerUser, loginForm, loginUser, logoutUser } from "../controler/user.controler.js";
import { loginCheck } from "../middleware/userCheck.middleware.js";

const userRoute = Router()

userRoute.route('/register')
.get(loginCheck, registerForm)
.post(registerUser)


userRoute.route('/login')
.get(loginCheck, loginForm)
.post(loginUser)


userRoute.route('/logout')
.get(logoutUser)



export default userRoute

