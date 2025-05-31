var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuarioCapturado;

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
    res.status(400).send("destreza está undefined!");
  } else if (inteligencia == undefined) {
    res.status(400).send("inteligencia está undefined!");
  } else if (percepcao == undefined) {
    res.status(400).send("percepcao está undefined!");
  } else if (charme == undefined) {
    res.status(400).send("charme está undefined!");
  }
  if (temperamento == undefined) {
    res.status(400).send("temperamento está undefined!");
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

function cadastrarHabilidadePersonagem(req, res) {
  var habilidade1Mao = req.body.habilidade1Mao;
  var habilidade2Mao = req.body.habilidade2Mao;
  var habilidadePistolas = req.body.habilidadePistolas;
  var habilidadeArmasLongas = req.body.habilidadeArmasLongas;
  var habilidadeArmasPesadas = req.body.habilidadeArmasPesadas;
  var habilidadeEvasao = req.body.habilidadeEvasao;
  var habilidadeBloqueio = req.body.habilidadeBloqueio;
  var habilidadePersuasao = req.body.habilidadePersuasao;
  var habilidadeMentira = req.body.habilidadeMentira;
  var habilidadeIntimidacao = req.body.habilidadeIntimidacao;
  var habilidadeEsgueira = req.body.habilidadeEsgueira;
  var habilidadeHacking = req.body.habilidadeHacking;
  var habilidadeGazua = req.body.habilidadeGazua;
  var habilidadeMedicina = req.body.habilidadeMedicina;
  var habilidadeCiencia = req.body.habilidadeCiencia;
  var habilidadeEngenharia = req.body.habilidadeEngenharia;
  var habilidadeInspiracao = req.body.habilidadeInspiracao;
  var habilidadeDeterminacao = req.body.habilidadeDeterminacao;

  if (habilidade1Mao == undefined) {
    res.status(400).send("habilidade1Mao está undefined!");
  } else if (habilidade2Mao == undefined) {
    res.status(400).send("habilidade1Mao está undefined!");
  } else if (habilidadePistolas == undefined) {
    res.status(400).send("habilidadePistolas está undefined!");
  } else if (habilidadeArmasLongas == undefined) {
    res.status(400).send("habilidadeArmasLongas está undefined!");
  } else if (habilidadeArmasPesadas == undefined) {
    res.status(400).send("habilidadeArmasPesadas está undefined!");
  } else if (habilidadeEvasao == undefined) {
    res.status(400).send("habilidadeEvasao está undefined!");
  } else if (habilidadeBloqueio == undefined) {
    res.status(400).send("habilidadeBloqueio está undefined!");
  } else if (habilidadePersuasao == undefined) {
    res.status(400).send("habilidadePersuasao está undefined!");
  } else if (habilidadeMentira == undefined) {
    res.status(400).send("habilidadeMentira está undefined!");
  } else if (habilidadeIntimidacao == undefined) {
    res.status(400).send("habilidadeIntimidacao está undefined!");
  } else if (habilidadeEsgueira == undefined) {
    res.status(400).send("habilidadeEsgueira está undefined!");
  } else if (habilidadeHacking == undefined) {
    res.status(400).send("habilidadeHacking está undefined!");
  } else if (habilidadeGazua == undefined) {
    res.status(400).send("habilidadeGazua está undefined!");
  } else if (habilidadeMedicina == undefined) {
    res.status(400).send("habilidadeMedicina está undefined!");
  } else if (habilidadeCiencia == undefined) {
    res.status(400).send("habilidadeCiencia está undefined!");
  } else if (habilidadeEngenharia == undefined) {
    res.status(400).send("habilidadeEngenharia está undefined!");
  } else if (habilidadeInspiracao == undefined) {
    res.status(400).send("habilidadeInspiracao está undefined!");
  } else if (habilidadeDeterminacao == undefined) {
    res.status(400).send("habilidadeDeterminacao está undefined!");
  } else {
    aquarioModel
      .cadastrarHabilidadePersonagem(
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

function cadastrarPersonagemHasHabilidade(req, res) {
  var idPersonagem = req.body.idPersonagemCriado;
  var idHabilidade = req.body.idHabilidadeCriada;

  if (idPersonagem == undefined) {
    res.status(400).send("idPersonagem está undefined!");
  }
  if (idHabilidade == undefined) {
    res.status(400).send("idHabilidade está undefined!");
  } else {
    aquarioModel
      .cadastrarPersonagemHasHabilidade(idPersonagem, idHabilidade)
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
  cadastrarAtributoPersonagem,
  cadastrarHabilidadePersonagem,
  cadastrarPersonagemHasHabilidade,
};
