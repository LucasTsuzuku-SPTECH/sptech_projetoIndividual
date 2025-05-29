var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel
    .buscarAquariosPorEmpresa(idUsuario)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
  var descricao = req.body.descricao;
  var idUsuario = req.body.idUsuario;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {
    aquarioModel
      .cadastrar(descricao, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      })
      .catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrarPersonagem(req, res) {
  var fkPersonagem = req.body.idPersonagem;
  var forca = req.body.atributoForca;
  var destreza = req.body.atributoDestreza;
  var inteligencia = req.body.atributoInteligencia;
  var percepcao = req.body.atributoPercepcao;
  var charme = req.body.atributoCharme;
  var temperamento = req.body.atributoTemperamento;

  if (fkPersonagem == undefined) {
    res.status(400).send("fkPersonagem está undefined!");
  } else if (forca == undefined) {
    res.status(400).send("forca está undefined!");
  } else if (destreza == undefined) {
    res.status(400).send("forca está undefined!");
  } else if (inteligencia == undefined) {
    res.status(400).send("forca está undefined!");
  } else if (percepcao == undefined) {
    res.status(400).send("forca está undefined!");
  } else if (charme == undefined) {
    res.status(400).send("forca está undefined!");
  }
  if (temperamento == undefined) {
    res.status(400).send("forca está undefined!");
  } else {
    aquarioModel
      .cadastrarPersonagem(
        forca,
        destreza,
        inteligencia,
        percepcao,
        charme,
        temperamento,
        fkPersonagem
      )
      .then((resultado) => {
        res.status(201).json(resultado);
      })
      .catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,
  cadastrarPersonagem,
};
