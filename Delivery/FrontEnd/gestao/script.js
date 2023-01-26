const lista = document.querySelector(".list");
const itemlista = document.querySelector(".item-list");

function carregar() {
    fetch("http://localhost:4000/read")
        .then(resp => { return resp.json() })
        .then(chamado => {
            chamado.forEach(data => {
                let item = itemlista.cloneNode(true);

                item.classList.remove("model");

                item.querySelector("#id").innerHTML = "Id: " + data.id_pedido;
                item.querySelector("#nome").innerHTML = "Nome: " + data.nome;
                item.querySelector("#endereco").innerHTML = "Endereço: " + data.endereco;
                item.querySelector("#horario").innerHTML = "Hora do pedido: " + data.hora_pedido;
                item.querySelector("#produto").innerHTML = "Produto: " + data.produto;

                item.querySelector("#data").innerHTML = data.data;
                console.log(data.data)
                
                
                lista.appendChild(item);
            })
        })
}
