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
token1 VARCHAR(45) NOT NULL,
token2 VARCHAR(45) NOT NULL,
fkUsuario INT NOT NULL,
acertosTeste TINYINT NOT NULL
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

CREATE TABLE companheiro (
idCompanheiro INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (45) NOT NULL
) AUTO_INCREMENT = 500 ;

CREATE TABLE habilidadeBase (
idHabilidadeBase INT PRIMARY KEY AUTO_INCREMENT,
categoria VARCHAR(20)
) AUTO_INCREMENT = 600 ;

CREATE TABLE habilidadeEspecializada (
idHabilidadeBase INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(30),
valor SMALLINT,
fkHabilidadeBase INT
) AUTO_INCREMENT = 650 ;

CREATE TABLE personagem_has_companheiro (
fkPersonagem INT,
fkCompanheiro INT
) ;

CREATE TABLE companheiro_has_habilidadeEspecializada (
fkCompanheiro INT,
fkHabilidadeEspecializada INT
) ;

CREATE TABLE personagem_has_habilidadeBase (
fkPersonagem INT,
fkHabilidadeBase INT
);

-- Inserts de Teste

INSERT INTO usuario (nome,email,telefone,pais,senha) VALUES 
('Lucas Hideaki', 'lucas.tsuzuku@sptech.com', '11123456789','Brasil', '123456');

INSERT INTO personagem (nome,sexo,aptidao,falha,dataCriacao,fkUsuario,token1,token2, acertosTeste) VALUES 
('Mark Anthony', 1, 'nenhuma aptidao discernivel','acrofobia','2025-05-07 11:10:59', 1, 'assassino', 'vingança', 3);

INSERT INTO atributo (forca, destreza, inteligencia, percepcao, charme, temperamento, fkPersonagem) VALUES (1,2,3,3,2,1,100);

INSERT INTO habilidadeBase (categoria) VALUES 
('armasBrancas');

INSERT INTO habilidadeEspecializada (nome, valor, fkHabilidadeBase) VALUES 
('1mao', 20, 600);

INSERT INTO companheiro (nome) VALUES 
('nyoka'),
('ellie');

INSERT INTO personagem_has_companheiro (fkPersonagem, fkCompanheiro) VALUES 
(1,500),
(1,501);

INSERT INTO companheiro_has_habilidadeEspecializada (fkCompanheiro, fkHabilidadeEspecializada) VALUES 
(500,650),
(501,650);

INSERT INTO personagem_has_habilidadeBase (fkPersonagem, fkHabilidadeBase) VALUES 
(100,650);

SELECT * FROM usuario;
SELECT * FROM personagem;
SELECT * FROM atributo;
SELECT * FROM companheiro;
SELECT * FROM habilidadeBase;
SELECT * FROM habilidadeEspecializada;
SELECT * FROM personagem_has_habilidadeBase;
SELECT * FROM personagem_has_companheiro;
SELECT * FROM companheiro_has_habilidadeEspecializada;
-- Constraints

ALTER TABLE personagem ADD CONSTRAINT fkPersonagemUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario);
ALTER TABLE atributo ADD CONSTRAINT fkAtributoPersonagem FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem);