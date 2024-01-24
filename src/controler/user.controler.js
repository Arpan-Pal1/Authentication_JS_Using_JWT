import { User } from "../models/user.model.js"

const registerForm = async (req, res) =>{
    res.render('registration')
}


const registerUser = async(req, res) =>{
    const {name, email, password}  = req.body
    

    if (! (name && email && password)) {
        console.log(`CREDENTIAL IS REQUIRED`);
        return res.redirect('/api/v1/user/register')
    }

    const checkUserExistsOrNot = await User.findOne({email: email})

    if (checkUserExistsOrNot) {
        console.log(`USER ALREADY EXISTS`);
        return res.redirect('/api/v1/user/register')   // I have to change it from register to log in
    }

    const addUser = await User.create({name, email, password})

    if (!addUser) {
        console.log(`SOMETHING WENT WRONG, USER IS NOT CREATED`);
        return res.redirect('/api/v1/user/register') 
    }

    res.redirect('/')

    
}


export {registerForm, registerUser}