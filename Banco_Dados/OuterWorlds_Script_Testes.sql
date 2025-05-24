-- Inserts de Teste

TRUNCATE usuario;
TRUNCATE personagem;
TRUNCATE atributo;
TRUNCATE habilidade;
TRUNCATE personagem_has_habilidade;

INSERT INTO usuario (nome,email,telefone,pais,senha) VALUES 
('Lucas Hideaki', 'lucas.tsuzuku@sptech.com', '11123456789','Brasil', '123456'),
('Amanda Nunes', 'amanda.nunes@sptech.com', '78945612312','Brasil', '123456'),
('Carlos Armando', 'carlos.armando@sptech.com', '45612378945','Brasil', '123456'),
('Manny Mark', 'manny.mark@sptech.com', '45645612378','Estados Unidos', '123456'),
('Jon Mayor', 'jon.mayor@sptech.com', '23564561245','Londres', '123456');

INSERT INTO personagem (nome,sexo,aptidao,falha,dataCriacao,fkUsuario,token1,token2, acertosTeste, companheiro1, companheiro2) VALUES 
('Mark Anthony', 1, 'nenhuma aptidao discernivel','acrofobia','2025-05-07 11:10:59', 1, 'assassino', 'labias de vendedor', 3, 'ellie', 'nyoka'),
('Nicole Dash', 0, 'Burocrata, rank 0','robofobia','2025-05-08 10:10:59', 1, 'labias de vendedor', 'vingança', 2, 'parvati', 'max'),
('Jake Hony', 1, 'Técnico de Serviço de Bebidas','gastador compulsivo','2025-05-09 09:10:59', 2, 'soliquo', 'vingança', 1, 'felix', 'sam'),
('Ana Back', 0, 'Caixa, Sub-Nível, Não Supervisionador','hipermetropia','2025-05-10 08:10:59', 3, 'labias de vendedor', 'soliquo', 3, 'felix', 'nyoka'),
('Maria Rubio', 0, 'Eletricista, parte de cabeamento','cinofobia','2025-05-10 07:10:59', 4, 'demonstracao fatal', 'vingança', 0, 'sam', 'parvati'),
('Jeremias Carros', 1, 'Fazendeiro','gastador compulsivo','2025-05-10 06:10:59', 5, 'soliquo', 'vingança', 1, 'ellie', 'parvati'),
('John Ken', 1, 'Sub Sous Chef','robôfobia','2025-05-11 11:10:59', 5, 'assassino', 'labias de vendedor', 2, 'ellie', 'max');

INSERT INTO atributo (forca, destreza, inteligencia, percepcao, charme, temperamento, fkPersonagem) VALUES 
(-1,3,3,3,3,1,100),
(1,2,2,2,3,2,101),
(1,2,3,3,2,1,102),
(1,2,3,1,2,3,103),
(1,2,3,3,2,1,104),
(1,2,3,3,2,1,105),
(2,1,3,2,3,1,106);

INSERT INTO habilidade (1mao, 2mao, pistolas, armasLongas, armasPesadas, evasao, bloqueio, persuasao, mentira, intimidacao, esgueira, hacking, gazua, medicina, ciencia, engenharia, inspiracao, determinacao) 
VALUES 
(20,40,20,56,56,10,23,85,56,.6,20,45,10,56,47,89,96,25),
(10,20,20,47,20,20,20,58,20,20,20,11,20,20,20,65,20,14),
(20,20,01,47,20,47,20,20,65,20,20,20,56,20,98,20,45,20),
(20,47,45,20,12,20,20,20,32,20,56,20,1,20,20,25,20,20),
(20,10,20,56,20,47,20,20,20,20,20,25,20,65,20,54,20,65),
(20,20,20,1,20,20,20,25,20,58,10,20,20,36,20,47,20,20),
(20,20,20,20,58,20,20,85,58,20,74,20,58,20,47,69,20,20);

INSERT INTO personagem_has_habilidade (fkPersonagem, fkHabilidade) VALUES 
(100,600),
(101,601);

-- testes

SELECT * FROM usuario;
SELECT * FROM personagem;
SELECT * FROM atributo;
SELECT * FROM habilidade;
SELECT * FROM personagem_has_habilidade;

-- ver usuario e seus personagens

SELECT * FROM usuario 
INNER JOIN personagem ON fkUsuario = idUsuario;

SELECT * FROM usuario 
INNER JOIN personagem ON fkUsuario = idUsuario WHERE usuario.nome = 'Lucas Hideaki';

-- ver personagem e sua aptidao

SELECT * FROM personagem 
INNER JOIN atributo ON fkPersonagem = idPersonagem;

