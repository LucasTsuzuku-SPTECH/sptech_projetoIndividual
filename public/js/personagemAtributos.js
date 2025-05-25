function atualizarPontosDisponiveis() {
  quantidadeAtributosDisponiveis.innerHTML = pontosAtributosDisponiveis;
}

/* Esse array vou ter que levar á para o final para fazer a subtração com o objeto do personagem */

let arrayAtributoForca = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function atributoForca() {
  var medida = sel_nivel_atributoForca.value;
  if (pontosAtributosDisponiveis <= 0 && medida != "abaixo") {
    console.log("Sem pontos disponíveis");
    avisoAtributo.innerHTML =
      "Não tem pontos o suficiente, as habilidades não foram alteradas";
    return;
  }
  avisoAtributo.innerHTML = "";
  arrayAtributoForca = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  console.log(medida);
  if (medida == "abaixo") {
    arrayAtributoForca = [
      -3, -3, 0, 0, -3, 0, -3, 0, 0, -3, 0, 0, 0, 0, 0, 0, -3, 0,
    ];
    atributosPersonagem.forca = -1;
    pontosAtributosDisponiveis++;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "mediano") {
    return;
  } else if (medida == "acima") {
    arrayAtributoForca = [3, 3, 0, 0, 3, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0];
    atributosPersonagem.forca = 1;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 1;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "alto") {
    arrayAtributoForca = [4, 4, 0, 0, 4, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0];
    atributosPersonagem.forca = 2;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 2;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "muitoAlto") {
    arrayAtributoForca = [5, 5, 0, 0, 5, 0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0];
    atributosPersonagem.forca = 3;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 3;
    console.log(pontosAtributosDisponiveis);
  } else {
    console.log("Valor passado inválido");
    return;
  }
  atualizarPontosDisponiveis();
}

let arrayAtributoDestreza = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

function atributoDestreza() {
  var medida = sel_nivel_atributoDestreza.value;
  if (pontosAtributosDisponiveis <= 0 && medida != "abaixo") {
    console.log("Sem pontos disponíveis");
    avisoAtributo.innerHTML =
      "Não tem pontos o suficiente, as habilidades não foram alteradas";
    return;
  }
  avisoAtributo.innerHTML = "";
  arrayAtributoDestreza = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  console.log(medida);
  if (medida == "abaixo") {
    arrayAtributoDestreza = [
      -3, 0, -3, 0, 0, -3, -3, 0, 0, 0, -3, 0, -3, 0, 0, 0, 0, 0,
    ];
    atributosPersonagem.destreza = -1;
    pontosAtributosDisponiveis++;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "mediano") {
    return;
  } else if (medida == "acima") {
    arrayAtributoDestreza = [
      3, 0, 3, 0, 0, 3, 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0,
    ];
    atributosPersonagem.destreza = 1;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 1;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "alto") {
    arrayAtributoDestreza = [
      4, 0, 4, 0, 0, 4, 4, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0,
    ];
    atributosPersonagem.destreza = 2;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 2;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "muitoAlto") {
    arrayAtributoDestreza = [
      5, 0, 5, 0, 0, 5, 5, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0,
    ];
    atributosPersonagem.destreza = 3;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 3;
    console.log(pontosAtributosDisponiveis);
  } else {
    console.log("Valor passado inválido");
    return;
  }
  atualizarPontosDisponiveis();
}

let arrayAtributoInteligencia = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

