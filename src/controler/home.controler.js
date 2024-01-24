async function homePage(req, res){
    res.render('index', {user : req.userid})
}


async function secretPage(req, res){
    if (req.userid == null) {
        console.log(`YOU HAVE TO LOGIN FIRST TO ACCESS THIS SECRET PAGE`);
        res.redirect('/api/v1/user/login')
    }
    res.render('secretpage')
}

export {homePage, secretPage}