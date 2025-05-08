CREATE DATABASE IF NOT EXISTS outerworlds;

USE outerworlds;

CREATE TABLE usuario (

idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL,
telefone VARCHAR(45) NOT NULL,
pais VARCHAR(45) NOT NULL,
senha VARCHAR(45) NOT NULL
) AUTO_INCREMENT = 1;

CREATE TABLE personagem (
idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
sexo TINYINT NOT NULL,
aptidao VARCHAR(45) NOT NULL,
falha VARCHAR(45) NOT NULL,
dataCriacao VARCHAR(45) NOT NULL,
fkUsuario INT NOT NULL
) AUTO_INCREMENT = 100 ;

CREATE TABLE atributo (
idAtributo INT PRIMARY KEY AUTO_INCREMENT,
forca TINYINT NOT NULL,
destreza TINYINT NOT NULL,
inteligencia TINYINT NOT NULL,
percepcao TINYINT NOT NULL,
charme TINYINT NOT NULL,
temperamento TINYINT NOT NULL,
fkPersonagem INT UNIQUE
) AUTO_INCREMENT = 200 ;

CREATE TABLE personagem_has_teste (
fkPersonagem INT,
fkTeste INT
) ;

CREATE TABLE teste (
idTeste INT,
nome VARCHAR(45),
respostaCerta TINYINT
) AUTO_INCREMENT = 300 ;

CREATE TABLE personagem_has_token (
fkPersonagem INT,
fkToken INT
) ;

CREATE TABLE token (
idToken INT,
nome VARCHAR(45),
statusToken TINYINT
) AUTO_INCREMENT = 400 ;

CREATE TABLE personagem_has_companheiro (
fkPersonagem INT,
fkCompanheiro INT
) ;

CREATE TABLE companheiro (
idCompanheiro INT PRIMARY KEY,
nome VARCHAR (45) NOT NULL
) AUTO_INCREMENT = 500 ;

CREATE TABLE companheiro_has_habilidadeEspecializada (
fkCompanheiro INT,
fkHabilidadeEspecializada INT
) ;

CREATE TABLE personagem_has_habilidadeBase (
fkPersonagem INT,
fkHabilidadeBase INT
);

CREATE TABLE habilidadeBase (
idHabilidadeBase INT PRIMARY KEY,
categoria VARCHAR(20)
) AUTO_INCREMENT = 600 ;

CREATE TABLE habilidadeEspecializada (
idHabilidadeBase INT PRIMARY KEY,
nome VARCHAR(30),
valor SMALLINT,
fkHabilidadeBase INT
) AUTO_INCREMENT = 650 ;

-- Inserts de Teste

INSERT INTO usuario (nome,email,telefone,pais,senha) VALUES 
('Lucas Hideaki', 'lucas.tsuzuku@sptech.com', '11123456789','Brasil', '123456');

INSERT INTO personagem (nome,sexo,aptidao,falha,dataCriacao,fkUsuario) VALUES 
('Mark Anthony', 1, 'nenhuma aptidao discernivel','acrofobia','2025-05-07 11:10:59', 1);

-- Constraints

ALTER TABLE personagem ADD CONSTRAINT fkPersonagemUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario);
ALTER TABLE atributo ADD CONSTRAINT fkAtributoPersonagem FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem);