function userLoggedMid (req,res,next) {
    res.locals.isLogged = false;

    if (req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged= req.session.userLogged // se pasa lo que tiene en sesion a la var local para usarla en el navbar
    }

    next();
}

module.exports = userLoggedMid