const express = require('express');

const router = express.Router();

const PedidosController = require("../controllers/pedidos.controller");
const EntregadoresController = require("../controllers/entregadores.controller");


router.get('/read', PedidosController.listarPedido);
router.get('/readId/:id', PedidosController.listarPedidoId);
router.post('/create', PedidosController.criarPedido);
router.delete('/del/:id', PedidosController.del);
router.put('/update', PedidosController.alterarPedido);

router.post('/motoboy/login', EntregadoresController.Login);
router.get('/motoboy/read', EntregadoresController.listarLogins);
module.exports = router;