function atributoInteligencia() {
  var medida = sel_nivel_atributoInteligencia.value;
  if (pontosAtributosDisponiveis <= 0 && medida != "abaixo") {
    console.log("Sem pontos disponíveis");
    avisoAtributo.innerHTML =
      "Não tem pontos o suficiente, as habilidades não foram alteradas";
    return;
  }
  avisoAtributo.innerHTML = "";
  arrayAtributoInteligencia = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  var medida = sel_nivel_atributoInteligencia.value;
  console.log(medida);
  if (medida == "abaixo") {
    arrayAtributoInteligencia = [
      0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, -3, -3, 0, 0, -3,
    ];
    atributosPersonagem.inteligencia = -1;
    pontosAtributosDisponiveis++;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "mediano") {
    return;
  } else if (medida == "acima") {
    arrayAtributoInteligencia = [
      0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 3, 3, 0, 0, 3,
    ];
    atributosPersonagem.inteligencia = 1;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 1;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "alto") {
    arrayAtributoInteligencia = [
      0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 4, 4, 0, 0, 4,
    ];
    atributosPersonagem.inteligencia = 2;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 2;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "muitoAlto") {
    arrayAtributoInteligencia = [
      0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 5, 5, 0, 0, 5,
    ];
    atributosPersonagem.inteligencia = 3;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 3;
    console.log(pontosAtributosDisponiveis);
  } else {
    console.log("Valor passado inválido");
    return;
  }
  atualizarPontosDisponiveis();
}

let arrayAtributoPercepcao = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

function atributoPercepcao() {
  var medida = sel_nivel_atributoPercepcao.value;
  if (pontosAtributosDisponiveis <= 0 && medida != "abaixo") {
    console.log("Sem pontos disponíveis");
    avisoAtributo.innerHTML =
      "Não tem pontos o suficiente, as habilidades não foram alteradas";
    return;
  }
  avisoAtributo.innerHTML = "";
  arrayAtributoPercepcao = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  var medida = sel_nivel_atributoPercepcao.value;
  console.log(medida);
  if (medida == "abaixo") {
    arrayAtributoPercepcao = [
      0, 0, -3, -3, -3, -3, 0, 0, 0, 0, 0, 0, -3, 0, 0, -3, 0, 0,
    ];
    atributosPersonagem.percepcao = -1;
    pontosAtributosDisponiveis++;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "mediano") {
    return;
  } else if (medida == "acima") {
    arrayAtributoPercepcao = [
      0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0,
    ];
    atributosPersonagem.percepcao = 1;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 1;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "alto") {
    arrayAtributoPercepcao = [
      0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0,
    ];
    atributosPersonagem.percepcao = 2;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 2;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "muitoAlto") {
    arrayAtributoPercepcao = [
      0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 0,
    ];
    atributosPersonagem.percepcao = 3;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 3;
    console.log(pontosAtributosDisponiveis);
  } else {
    console.log("Valor passado inválido");
    return;
  }
  atualizarPontosDisponiveis();
}

let arrayAtributoCharme = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

function atributoCharme() {
  var medida = sel_nivel_atributoCharme.value;
  if (pontosAtributosDisponiveis <= 0 && medida != "abaixo") {
    console.log("Sem pontos disponíveis");
    avisoAtributo.innerHTML =
      "Não tem pontos o suficiente, as habilidades não foram alteradas";
    return;
  }
  avisoAtributo.innerHTML = "";
  arrayAtributoCharme = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var medida = sel_nivel_atributoCharme.value;
  console.log(medida);
  if (medida == "abaixo") {
    arrayAtributoCharme = [
      0, 0, 0, 0, 0, 0, 0, -3, -3, -3, 0, -3, 0, 0, -3, 0, -3, 0,
    ];
    atributosPersonagem.charme = -1;
    pontosAtributosDisponiveis++;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "mediano") {
    return;
  } else if (medida == "acima") {
    arrayAtributoCharme = [
      0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 3, 0, 0, 3, 0, 3, 0,
    ];
    atributosPersonagem.charme = 1;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 1;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "alto") {
    arrayAtributoCharme = [
      0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 4, 0, 0, 4, 0, 4, 0,
    ];
    atributosPersonagem.charme = 2;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 2;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "muitoAlto") {
    arrayAtributoCharme = [
      0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 5, 0, 0, 5, 0, 5, 0,
    ];
    atributosPersonagem.charme = 3;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 3;
    console.log(pontosAtributosDisponiveis);
  } else {
    console.log("Valor passado inválido");
    return;
  }
  atualizarPontosDisponiveis();
}

