create database agrosistec
default character set utf8
default collate utf8_general_ci;

use agrosistec;

#drop database agrosistec;

create table Usuario(
	ID int not null auto_increment,
    Nome varchar(30) not null,
    Senha varchar(30) not null,
    primary key(ID)
)default charset utf8;

describe Usuario;

create table Animal(
	ID int primary key,
    Nome varchar(30) not null,
    Raça varchar(30) not null,
    peso decimal(6,2),
    MedLeite float,
    DataNasc date,
    DataDesma date,
    Sexo enum('M','F'),
    FaixaEta  varchar(255),
    Stts  varchar(255)
);

create table ProdLeite(
	ID int primary key,
    Datas date,
    PrimOrdenha varchar(255),
    SeguOrdenha varchar(255)
);

create table EvenVet(
	ID int primary key,
    Nome varchar(30),
    Veterinario varchar(30),
    ValorVet float,
    Problema varchar(255),
    Medicamento varchar(255),
    ValorMed float,
    Datas date
);

create table Alimentacao(
	ID int primary key,
    Nome varchar(30),
    Regime varchar(255),
    Qnt int,
    Datas date
);