drop database if exists delivery;
create database delivery charset=UTF8 collate utf8_general_ci;
use delivery;

create table entregadores(
	id_motoboy integer not null primary key auto_increment,
	nome varchar(40) not null,
	email varchar(30) not null,
	senha varchar(30) not null,
	veiculo varchar(30) not null
);

create table pedidos(
    id_pedido integer not null primary key auto_increment,
    nome varchar(30) not null,
    endereco varchar(50) not null,
    produto varchar(30) not null,
    data date not null,
    hora_pedido time not null,
    hora_entrega time,
    hora_fim time,
    entregador integer not null,
    foreign key (entregador) references entregadores(id_motoboy)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Delivery/docs/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Delivery/docs/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

update pedidos set hora_fim = null where hora_fim = "00:00:00";
update pedidos set hora_entrega = null where id_pedido > 61;