let arrayAtributoTemperamento = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

function atributoTemperamento() {
  var medida = sel_nivel_atributoTemperamento.value;
  if (pontosAtributosDisponiveis <= 0 && medida != "abaixo") {
    console.log("Sem pontos disponíveis");
    avisoAtributo.innerHTML =
      "Não tem pontos o suficiente, as habilidades não foram alteradas";
    return;
  }
  avisoAtributo.innerHTML = "";
  arrayAtributoTemperamento = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  var medida = sel_nivel_atributoTemperamento.value;
  console.log(medida);
  if (medida == "abaixo") {
    arrayAtributoTemperamento = [
      0, -3, 0, 0, 0, 0, 0, 0, -3, 0, -3, 0, 0, -3, 0, -3, 0, -3,
    ];
    atributosPersonagem.temperamento = -1;
    pontosAtributosDisponiveis++;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "mediano") {
    return;
  } else if (medida == "acima") {
    arrayAtributoTemperamento = [
      0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 3, 0, 3, 0, 3,
    ];
    atributosPersonagem.temperamento = 1;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 1;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "alto") {
    arrayAtributoTemperamento = [
      0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 4, 0, 4, 0, 4,
    ];
    atributosPersonagem.temperamento = 2;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 2;
    console.log(pontosAtributosDisponiveis);
  } else if (medida == "muitoAlto") {
    arrayAtributoTemperamento = [
      0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5, 0, 5, 0, 5,
    ];
    atributosPersonagem.temperamento = 3;
    pontosAtributosDisponiveis = pontosAtributosDisponiveis - 3;
    console.log(pontosAtributosDisponiveis);
  } else {
    console.log("Valor passado inválido");
    return;
  }
  atualizarPontosDisponiveis();
}

function alterarDescricao(number) {
  if (number == 1) {
    cardInfoAtributo.innerHTML = `
      <h3>Força</h3>
                  <p>
                    Afeta a arma corpo a corpo e o dano e a quantidade de peso
                    que você pode carregar
                  </p>
                  <ul>
                    <li>Armas Brancas de 1 Mão</li>
                    <li>Armas Brancas de 2 Mãos</li>
                    <li>Armas Pesadas</li>
                    <li>Bloqueio</li>
                    <li>Intimidação</li>
                    <li>Inspiração</li>
                    <li>
                      Penalidade: A drenagem da Dilatação Tática do Tempo
                      (habilidade de parar o tempo) para movimento é dobrada.
                    </li>
                  </ul>
      `;
  } else if (number == 2) {
    cardInfoAtributo.innerHTML = `
      <h3>Destreza</h3>
                  <p>
                    Afeta a velocidade de ataque corpo a corpo e a velocidade de recarga de armas de longo alcance.
                  </p>
                  <ul>
                    <li>Armas Brancas de 1 Mão</li>
                    <li>Pistolas</li>
                    <li>Evasão</li>
                    <li>Bloqueio</li>
                    <li>Esgueira</li>
                    <li>Gazua</li>
                    <li>
                      Penalidade: A perda de durabilidade da arma é aumentada.
                    </li>
                  </ul>
      `;
  } else if (number == 3) {
    cardInfoAtributo.innerHTML = `
      <h3>Inteligência</h3>
                  <p>
                    Afeta o dano bônus de acerto crítico.
                  </p>
                  <ul>
                    <li>Armas Longas</li>
                    <li>Persuasão</li>
                    <li>Hack</li>
                    <li>Medicina</li>
                    <li>Ciência</li>
                    <li>Determinação</li>
                    <li>
                      Penalidade: O dano de acerto crítico foi drasticamente reduzido. Palavras são difíceis. Pensar não presta. Opções de diálogo idiotas desbloqueadas.
                    </li>
                  </ul>
      `;
  } else if (number == 4) {
    cardInfoAtributo.innerHTML = `
      <h3>Percepção</h3>
                  <p>
                    Afeta bônus de dano de tiro na cabeça e ponto fraco
                  </p>
                  <ul>
                    <li>Pistolas</li>
                    <li>Armas Longas</li>
                    <li>Armas Pesadas</li>
                    <li>Evasão</li>
                    <li>Gazua</li>
                    <li>Engenharia</li>
                    <li>
                      Penalidade: Acertos de tiro na cabeça e em pontos fracos não causam dano extra.
                    </li>
                  </ul>
      `;
  } else if (number == 5) {
    cardInfoAtributo.innerHTML = `
      <h3>Charme</h3>
                  <p>
                    Afeta a reputação da facção e o tempo de recarga das habilidades dos companheiros.
                  </p>
                  <ul>
                    <li>Persuasão</li>
                    <li>Mentira</li>
                    <li>Intimidação</li>
                    <li>Hack</li>
                    <li>Ciência</li>
                    <li>Inspiração</li>
                    <li>
                      Penalidade: Os ganhos de reputação são reduzidos significativamente.
                    </li>
                  </ul>
      `;
  } else if (number == 6) {
    cardInfoAtributo.innerHTML = `
      <h3>Temperamento</h3>
                  <p>
                    Melhora a regeneração natural da sua saúde.
                  </p>
                  <ul>
                    <li>Armas Brancas de 2 Mãos</li>
                    <li>Mentira</li>
                    <li>Esgueira</li>
                    <li>Medicina</li>
                    <li>Engenharia</li>
                    <li>Determinação</li>
                    <li>
                      Penalidade: Sem regeneração passiva de saúde
                    </li>
                  </ul>
      `;
  }
}

