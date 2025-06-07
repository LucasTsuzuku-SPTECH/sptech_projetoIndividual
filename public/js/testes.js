function validarEscolhaTeste1(idRadioSelecionado) {
  const radios = document.getElementsByName("radTeste1");
  const radioClicado = document.getElementById(idRadioSelecionado);
  if (radios[0].checked && habilidadePersonagem.habilidadePersuasao < 35) {
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
