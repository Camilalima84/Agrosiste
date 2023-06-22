create database agrosistec;

create table Usuario(
	ID int primary key,
    Nome varchar(255),
    Senha varchar(255)
);

create table Animal(
	ID int primary key,
    Nome varchar(255),
    Raça varchar(255),
    peso float,
    MedLeite float,
    DataNasc date,
    DataDesma date,
    Sexo bool,
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
    Nome varchar(255),
    Veterinario varchar(255),
    ValorVet float,
    Problema varchar(255),
    Medicamento varchar(255),
    ValorMed float,
    Datas date
);

create table Alimentacao(
	ID int primary key,
    Nome varchar(255),
    Regime varchar(255),
    Qnt int,
    Datas date
);