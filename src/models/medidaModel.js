var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
  var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
  var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarTodosPersonagensPorDataCriacao() {
  var instrucaoSql = `SELECT COUNT(idPersonagem) as Quantidade_Personagens , DATE_FORMAT(dataCriacao, "%Y-%m-%d") AS Data_Criacao FROM personagem GROUP BY Data_Criacao`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarTodasHabilidadeTodosPersonagens() {
  var instrucaoSql = `
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
FROM habilidade
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarTodosAtributosTodosPersonagens() {
  var instrucaoSql = `
  SELECT 
SUM(forca) as Soma_forca,
SUM(destreza) as Soma_destreza,
SUM(inteligencia) as Soma_inteligencia,
SUM(percepcao) as Soma_percepcao,
SUM(charme) as Soma_charme,
SUM(temperamento) as Soma_temperamento
FROM atributo
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarTodasFalhasTodosPersonagens() {
  var instrucaoSql = `
  SELECT falha, COUNT(falha) as Contagem_falhas from personagem GROUP BY falha ORDER BY Contagem_falhas DESC LIMIT 6
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarTodasAptidaoTodosPersonagens() {
  var instrucaoSql = `
  SELECT aptidao, COUNT(aptidao) as Contagem_aptidao from personagem GROUP BY aptidao ORDER BY Contagem_aptidao DESC LIMIT 6
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarTodosAtributosPersonagem(idPersonagem) {
  var instrucaoSql = `
  SELECT forca, destreza, inteligencia, percepcao, charme, temperamento FROM atributo WHERE fkPersonagem = ${idPersonagem}
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarTodasHabilidadesPersonagem(idPersonagem) {
  var instrucaoSql = `
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
  determinacao 
  FROM habilidade WHERE idHabilidade = (SELECT personagem_has_habilidade.fkHabilidade FROM personagem_has_habilidade WHERE fkPersonagem = ${idPersonagem})
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarIdPersonagemCriado() {
  var instrucaoSql = `SELECT MAX(idPersonagem) AS idPersonagemCriado FROM personagem`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarIdHabilidadeCriada() {
  var instrucaoSql = `SELECT MAX(idHabilidade) AS idHabilidadeCriada FROM habilidade`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contagemPersonagensCriados() {
  var instrucaoSql = `SELECT COUNT(*) AS totalPersonagens, DATEDIFF(DATE(CURRENT_TIMESTAMP()),MIN(DATE(dataCriacao))) AS diasPassados FROM personagem`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function diaSemanaKpi() {
  var instrucaoSql = `
  SELECT DATE_FORMAT(dataCriacao, "%Y-%m-%d") AS diaSemanaMaiorCriacao from personagem a group by DATE_FORMAT(dataCriacao, "%Y-%m-%d") having count(*) = (select max(qtde) from (SELECT date(dataCriacao) dataCriacao, COUNT(*) qtde from personagem a group by date(dataCriacao)) as x)
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal,
  buscarTodosPersonagensPorDataCriacao,
  buscarTodasHabilidadeTodosPersonagens,
  buscarTodosAtributosTodosPersonagens,
  buscarTodasFalhasTodosPersonagens,
  buscarTodasAptidaoTodosPersonagens,
  buscarTodosAtributosPersonagem,
  buscarTodasHabilidadesPersonagem,
  buscarIdPersonagemCriado,
  buscarIdHabilidadeCriada,
  contagemPersonagensCriados,
  diaSemanaKpi,
};
