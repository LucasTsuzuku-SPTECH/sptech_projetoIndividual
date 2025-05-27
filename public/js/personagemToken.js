function adicionarTokens(idCheckbox) {
  console.log(arrayTokensSelecionados);
  const checkbox = document.getElementsByName("cheToken");
  const checkboxClicado = document.getElementById(idCheckbox);
  if (quantidadeTokensDisponiveis <= 0 && checkboxClicado.checked == true) {
    alert("Você não tem pontos disponíveis para adicionar tokens");
    checkboxClicado.checked = false;
    return;
  }
  console.log(checkbox);
  for (var i = 0; i < checkbox.length; i++) {
    if (
      checkbox[i].checked == true &&
      !arrayTokensSelecionados.includes(checkbox[i].value)
    ) {
      quantidadeTokensDisponiveis = quantidadeTokensDisponiveis - 1;
      console.log(quantidadeTokensDisponiveis);
      arrayTokensSelecionados.push(checkbox[i].value);
      console.log(arrayTokensSelecionados);
    } else if (checkbox[i].checked == false) {
      console.log(quantidadeTokensDisponiveis);
    }
    atualizarPontosDisponiveis();
  }
}

function resetarTokens() {
  const checkbox = document.getElementsByName("cheToken");
  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].checked = false;
  }
  quantidadeTokensDisponiveis = 1;
  arrayTokensSelecionados = [];
  atualizarPontosDisponiveis();
  console.log(arrayTokensSelecionados);
}
