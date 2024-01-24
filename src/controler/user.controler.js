import { User } from "../models/user.model.js"

// user register controller

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

// user login controler

const loginForm = async (req, res) => {
    res.render('login')
}

const loginUser = async(req, res) => {
    const {email, password} = req.body

    if (! (email && password)) {
        console.log(`CREDENTIAL IS REQUIRED`);
        return res.redirect('/api/v1/user/login')
    }

    const user = await User.findOne({email})

    if (!user) {
        console.log(`USER IS NOT REGISTER`);
        return res.redirect('/api/v1/user/register')
    }

    if (user.password !== password) {
        console.log(`INVAILED CREDENTIALS`);
        return res.redirect('/api/v1/user/login')
    }

    console.log(`USER LOGGED IN SUCCESSFULLY`);
    res.redirect('/')

}

export {registerForm, registerUser, loginForm, loginUser}