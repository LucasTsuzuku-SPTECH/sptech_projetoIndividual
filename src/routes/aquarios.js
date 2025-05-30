var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

router.get("/:empresaId", function (req, res) {
  aquarioController.buscarAquariosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  aquarioController.cadastrar(req, res);
});

router.post("/cadastrarPersonagem", function (req, res) {
  console.log("Passei por aqu no cadastrarPersonagem");
  aquarioController.cadastrarPersonagem(req, res);
});

router.post("/cadastrarAtributoPersonagem", function (req, res) {
  console.log("Passei por aqu no cadastrarAtributoPersonagem");
  aquarioController.cadastrarAtributoPersonagem(req, res);
});

router.post("/cadastrarHabilidadePersonagem", function (req, res) {
  console.log("Passei por aqu no cadastrarHabilidadePersonagem");
  aquarioController.cadastrarHabilidadePersonagem(req, res);
});

module.exports = router;
