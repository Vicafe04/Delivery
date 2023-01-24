const express = require('express');

const router = express.Router();

const PedidoController = require("../controllers/pedidos.controller");


router.get('/read', PedidoController.listarPedido);
router.get('/readId/:id', PedidoController.listarPedidoId);
router.post('/create', PedidoController.criarPedido);
router.delete('/del/:id', PedidoController.del);
router.put('/update', PedidoController.alterarPedido);
module.exports = router;