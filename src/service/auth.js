import jwt from "jsonwebtoken";
const secret = 'This is secret'


function setuser(user){
    return jwt.sign({
        _id : user._id,
        email : user.email
    }, secret)
    
}

function getuser(token){
    if(!token) return null
    return jwt.verify(token, secret)
}


export {setuser, getuser}