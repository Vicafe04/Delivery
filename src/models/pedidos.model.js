const toReadAll = () => {
    return "select * from pedidos";
}

const create = (model) => {
	return `insert into pedidos values(default,'${model.nome}', '${model.endereco}', '${model.produto}', curdate(), curtime(), '${model.hora_entrega}', '${model.hora_fim}', ${model.entregador})`;
}

const toDelete = (model) => {
    return `DELETE FROM pedidos WHERE id_pedido = ${model.id}`;
}

const toUpdate = (model) => {
    return `UPDATE pedidos SET 
                nome = '${model.nome}',
                endereco = '${model.endereco}',
                produto = '${model.produto}',
                entregador = '${model.entregador}'
                WHERE id_pedido = ${model.id}`;
}

module.exports = {
    toReadAll,
    create,
    toDelete,
    toUpdate,
}