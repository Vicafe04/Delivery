const lista = document.querySelector(".list");
const lista2 = document.querySelector(".list2");
const itemlista = document.querySelector(".item-list");
const itemlista2 = document.querySelector(".item-list2");
const inpClient = document.querySelector("#inpCliente");
const inpAdress = document.querySelector("#inpEndereco");
const inpOrder = document.querySelector("#inpPedido");


function carregar() {
    fetch("http://localhost:4000/read")
        .then(resp => { return resp.json() })
        .then(chamado => {
            chamado.forEach(data => {

                if (data.hora_fim == null) {
                    if (data.hora_entrega == null) {
                        let item = itemlista.cloneNode(true);

                        item.classList.remove("model");

                        item.querySelector("#id").innerHTML = "Id: " + data.id_pedido;
                        item.querySelector("#nome").innerHTML = "Nome: " + data.nome;
                        item.querySelector("#endereco").innerHTML = "Endereço: " + data.endereco;
                        item.querySelector("#horario").innerHTML = "Hora do pedido: " + data.hora_pedido;
                        item.querySelector("#produto").innerHTML = "Produto: " + data.produto;

                        item.querySelector("#data").innerHTML = data.data.split('T')[0];

                        lista.appendChild(item);
                    } else {
                        let item = itemlista2.cloneNode(true);

                        item.classList.remove("model");

                        item.querySelector("#id").innerHTML = "Id: " + data.id_pedido;
                        item.querySelector("#nome").innerHTML = "Nome: " + data.nome;
                        item.querySelector("#endereco").innerHTML = "Endereço: " + data.endereco;
                        item.querySelector("#horario").innerHTML = "Hora do pedido: " + data.hora_pedido;
                        item.querySelector("#horario-entrega").innerHTML = "Hora da entrega: " + data.hora_entrega;
                        item.querySelector("#produto").innerHTML = "Produto: " + data.produto;

                        item.querySelector("#data").innerHTML = data.data.split('T')[0];

                        lista2.appendChild(item);
                    }
                }

                console.log(data.data)

            })
        })
}

function gerarPedidoc() {
    fetch("http://localhost:4000/read")
        .then(res => { return res.json() })
        .then((data) => {

            inpClient.value = data.nome;
            inpAdress.value = data.endereco;
            inpOrder.value = data.produto;

        })
}
function done() {
    var date = new Date();
    const getTime = date;
    console.log(getTime.split(" "));
}