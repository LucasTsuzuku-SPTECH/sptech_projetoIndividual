var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
  const limite_linhas = 7;

  var idAquario = req.params.idAquario;

  console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  medidaModel
    .buscarUltimasMedidas(idAquario, limite_linhas)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res) {
  var idAquario = req.params.idAquario;

  console.log(`Recuperando medidas em tempo real`);

  medidaModel
    .buscarMedidasEmTempoReal(idAquario)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarTodosPersonagensPorDataCriacao(req, res) {
  //const limite_linhas = 7;

  var idAquario = req.params.idAquario;

  console.log(`Recuperando as ultimas  medidas`);

  medidaModel
    .buscarTodosPersonagensPorDataCriacao()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarTodasHabilidadeTodosPersonagens(req, res) {
  //const limite_linhas = 7;

  var idAquario = req.params.idAquario;

  console.log(`Recuperando as ultimas  medidas`);

  medidaModel
    .buscarTodasHabilidadeTodosPersonagens()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarTodosAtributosTodosPersonagens(req, res) {
  //const limite_linhas = 7;

  //var idAquario = req.params.idAquario;

  //console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  medidaModel
    .buscarTodosAtributosTodosPersonagens()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarTodasFalhasTodosPersonagens(req, res) {
  //const limite_linhas = 7;

  //var idAquario = req.params.idAquario;

  //console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  medidaModel
    .buscarTodasFalhasTodosPersonagens()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarTodasAptidaoTodosPersonagens(req, res) {
  //const limite_linhas = 7;

  //var idAquario = req.params.idAquario;

  //console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  medidaModel
    .buscarTodasAptidaoTodosPersonagens()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarTodosAtributosPersonagem(req, res) {
  var idPersonagem = req.params.idPersonagem;

  medidaModel
    .buscarTodosAtributosPersonagem(idPersonagem)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarTodasHabilidadesPersonagem(req, res) {
  var idPersonagem = req.params.idPersonagem;

  medidaModel
    .buscarTodasHabilidadesPersonagem(idPersonagem)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarIdPersonagemCriado(req, res) {
  medidaModel
    .buscarIdPersonagemCriado()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarIdHabilidadeCriada(req, res) {
  medidaModel
    .buscarIdHabilidadeCriada()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function contagemPersonagensCriados(req, res) {
  //const limite_linhas = 7;

  //var idAquario = req.params.idAquario;

  //console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  medidaModel
    .contagemPersonagensCriados()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function diaSemanaKpi(req, res) {
  //const limite_linhas = 7;

  //var idAquario = req.params.idAquario;

  //console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  medidaModel
    .diaSemanaKpi()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
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
