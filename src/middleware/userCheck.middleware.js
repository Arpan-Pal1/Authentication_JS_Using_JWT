import { getuser } from "../service/auth.js";

async function loginCheck(req, res, next){
    const token = req.cookies['token']

    if(!token){
        req.userid = null
    }

    const checkUser = getuser(token)

    if (!checkUser) {
        req.userid = null
    }else{
        req.userid = checkUser._id
    }
    next()
}

export {loginCheck}