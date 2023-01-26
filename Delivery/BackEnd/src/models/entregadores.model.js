const toLogin = (model) => {
    return `select * from entregadores where email = '${model.email}' and senha = '${model.senha}'`;
}

const toReadAll = () => {
    return `select * from entregadores`
}

module.exports = {
    toLogin,
    toReadAll
}