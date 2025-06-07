function validarEscolhaTeste1(idRadioSelecionado) {
  const radios = document.getElementsByName("radTeste1");
  const radioClicado = document.getElementById(idRadioSelecionado);
  if (radios[0].checked && habilidadePersonagem.habilidadePersuasao < 35) {
    alert("Você não tem pontos o suficiente, escolha outra opção");
    radioClicado.checked = false;
    console.log("Escolha selecionado: ", escolhaTeste1); // Imprime o valor no console
    return;
  }
  if (radios[1].checked && habilidadePersonagem.habilidadeEsgueira < 35) {
    alert("Você não tem pontos o suficiente, escolha outra opção");
    radioClicado.checked = false;
    console.log("Escolha selecionado: ", escolhaTeste1); // Imprime o valor no console
    return;
  }
  if (
    radios[2].checked &&
    (habilidadePersonagem.habilidadeArmasLongas < 20 ||
      habilidadePersonagem.habilidadeEvasao < 20)
  ) {
    alert("Você não tem pontos o suficiente, escolha outra opção");
    radioClicado.checked = false;
    console.log("Escolha selecionado: ", escolhaTeste1); // Imprime o valor no console
    return;
  }

  console.log(radios);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      escolhaTeste1 = radios[i].value;
      break; // Para após encontrar o primeiro radio selecionado
    }
  }

  console.log("Escolha selecionado: ", escolhaTeste1); // Imprime o valor no console
}

function validarEscolhaTeste2(idRadioSelecionado) {
  const radios = document.getElementsByName("radTeste2");
  const radioClicado = document.getElementById(idRadioSelecionado);
  if (
    radios[0].checked &&
    !arrayCompanheirosSelecionados.includes("Nyoka") &&
    !arrayCompanheirosSelecionados.includes("Ellie")
  ) {
    alert("Você não tem o companheiro requisitado, escolha outra opção");
    radioClicado.checked = false;
    console.log("Escolha selecionado: ", escolhaTeste2); // Imprime o valor no console
    return;
  }
  if (
    radios[1].checked &&
    (habilidadePersonagem.habilidadeArmasPesadas < 30 ||
      habilidadePersonagem.habilidadeIntimidacao < 20)
  ) {
    alert("Você não tem pontos o suficiente, escolha outra opção");
    radioClicado.checked = false;
    console.log("Escolha selecionado: ", escolhaTeste2); // Imprime o valor no console
    return;
  }
  if (radios[2].checked && habilidadePersonagem.habilidadeMedicina < 30) {
    alert("Você não tem pontos o suficiente, escolha outra opção");
    radioClicado.checked = false;
    console.log("Escolha selecionado: ", escolhaTeste2); // Imprime o valor no console
    return;
  }

  console.log(radios);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      escolhaTeste2 = radios[i].value;
      break; // Para após encontrar o primeiro radio selecionado
    }
  }

  console.log("Escolha selecionado: ", escolhaTeste2); // Imprime o valor no console
}

function validarEscolhaTeste3(idRadioSelecionado) {
  const radios = document.getElementsByName("radTeste3");
  const radioClicado = document.getElementById(idRadioSelecionado);
  if (radios[0].checked && !arrayCompanheirosSelecionados.includes("Parvati")) {
    alert("Você não tem o companheiro requisitado, escolha outra opção");
    radioClicado.checked = false;
    console.log("Escolha selecionado: ", escolhaTeste3); // Imprime o valor no console
    return;
  }
  if (radios[1].checked && !arrayCompanheirosSelecionados.includes("Max")) {
    alert("Você não tem companheiro requisitado, escolha outra opção");
    radioClicado.checked = false;
    console.log("Escolha selecionado: ", escolhaTeste3); // Imprime o valor no console
    return;
  }
  if (
    radios[2].checked &&
    habilidadePersonagem.habilidadeEngenharia < 30 &&
    habilidadePersonagem.habilidadeHacking < 30
  ) {
    alert("Você não tem pontos o suficiente, escolha outra opção");
    radioClicado.checked = false;
    console.log("Escolha selecionado: ", escolhaTeste3); // Imprime o valor no console
    return;
  }

  console.log(radios);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      escolhaTeste3 = radios[i].value;
      break; // Para após encontrar o primeiro radio selecionado
    }
  }

  console.log("Escolha selecionado: ", escolhaTeste3); // Imprime o valor no console
}
