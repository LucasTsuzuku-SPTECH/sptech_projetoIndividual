var database = require("../database/config");

function buscarAquariosPorEmpresa(idUsuario) {
  var instrucaoSql = `SELECT * FROM personagem a WHERE fkUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarPersonagem(
  forca,
  destreza,
  inteligencia,
  percepcao,
  charme,
  temperamento,
  fkPersonagem
) {
  var instrucaoSql = `INSERT INTO atributo (forca, destreza, inteligencia, percepcao, charme, temperamento,fkPersonagem) VALUES (${forca}, ${destreza}, ${inteligencia}, ${percepcao}, ${charme}, ${temperamento}, ${fkPersonagem})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,
  cadastrarPersonagem,
};
