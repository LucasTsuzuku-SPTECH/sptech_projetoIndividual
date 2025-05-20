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
  var instrucaoSql = `SELECT COUNT(idPersonagem) as Quantidade_Personagens , DATE(dataCriacao) AS Data_Criacao FROM personagem GROUP BY Data_Criacao;`;

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

module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal,
  buscarTodosPersonagensPorDataCriacao,
  buscarTodasHabilidadeTodosPersonagens,
  buscarTodosAtributosTodosPersonagens,
};
