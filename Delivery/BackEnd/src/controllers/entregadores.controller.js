const entregadores = require('../models/entregadores.model.js');
const con = require('../dao/dao.js');


const Login = async (req, res) => {
    con.query(entregadores.toLogin(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const listarLogins = (req, res) => {
    con.query(entregadores.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports={
    Login,
    listarLogins
}