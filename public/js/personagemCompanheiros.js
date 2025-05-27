function adicionarCompanheiro(idCompanheiro) {
  console.log(arrayCompanheirosSelecionados);
  const checkbox = document.getElementsByName("cheCompanheiro");
  const checkboxClicado = document.getElementById(idCompanheiro);
  if (
    quantidadeCompanheirosDisponiveis <= 0 &&
    checkboxClicado.checked == true
  ) {
    alert("Você não tem pontos disponíveis para adicionar companheiros");
    checkboxClicado.checked = false;
    return;
  }
  console.log(checkbox);
  for (var i = 0; i < checkbox.length; i++) {
    if (
      checkbox[i].checked == true &&
      !arrayCompanheirosSelecionados.includes(checkbox[i].value)
    ) {
      quantidadeCompanheirosDisponiveis = quantidadeCompanheirosDisponiveis - 1;
      console.log(quantidadeCompanheirosDisponiveis);
      arrayCompanheirosSelecionados.push(checkbox[i].value);
      console.log(arrayCompanheirosSelecionados);
    } else if (checkbox[i].checked == false) {
      console.log(quantidadeCompanheirosDisponiveis);
    }
    atualizarPontosDisponiveis();
  }
}

function resetarCompanheiros() {
  const checkbox = document.getElementsByName("cheCompanheiro");
  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].checked = false;
  }
  quantidadeCompanheirosDisponiveis = 2;
  arrayCompanheirosSelecionados = [];
  atualizarPontosDisponiveis();
  console.log(arrayCompanheirosSelecionados);
}
