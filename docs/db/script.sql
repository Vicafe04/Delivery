drop database if exists delivery;
create database delivery charset=UTF8 collate utf8_general_ci;
use delivery;

create table entregadores(
	id_motoboy integer primary key auto_increment,
	nome varchar(40) not null,
	email varchar(30) not null,
	senha varchar(30) not null,
	veiculo varchar(30) not null
);

create table pedidos(
    id_pedido integer not null primary key auto_increment,
    nome varchar(40) not null,
    endereco varchar(60) not null,
    produto varchar(30) not null,
    data date,
    hora_pedido time,
    hora_entrega time,
    hora_fim time,
    entregador integer,
    foreign key (entregador) references entregadores(id_motoboy)
);

LOAD DATA INFILE 'C:/Users/vinic/OneDrive/Documentos/GitHub/3DES/Delivery/docs/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/vinic/OneDrive/Documentos/GitHub/3DES/Delivery/docs/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

drop view if exists vw_gerarPedido;
create view vw_gerarPedido AS 
SELECT p.nome, p.endereco, p.produto, p.data, p.hora_pedido, e.id_motoboy
FROM entregadores e INNER JOIN pedidos p on e.id_motoboy = p.entregador;

update pedidos set hora_fim = null where hora_fim = "00:00:00";
update pedidos set hora_entrega = null where id_pedido > 61;