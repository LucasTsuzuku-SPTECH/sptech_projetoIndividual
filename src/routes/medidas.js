var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
  medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
  medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/todosPersonagensPorDataCriacao", function (req, res) {
  medidaController.buscarTodosPersonagensPorDataCriacao(req, res);
});

router.get("/todasHabilidadesTodosPersonagens", function (req, res) {
  medidaController.buscarTodasHabilidadeTodosPersonagens(req, res);
});

router.get("/todosAtributosTodosPersonagens", function (req, res) {
  medidaController.buscarTodosAtributosTodosPersonagens(req, res);
});

router.get("/todasFalhasTodosPersonagens", function (req, res) {
  medidaController.buscarTodasFalhasTodosPersonagens(req, res);
});

router.get("/todasAptidaoTodosPersonagens", function (req, res) {
  medidaController.buscarTodasAptidaoTodosPersonagens(req, res);
});

router.get("/todosAtributosPersonagem/:idPersonagem", function (req, res) {
  medidaController.buscarTodosAtributosPersonagem(req, res);
});

router.get("/todasHabilidadesPersonagem/:idPersonagem", function (req, res) {
  medidaController.buscarTodasHabilidadesPersonagem(req, res);
});

router.get("/buscarIdPersonagemCriado", function (req, res) {
  medidaController.buscarIdPersonagemCriado(req, res);
});

router.get("/buscarIdHabilidadeCriada", function (req, res) {
  medidaController.buscarIdHabilidadeCriada(req, res);
});

router.get("/contagemPersonagensCriados", function (req, res) {
  medidaController.contagemPersonagensCriados(req, res);
});

router.get("/diaSemanaKpi", function (req, res) {
  medidaController.diaSemanaKpi(req, res);
});
module.exports = router;