/* No final, juntar tudo no botao de confirmar e atualizar o objeto habilidadePersonagem*/

function juntarAtributoHabilidade() {
  if (pontosAtributosDisponiveis < 0) {
    avisoAtributo.innerHTML = "Pontuação abaixo de 0, refaça as habilidades";
    return;
  } else {
    habilidadePersonagem.habilidade1Mao +=
      arrayAtributoForca[0] +
      arrayAtributoDestreza[0] +
      arrayAtributoInteligencia[0] +
      arrayAtributoPercepcao[0] +
      arrayAtributoCharme[0] +
      arrayAtributoTemperamento[0];
    habilidadePersonagem.habilidade2Mao +=
      arrayAtributoForca[1] +
      arrayAtributoDestreza[1] +
      arrayAtributoInteligencia[1] +
      arrayAtributoPercepcao[1] +
      arrayAtributoCharme[1] +
      arrayAtributoTemperamento[1];
    habilidadePersonagem.habilidadePistolas +=
      arrayAtributoForca[2] +
      arrayAtributoDestreza[2] +
      arrayAtributoInteligencia[2] +
      arrayAtributoPercepcao[2] +
      arrayAtributoCharme[2] +
      arrayAtributoTemperamento[2];
    habilidadePersonagem.habilidadeArmasLongas +=
      arrayAtributoForca[3] +
      arrayAtributoDestreza[3] +
      arrayAtributoInteligencia[3] +
      arrayAtributoPercepcao[3] +
      arrayAtributoCharme[3] +
      arrayAtributoTemperamento[3];
    habilidadePersonagem.habilidadeArmasPesadas +=
      arrayAtributoForca[4] +
      arrayAtributoDestreza[4] +
      arrayAtributoInteligencia[4] +
      arrayAtributoPercepcao[4] +
      arrayAtributoCharme[4] +
      arrayAtributoTemperamento[4];
    habilidadePersonagem.habilidadeEvasao +=
      arrayAtributoForca[5] +
      arrayAtributoDestreza[5] +
      arrayAtributoInteligencia[5] +
      arrayAtributoPercepcao[5] +
      arrayAtributoCharme[5] +
      arrayAtributoTemperamento[5];
    habilidadePersonagem.habilidadeBloqueio +=
      arrayAtributoForca[6] +
      arrayAtributoDestreza[6] +
      arrayAtributoInteligencia[6] +
      arrayAtributoPercepcao[6] +
      arrayAtributoCharme[6] +
      arrayAtributoTemperamento[6];
    habilidadePersonagem.habilidadePersuasao +=
      arrayAtributoForca[7] +
      arrayAtributoDestreza[7] +
      arrayAtributoInteligencia[7] +
      arrayAtributoPercepcao[7] +
      arrayAtributoCharme[7] +
      arrayAtributoTemperamento[7];
    habilidadePersonagem.habilidadeMentira +=
      arrayAtributoForca[8] +
      arrayAtributoDestreza[8] +
      arrayAtributoInteligencia[8] +
      arrayAtributoPercepcao[8] +
      arrayAtributoCharme[8] +
      arrayAtributoTemperamento[8];
    habilidadePersonagem.habilidadeIntimidacao +=
      arrayAtributoForca[9] +
      arrayAtributoDestreza[9] +
      arrayAtributoInteligencia[9] +
      arrayAtributoPercepcao[9] +
      arrayAtributoCharme[9] +
      arrayAtributoTemperamento[9];
    habilidadePersonagem.habilidadeEsgueira +=
      arrayAtributoForca[10] +
      arrayAtributoDestreza[10] +
      arrayAtributoInteligencia[10] +
      arrayAtributoPercepcao[10] +
      arrayAtributoCharme[10] +
      arrayAtributoTemperamento[10];
    habilidadePersonagem.habilidadeHacking +=
      arrayAtributoForca[11] +
      arrayAtributoDestreza[11] +
      arrayAtributoInteligencia[11] +
      arrayAtributoPercepcao[11] +
      arrayAtributoCharme[11] +
      arrayAtributoTemperamento[11];
    habilidadePersonagem.habilidadeGazua +=
      arrayAtributoForca[12] +
      arrayAtributoDestreza[12] +
      arrayAtributoInteligencia[12] +
      arrayAtributoPercepcao[12] +
      arrayAtributoCharme[12] +
      arrayAtributoTemperamento[12];
    habilidadePersonagem.habilidadeMedicina +=
      arrayAtributoForca[13] +
      arrayAtributoDestreza[13] +
      arrayAtributoInteligencia[13] +
      arrayAtributoPercepcao[13] +
      arrayAtributoCharme[13] +
      arrayAtributoTemperamento[13];
    habilidadePersonagem.habilidadeCiencia +=
      arrayAtributoForca[14] +
      arrayAtributoDestreza[14] +
      arrayAtributoInteligencia[14] +
      arrayAtributoPercepcao[14] +
      arrayAtributoCharme[14] +
      arrayAtributoTemperamento[14];
    habilidadePersonagem.habilidadeEngenharia +=
      arrayAtributoForca[15] +
      arrayAtributoDestreza[15] +
      arrayAtributoInteligencia[15] +
      arrayAtributoPercepcao[15] +
      arrayAtributoCharme[15] +
      arrayAtributoTemperamento[15];
    habilidadePersonagem.habilidadeInspiracao +=
      arrayAtributoForca[16] +
      arrayAtributoDestreza[16] +
      arrayAtributoInteligencia[16] +
      arrayAtributoPercepcao[16] +
      arrayAtributoCharme[16] +
      arrayAtributoTemperamento[16];
    habilidadePersonagem.habilidadeDeterminacao +=
      arrayAtributoForca[17] +
      arrayAtributoDestreza[17] +
      arrayAtributoInteligencia[17] +
      arrayAtributoPercepcao[17] +
      arrayAtributoCharme[17] +
      arrayAtributoTemperamento[17];

    console.log(habilidadePersonagem);
    console.log(atributosPersonagem);
    avisoAtributo.innerHTML =
      "Atributos confirmados! Por favor, vá para a próxima sessão abaixo para continuar a criação.";
    const botao = document.getElementById("botaoConfirmarAtributos");
    botao.style.display = "none";
    botao.disabled = true;
  }
}