-- ver personagem e suas habilidades base

SELECT personagem.nome, habilidade.* FROM personagem 
INNER JOIN personagem_has_habilidade ON fkPersonagem = idPersonagem
INNER JOIN habilidade ON fkHabilidade = idHabilidade;

-- buscar personagem por data de criação
SELECT COUNT(idPersonagem) as Quantidade_Personagens , DATE_FORMAT(dataCriacao, "%Y-%m-%d") AS Data_Criacao FROM personagem GROUP BY Data_Criacao ORDER BY Data_Criacao DESC;

-- agrupar as pontuações das habilidades para descobrir qual é a mais escolhida pelas pessoas
SELECT * FROM habilidade;
SELECT 
SUM(1mao) as Soma_1mao,
SUM(2mao) as Soma_2mao,
SUM(pistolas) as Soma_pistolas,
SUM(armasLongas) as Soma_armasLongas,
SUM(armasPesadas) as Soma_armasPesadas,
SUM(evasao) as Soma_evasao,
SUM(bloqueio) as Soma_bloqueio,
SUM(persuasao) as Soma_persuasao,
SUM(mentira) as Soma_mentira,
SUM(intimidacao) as Soma_intimidacao,
SUM(esgueira) as Soma_esgueira,
SUM(hacking) as Soma_hacking,
SUM(gazua) as Soma_gazua,
SUM(medicina) as Soma_medicina,
SUM(ciencia) as Soma_ciencia,
SUM(engenharia) as Soma_engenharia,
SUM(inspiracao) as Soma_inspiracao,
SUM(determinacao) as Soma_determinacao
FROM habilidade;

/*Temho que ver uma maneira de trasformar as linhas em colunas para ser mais dinâmico*/

--  Selecionar atributos de todos os personagens
SELECT * FROM atributo;
SELECT 
SUM(forca) as Soma_forca,
SUM(destreza) as Soma_destreza,
SUM(inteligencia) as Soma_inteligencia,
SUM(percepcao) as Soma_percepcao,
SUM(charme) as Soma_charme,
SUM(temperamento) as Soma_temperamento
FROM atributo;

--  Selecionar falhas de todos os personagens e contar

SELECT * FROM personagem;

SELECT falha, COUNT(falha) as Contagem_falhas from personagem GROUP BY falha ORDER BY Contagem_falhas DESC LIMIT 6 ;

--  Selecionar aptidoes de todos os personagens e contar

SELECT * FROM personagem;
SELECT aptidao, COUNT(aptidao) as Contagem_aptidao from personagem GROUP BY aptidao ORDER BY Contagem_aptidao DESC LIMIT 6 ;

-- selecionar atributos 1 personagem;
SELECT * FROM personagem;
SELECT * FROM atributo;
SELECT forca, destreza, inteligencia, percepcao, charme, temperamento FROM atributo WHERE fkPersonagem = 100;

-- selecionar habilidades 1 personagem;
SELECT * FROM personagem;
SELECT * FROM personagem_has_habilidade;
SELECT * FROM habilidade;

SELECT fkHabilidade FROM personagem_has_habilidade WHERE fkPersonagem = 100;

SELECT * FROM habilidade WHERE idHabilidade = (SELECT personagem_has_habilidade.fkHabilidade FROM personagem_has_habilidade WHERE fkPersonagem = 100);


SELECT 
1mao, 
2mao, 
pistolas,
armasLongas,
armasPesadas,
evasao,
bloqueio,
persuasao,
mentira,
intimidacao,
esgueira,
hacking,
gazua,
medicina,
ciencia,
engenharia,
inspiracao,
determinacao FROM habilidade WHERE idHabilidade = (SELECT personagem_has_habilidade.fkHabilidade FROM personagem_has_habilidade WHERE fkPersonagem = 100);

/*
INSERT INTO habilidadeBase (categoria, pontoExtra) VALUES 
('armasBrancas', 1),
('longoAlcance', 0),
('defesa', 0),
('dialogo', 1),
('furtividade', 0);

INSERT INTO habilidadeEspecializada (nome, valor, fkHabilidadeBase) VALUES 
('1mao', 20, 600),
('2mao', 20, 600),
('pistolas', 20, 601),
('evasao', 20, 602),
('persuasao', 20, 603);

INSERT INTO personagem_has_habilidadeBase (fkPersonagem, fkHabilidadeBase) VALUES 
(100,600),
(100,601),
(100,602),
(100,603),
(101,600),
(101,601),
(101,602),
(101,603);

SELECT * FROM habilidadeBase;
SELECT * FROM habilidadeEspecializada;
SELECT * FROM personagem_has_habilidadeBase;

*/