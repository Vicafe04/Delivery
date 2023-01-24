const pedido = require('../models/pedidos.model.js');
const con = require('../dao/dao.js');

const listarPedido = (req, res) => {
    con.query(pedido.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarPedidoId = (req, res) => {
    con.query(pedido.toReadId(req.params), (err, result) => {
        if (err == null) {
            if (result.length > 0) {
                res.json(result).end();
            } else {
                res.status(404).json(result).end();
            }

        } else {
            res.status(500).json(err).end();
        }
    });
}

const criarPedido = async (req, res) => {
    con.query(pedido.create(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const del = (req, res) => {
    con.query(pedido.toDelete(req.params), (err, result) => {
        if (err == null) {
            if (result.affectedRows == 1) {
                res.json(result).end();
            } else
                res.status(404).json().end();
        } else {
            res.status(500).json(err).end();
        }
    });
}

const alterarPedido = async (req, res) => {
    con.query(pedido.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    listarPedido,
    listarPedidoId,
    criarPedido,
    alterarPedido,
    del
}