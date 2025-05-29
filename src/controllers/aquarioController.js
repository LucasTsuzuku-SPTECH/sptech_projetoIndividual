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
  var nome = req.body.nome.toString();
  var sexo = req.body.sexo;
  var aptidao = req.body.aptidao.toString();
  var falha = req.body.falha.toString();
  var token1 = req.body.token1.toString();
  var token2 = req.body.token2.toString();
  var companheiro1 = req.body.companheiro1.toString();
  var companheiro2 = req.body.companheiro2.toString();
  var acertosTeste = req.body.acertosTeste;
  var fkUsuario = req.body.fkUsuario;

  /*
  sexo: Number(sexoPersonagemSelecionado),
        aptidao: aptidaoSelecionado,
        falha: falhaSelecionado,
        token1: arrayTokensSelecionados[0],
        token2: arrayTokensSelecionados[1],
        companheiro1: arrayCompanheirosSelecionados[0],
        companheiro2: arrayCompanheirosSelecionados[1],
        acertosTeste: acertosPersonagemSelecionado,
        fkUsuario: sessionStorage.ID_USUARIO 
   */

  if (nome == undefined) {
    res.status(400).send("nome está undefined!");
  } else if (aptidao == undefined) {
    res.status(400).send("aptidao está undefined!");
  } else if (sexo == undefined) {
    res.status(400).send("sexo está undefined!");
  } else if (falha == undefined) {
    falha = "";
    // res.status(400).send("falha está undefined!");
  } else if (token1 == undefined) {
    token1 = "";
    // res.status(400).send("falha está undefined!");
  } else if (token2 == undefined) {
    token2 = "";
    // res.status(400).send("falha está undefined!");
  } else if (companheiro1 == undefined) {
    companheiro1 = "";
    // res.status(400).send("falha está undefined!");
  } else if (companheiro2 == undefined) {
    companheiro2 = "";
    // res.status(400).send("falha está undefined!");
  } else if (acertosTeste == undefined) {
    res.status(400).send("acertosTeste está undefined!");
  } else if (fkUsuario == undefined) {
    res.status(400).send("fkUsuario está undefined!");
  }
  if (companheiro2 == undefined) {
    companheiro2 = "";
    // res.status(400).send("falha está undefined!");
  } else {
    aquarioModel
      .cadastrarPersonagem(
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

function cadastrarAtributoPersonagem(req, res) {
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
      .cadastrarAtributoPersonagem(
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
