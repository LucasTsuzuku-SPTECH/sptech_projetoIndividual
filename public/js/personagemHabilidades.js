function adicionar10PontosArmasBrancas() {
  const checkbox = document.getElementById("cheArmasBrancas");
  if (pontosHabilidadesDisponiveis <= 0 && checkbox.checked == true) {
    alert("Você não tem pontos disponíveis para adicionar nas habilidades.");
    checkbox.checked = false;
    return;
  }
  if (checkbox.checked) {
    pontosHabilidadesDisponiveis -= 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidade1Mao =
      Number(habilidadePersonagem.habilidade1Mao) + 10;
    habilidadePersonagem.habilidade2Mao =
      Number(habilidadePersonagem.habilidade2Mao) + 10;
    atualizarValoresHabilidadesCards();
  } else {
    pontosHabilidadesDisponiveis += 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidade1Mao =
      Number(habilidadePersonagem.habilidade1Mao) - 10;
    habilidadePersonagem.habilidade2Mao =
      Number(habilidadePersonagem.habilidade2Mao) - 10;
    atualizarValoresHabilidadesCards();
  }
}

function adicionar10PontosLongoAlcance() {
  const checkbox = document.getElementById("cheLongoAlcance");
  if (pontosHabilidadesDisponiveis <= 0 && checkbox.checked == true) {
    alert("Você não tem pontos disponíveis para adicionar nas habilidades.");
    checkbox.checked = false;
    return;
  }
  if (checkbox.checked) {
    pontosHabilidadesDisponiveis -= 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadePistolas =
      Number(habilidadePersonagem.habilidadePistolas) + 10;
    habilidadePersonagem.habilidadeArmasLongas =
      Number(habilidadePersonagem.habilidadeArmasLongas) + 10;
    habilidadePersonagem.habilidadeArmasPesadas =
      Number(habilidadePersonagem.habilidadeArmasPesadas) + 10;
    atualizarValoresHabilidadesCards();
  } else {
    pontosHabilidadesDisponiveis += 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadePistolas =
      Number(habilidadePersonagem.habilidadePistolas) - 10;
    habilidadePersonagem.habilidadeArmasLongas =
      Number(habilidadePersonagem.habilidadeArmasLongas) - 10;
    habilidadePersonagem.habilidadeArmasPesadas =
      Number(habilidadePersonagem.habilidadeArmasPesadas) - 10;
    atualizarValoresHabilidadesCards();
  }
}

function adicionar10PontosDefesa() {
  const checkbox = document.getElementById("cheDefesa");
  if (pontosHabilidadesDisponiveis <= 0 && checkbox.checked == true) {
    alert("Você não tem pontos disponíveis para adicionar nas habilidades.");
    checkbox.checked = false;
    return;
  }
  if (checkbox.checked) {
    pontosHabilidadesDisponiveis -= 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadeEvasao =
      Number(habilidadePersonagem.habilidadeEvasao) + 10;
    habilidadePersonagem.habilidadeBloqueio =
      Number(habilidadePersonagem.habilidadeBloqueio) + 10;

    atualizarValoresHabilidadesCards();
  } else {
    pontosHabilidadesDisponiveis += 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadeEvasao =
      Number(habilidadePersonagem.habilidadeEvasao) - 10;
    habilidadePersonagem.habilidadeBloqueio =
      Number(habilidadePersonagem.habilidadeBloqueio) - 10;
    atualizarValoresHabilidadesCards();
  }
}

function adicionar10PontosDialogo() {
  const checkbox = document.getElementById("cheDialogo");
  if (pontosHabilidadesDisponiveis <= 0 && checkbox.checked == true) {
    alert("Você não tem pontos disponíveis para adicionar nas habilidades.");
    checkbox.checked = false;
    return;
  }
  if (checkbox.checked) {
    pontosHabilidadesDisponiveis -= 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadePersuasao =
      Number(habilidadePersonagem.habilidadePersuasao) + 10;
    habilidadePersonagem.habilidadeMentira =
      Number(habilidadePersonagem.habilidadeMentira) + 10;
    habilidadePersonagem.habilidadeIntimidacao =
      Number(habilidadePersonagem.habilidadeIntimidacao) + 10;

    atualizarValoresHabilidadesCards();
  } else {
    pontosHabilidadesDisponiveis += 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadePersuasao =
      Number(habilidadePersonagem.habilidadePersuasao) - 10;
    habilidadePersonagem.habilidadeMentira =
      Number(habilidadePersonagem.habilidadeMentira) - 10;
    habilidadePersonagem.habilidadeIntimidacao =
      Number(habilidadePersonagem.habilidadeIntimidacao) - 10;
    atualizarValoresHabilidadesCards();
  }
}

