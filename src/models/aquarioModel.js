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
  nome,
  sexo,
  aptidao,
  falha,
  token1,
  token2,
  companheiro1,
  companheiro2,
  acertosTeste,
  fkUsuario
) {
  var instrucaoSql = `INSERT INTO personagem (nome,sexo,aptidao,falha,dataCriacao,fkUsuario,token1,token2, acertosTeste, companheiro1, companheiro2) VALUES ('${nome}', ${sexo}, '${aptidao}', '${falha}', now(), '${fkUsuario}', '${token1}', '${token2}', '${acertosTeste}', '${companheiro1}', '${companheiro2}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarAtributoPersonagem(
  forca,
  destreza,
  inteligencia,
  percepcao,
  charme,
  temperamento,
  fkPersonagem
) {
  var instrucaoSql = `INSERT INTO atributo (forca,destreza,inteligencia,percepcao,charme,temperamento,fkPersonagem) VALUES ('${forca}', ${destreza}, '${inteligencia}', '${percepcao}', '${charme}', '${temperamento}', '${fkPersonagem}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarHabilidadePersonagem(
  habilidade1Mao,
  habilidade2Mao,
  habilidadePistolas,
  habilidadeArmasLongas,
  habilidadeArmasPesadas,
  habilidadeEvasao,
  habilidadeBloqueio,
  habilidadePersuasao,
  habilidadeMentira,
  habilidadeIntimidacao,
  habilidadeEsgueira,
  habilidadeHacking,
  habilidadeGazua,
  habilidadeMedicina,
  habilidadeCiencia,
  habilidadeEngenharia,
  habilidadeInspiracao,
  habilidadeDeterminacao
) {
  var instrucaoSql = `INSERT INTO habilidade (1mao, 2mao, pistolas, armasLongas, armasPesadas, evasao, bloqueio, persuasao, mentira, intimidacao, esgueira, hacking, gazua, medicina, ciencia, engenharia, inspiracao, determinacao) VALUES (${habilidade1Mao}, ${habilidade2Mao}, ${habilidadePistolas}, ${habilidadeArmasLongas}, ${habilidadeArmasPesadas}, ${habilidadeEvasao}, ${habilidadeBloqueio}, ${habilidadePersuasao}, ${habilidadeMentira}, ${habilidadeIntimidacao}, ${habilidadeEsgueira}, ${habilidadeHacking}, ${habilidadeGazua}, ${habilidadeMedicina}, ${habilidadeCiencia}, ${habilidadeEngenharia}, ${habilidadeInspiracao}, ${habilidadeDeterminacao})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,
  cadastrarPersonagem,
  cadastrarAtributoPersonagem,
  cadastrarHabilidadePersonagem,
};
