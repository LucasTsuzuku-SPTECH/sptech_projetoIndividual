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
      if (checkbox[i].value == "Parvati") {
        habilidadePersonagem.habilidadePersuasao += 19;
        habilidadePersonagem.habilidadeGazua += 21;
        habilidadePersonagem.habilidadeEngenharia += 22;
        console.log(habilidadePersonagem);
      } else if (checkbox[i].value == "Max") {
        habilidadePersonagem.habilidadeIntimidacao += 19;
        habilidadePersonagem.habilidadeHacking += 20;
        habilidadePersonagem.habilidadeCiencia += 22;
        console.log(habilidadePersonagem);
      } else if (checkbox[i].value == "Ellie") {
        habilidadePersonagem.habilidadeMentira += 18;
        habilidadePersonagem.habilidadeMedicina += 22;
        habilidadePersonagem.habilidadeEngenharia += 19;
        console.log(habilidadePersonagem);
      } else if (checkbox[i].value == "Nyoka") {
        habilidadePersonagem.habilidadeMentira += 18;
        habilidadePersonagem.abilidadeMedicina += 19;
        habilidadePersonagem.habilidadeFurtividade += 21;
        console.log(habilidadePersonagem);
      } else if (checkbox[i].value == "Felix") {
        habilidadePersonagem.habilidadePersuasao += 20;
        habilidadePersonagem.habilidadeGazua += 20;
        habilidadePersonagem.habilidadeFurtividade += 19;
        console.log(habilidadePersonagem);
      } else if (checkbox[i].value == "SAM") {
        habilidadePersonagem.habilidadeEngenharia += 19;
        habilidadePersonagem.habilidadeHacking += 20;
        habilidadePersonagem.habilidadeCiencia += 20;
        console.log(habilidadePersonagem);
        break;
      }
      arrayCompanheirosSelecionados.push(checkbox[i].value);
      console.log(arrayCompanheirosSelecionados);
    } else if (checkbox[i].checked == false) {
      console.log(quantidadeCompanheirosDisponiveis);
    }
  }
  atualizarPontosDisponiveis();
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