function adicionar10PontosFurtividade() {
  const checkbox = document.getElementById("cheFurtividade");
  if (pontosHabilidadesDisponiveis <= 0 && checkbox.checked == true) {
    alert("Você não tem pontos disponíveis para adicionar nas habilidades.");
    checkbox.checked = false;
    return;
  }
  if (checkbox.checked) {
    pontosHabilidadesDisponiveis -= 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadeEsgueira =
      Number(habilidadePersonagem.habilidadeEsgueira) + 10;
    habilidadePersonagem.habilidadeHacking =
      Number(habilidadePersonagem.habilidadeHacking) + 10;
    habilidadePersonagem.habilidadeGazua =
      Number(habilidadePersonagem.habilidadeGazua) + 10;

    atualizarValoresHabilidadesCards();
  } else {
    pontosHabilidadesDisponiveis += 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadeEsgueira =
      Number(habilidadePersonagem.habilidadeEsgueira) - 10;
    habilidadePersonagem.habilidadeHacking =
      Number(habilidadePersonagem.habilidadeHacking) - 10;
    habilidadePersonagem.habilidadeGazua =
      Number(habilidadePersonagem.habilidadeGazua) - 10;
    atualizarValoresHabilidadesCards();
  }
}

function adicionar10PontosTecnologia() {
  const checkbox = document.getElementById("cheTecnologia");
  if (pontosHabilidadesDisponiveis <= 0 && checkbox.checked == true) {
    alert("Você não tem pontos disponíveis para adicionar nas habilidades.");
    checkbox.checked = false;
    return;
  }
  if (checkbox.checked) {
    pontosHabilidadesDisponiveis -= 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadeMedicina =
      Number(habilidadePersonagem.habilidadeMedicina) + 10;
    habilidadePersonagem.habilidadeCiencia =
      Number(habilidadePersonagem.habilidadeCiencia) + 10;
    habilidadePersonagem.habilidadeEngenharia =
      Number(habilidadePersonagem.habilidadeEngenharia) + 10;

    atualizarValoresHabilidadesCards();
  } else {
    pontosHabilidadesDisponiveis += 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadeMedicina =
      Number(habilidadePersonagem.habilidadeMedicina) - 10;
    habilidadePersonagem.habilidadeCiencia =
      Number(habilidadePersonagem.habilidadeCiencia) - 10;
    habilidadePersonagem.habilidadeEngenharia =
      Number(habilidadePersonagem.habilidadeEngenharia) - 10;
    atualizarValoresHabilidadesCards();
  }
}

function adicionar10PontosLideranca() {
  const checkbox = document.getElementById("cheLideranca");
  if (pontosHabilidadesDisponiveis <= 0 && checkbox.checked == true) {
    alert("Você não tem pontos disponíveis para adicionar nas habilidades.");
    checkbox.checked = false;
    return;
  }
  if (checkbox.checked) {
    pontosHabilidadesDisponiveis -= 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadeInspiracao =
      Number(habilidadePersonagem.habilidadeInspiracao) + 10;
    habilidadePersonagem.habilidadeDeterminacao =
      Number(habilidadePersonagem.habilidadeDeterminacao) + 10;

    atualizarValoresHabilidadesCards();
  } else {
    pontosHabilidadesDisponiveis += 1;
    atualizarPontosDisponiveis();
    habilidadePersonagem.habilidadeInspiracao =
      Number(habilidadePersonagem.habilidadeInspiracao) - 10;
    habilidadePersonagem.habilidadeDeterminacao =
      Number(habilidadePersonagem.habilidadeDeterminacao) - 10;
    atualizarValoresHabilidadesCards();
  }
}
