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
acertosTeste TINYINT NOT NULL,
companheiro1 VARCHAR (45),
companheiro2 VARCHAR (45)
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
categoria VARCHAR(20) NOT NULL,
pontoExtra TINYINT NOT NULL
) AUTO_INCREMENT = 600 ;

CREATE TABLE habilidadeEspecializada (
idHabilidadeBase INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(30),
valor SMALLINT,
fkHabilidadeBase INT
) AUTO_INCREMENT = 650 ;

CREATE TABLE personagem_has_habilidadeBase (
fkPersonagem INT,
fkHabilidadeBase INT
);

ALTER TABLE personagem ADD CONSTRAINT fkPersonagemUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario);
ALTER TABLE atributo ADD CONSTRAINT fkAtributoPersonagem FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem);
ALTER TABLE personagem_has_habilidadeBase ADD CONSTRAINT fkPerhashabPersonagem FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem);
ALTER TABLE personagem_has_habilidadeBase ADD CONSTRAINT fkPerhashabHabBase FOREIGN KEY (fkHabilidadeBase) REFERENCES habilidadeBase(idHabilidadeBase);
ALTER TABLE habilidadeEspecializada ADD CONSTRAINT fkHabEsp FOREIGN KEY (fkHabilidadeBase) REFERENCES habilidadeBase(idHabilidadeBase);

/*
ALTER TABLE personagem_has_companheiro ADD CONSTRAINT fkPerhascomPersonagem FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem);
ALTER TABLE personagem_has_companheiro ADD CONSTRAINT fkPerhascomComp FOREIGN KEY (fkCompanheiro) REFERENCES companheiro(idCompanheiro);
ALTER TABLE companheiro_has_habilidadeEspecializada ADD CONSTRAINT fkComhashabHabEsp FOREIGN KEY (fkHabilidadeEspecializada) REFERENCES habilidadeEspecializada(idHabilidadeEspecializada);
ALTER TABLE companheiro_has_habilidadeEspecializada ADD CONSTRAINT fkComhashabCom FOREIGN KEY (fkCompanheiro) REFERENCES companheiro(idCompanheiro);
*/
