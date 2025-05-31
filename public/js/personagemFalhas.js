function alterarDescricaoFalha(number) {
  if (number == 1) {
    cardInfoFalhas.innerHTML = `
      <h3>Acrofobia</h3>
                  <p>
                    Depois de cair repetidamente de grandes alturas, você não funciona mais bem quando o chão está muito abaixo de você.
                  </p>
                  
      `;
  } else if (number == 2) {
    cardInfoFalhas.innerHTML = `
      <h3>Cinofobia</h3>
                  <p>
                    Atacado muitas vezes por canídeos, você fica nervoso sempre que um deles ataca, o que o torna menos eficaz.
                  </p>
                  
      `;
  } else if (number == 3) {
    cardInfoFalhas.innerHTML = `
      <h3>Dependência de Drogas</h3>
            <p>
              Tomar tantas drogas quanto você já fez se tornar um vício, fazendo com que você sofra abstinência se ficar muito tempo sem outra dose.
            </p>
            
          `;
  } else if (number == 4) {
    cardInfoFalhas.innerHTML = `
      <h3>Paranóico</h3>
            <p>
              Ser pego repetidamente por guardas em Áreas Restritas deixa você nervoso, ainda mais quando você está vagando por Áreas Restritas ou se esgueirando.
            </p>
            
        `;
  } else if (number == 5) {
    cardInfoFalhas.innerHTML = `
      <h3>Robofobia</h3>
            <p>
              Os robôs agora lhe dão arrepios, e quando eles atacam seu grupo, você não é tão eficaz quanto deveria.
            </p>
            
`;
  } else if (number == 6) {
    cardInfoFalhas.innerHTML = `
      <h3>Fraqueza por Dano Físico</h3>
            <p>
              Receber muito dano físico deixou você vulnerável e vulnerável a mais dano físico.
            </p>
            
    `;
  } else if (number == 7) {
    cardInfoFalhas.innerHTML = `
      <h3>Nenhuma Falha</h3>
            <p>
              Nenhuma falha selecionada
            </p>
            
    `;
  } else if (number == 8) {
    cardInfoFalhas.innerHTML = `
      <h3>Nenhuma Falha</h3>
            <p>
              Depois de gastar tantos Bits, é provável que você ofereça mais Bits ao fazer uma compra.
            </p>
            
    `;
  }
}

function confirmarFalha() {
  quantidadeTokensDisponiveis = 1;
  const radios = document.getElementsByName("radFalha");
  console.log(radios);
  falhaSelecionado = null;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      falhaSelecionado = radios[i].value;
      quantidadeTokensDisponiveis = quantidadeTokensDisponiveis + 1;

      break; // Para após encontrar o primeiro radio selecionado
    }
  }
  if (falhaSelecionado == "") {
    falhaSelecionado = null;
    quantidadeTokensDisponiveis = 1;
  }

  spanQuantidadeTokensDisponiveis.innerHTML = quantidadeTokensDisponiveis;

  console.log("Valor selecionado:", falhaSelecionado); // Imprime o valor no console
}
