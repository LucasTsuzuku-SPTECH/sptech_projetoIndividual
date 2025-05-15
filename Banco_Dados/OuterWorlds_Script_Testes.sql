-- Inserts de Teste

INSERT INTO usuario (nome,email,telefone,pais,senha) VALUES 
('Lucas Hideaki', 'lucas.tsuzuku@sptech.com', '11123456789','Brasil', '123456'),
('Amanda Nunes', 'amanda.nunes@sptech.com', '78945612312','Brasil', '123456'),
('Carlos Armando', 'carlos.armando@sptech.com', '45612378945','Brasil', '123456'),
('Manny Mark', 'manny.mark@sptech.com', '45645612378','Estados Unidos', '123456'),
('Jon Mayor', 'jon.mayor@sptech.com', '23564561245','Londres', '123456');

INSERT INTO personagem (nome,sexo,aptidao,falha,dataCriacao,fkUsuario,token1,token2, acertosTeste, companheiro1, companheiro2) VALUES 
('Mark Anthony', 1, 'nenhuma aptidao discernivel','acrofobia','2025-05-07 11:10:59', 1, 'assassino', 'labias de vendedor', 3, 'ellie', 'nyoka'),
('Nicole Dash', 1, 'Burocrata, rank 0','robofobia','2025-05-07 10:10:59', 1, 'labias de vendedor', 'vingança', 2, 'parvati', 'max'),
('Jake Hony', 1, 'Técnico de Serviço de Bebidas','gastador compulsivo','2025-05-07 09:10:59', 2, 'soliquo', 'vingança', 1, 'felix', 'sam'),
('Nick Back', 1, 'Caixa, Sub-Nível, Não Supervisionador','hipermetropia','2025-05-07 08:10:59', 3, 'labias de vendedor', 'soliquo', 3, 'felix', 'nyoka'),
('João Rubio', 1, 'Eletricista, parte de cabeamento','acrofobia','2025-05-07 07:10:59', 4, 'demonstracao fatal', 'vingança', 0, 'sam', 'parvati'),
('Jeremias Carros', 1, 'Fazendeiro','gastador compulsivo','2025-05-07 06:10:59', 5, 'soliquo', 'vingança', 1, 'ellie', 'parvati'),
('John Ken', 1, 'Sub Sous Chef','robôfobia','2025-05-06 11:10:59', 5, 'assassino', 'labias de vendedor', 2, 'ellie', 'max');

INSERT INTO atributo (forca, destreza, inteligencia, percepcao, charme, temperamento, fkPersonagem) VALUES 
(-1,3,3,3,3,1,100),
(1,2,2,2,3,2,101),
(1,2,3,3,2,1,102),
(1,2,3,1,2,3,103),
(1,2,3,3,2,1,104),
(1,2,3,3,2,1,105),
(2,1,3,2,3,1,106);

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


-- testes

SELECT * FROM usuario;
SELECT * FROM personagem;
SELECT * FROM atributo;
SELECT * FROM habilidadeBase;
SELECT * FROM habilidadeEspecializada;
SELECT * FROM personagem_has_habilidadeBase;

-- ver usuario e seus personagens

SELECT * FROM usuario 
INNER JOIN personagem ON fkUsuario = idUsuario;

SELECT * FROM usuario 
INNER JOIN personagem ON fkUsuario = idUsuario WHERE usuario.nome = 'Lucas Hideaki';

-- ver personagem e sua aptidao

SELECT * FROM personagem 
INNER JOIN atributo ON fkPersonagem = idPersonagem;

-- ver personagem e suas habilidades base

SELECT personagem.nome, habilidadeBase.categoria, habilidadeEspecializada.nome, habilidadeEspecializada.valor FROM personagem 
INNER JOIN personagem_has_habilidadeBase ON fkPersonagem = idPersonagem
INNER JOIN habilidadeBase ON fkHabilidadeBase = idHabilidadeBase
INNER JOIN habilidadeEspecializada ON habilidadeEspecializada.fkHabilidadeBase = habilidadeBase.idHabilidadeBase 
WHERE personagem.nome = 'Mark Anthony';