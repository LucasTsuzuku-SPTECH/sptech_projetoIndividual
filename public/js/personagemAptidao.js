function alterarDescricaoAptidao(number) {
  if (number == 1) {
    cardInfoAptidao.innerHTML = `
      <h3>“Nenhuma Aptidão Discernível”</h3>
                  <p>
                    "Colono" parecia uma boa carreira, de nível iniciante, para alguém com as suas habilidades. Expandir o alcance da humanidade civilizando a fronteira cósmica já era ambicioso o suficiente sem a preocupação com o seu trabalho diário. Você tinha o resto da vida para decidir como ser útil em Bonança.
                  </p>
                  
      `;
  } else if (number == 2) {
    cardInfoAptidao.innerHTML = `
      <h3>“Técnico de Serviço de Bebidas”</h3>
                  <p>
                    A Colônia Bonança precisa de gente boa, mas se contenta com quem sabe preparar um drinque memorável. Como um coqueteleiro humano, você já criou misturas que poderiam acabar com guerras ou impulsionar viagens de caçamba. Mas você ainda está tentando equilibrar os sabores de um Old Fashioned verdadeiramente exclusivo.
                  </p>
                  
      `;
  } else if (number == 3) {
    cardInfoAptidao.innerHTML = `
      <h3>“Burocrata, Rank 0”</h3>
            <p>
              O universo funciona com base em leis, e leis exigem papelada. Bonança não é exceção. Se algo não for carimbado, arquivado, desarquivado, referenciado, redigido, certificado, indexado e numerado, então é como se não existisse. Certidões de nascimento incluídas
            </p>
            
          `;
  } else if (number == 4) {
    cardInfoAptidao.innerHTML = `
      <h3>“Caixa, Sub-Nível, Não Supervisionador”</h3>
            <p>
              Nenhuma transação é concluída sem um sorriso. Você vive pela sensação de um cartucho de bits sendo inserido corretamente, pelo resgate de pontos de fidelidade e pela promessa de um bom dia. "Volte logo, tchau!" são mais do que palavras vazias — são uma promessa e um padrão que você pretende levar para a fronteira.
            </p>
            
        `;
  } else if (number == 5) {
    cardInfoAptidao.innerHTML = `
      <h3>“Construção, Aula de Eletricista, Bobinador de Fios”</h3>
            <p>
              Ao contrário da crença popular, a gestão de cabos é uma forma de arte. Há algo sobre esconder a fiação elétrica atrás de painéis para maximizar o fluxo de ar que faz você suspirar de alívio. Os colonos não precisam se preocupar com desvios e soluções alternativas que mantêm a energia fluindo. Essa é sua responsabilidade.
            </p>
            
`;
  } else if (number == 6) {
    cardInfoAptidao.innerHTML = `
      <h3>“Especialista em Operações de Elevadores”</h3>
            <p>
              Um elevador de verdade sobe E desce. Quem pensa o contrário não está apto a usar o distintivo. Ser um Especialista significa algo de onde você vem: um compromisso com a mobilidade ascendente e descendente que não tem preço.
            </p>
            
    `;
  } else if (number == 7) {
    cardInfoAptidao.innerHTML = `
<h3>“Operário de fábrica, operador de transportador”</h3>
            <p>
              Segurança e eficiência nem sempre andam de mãos dadas, e é por isso que tantos dos seus colegas de trabalho na fábrica foram amputados. Você sobreviveu às trincheiras da linha de montagem tempo suficiente para saber quando uma prensa hidráulica só quer esmagar alguns dedos. Felizmente, você conseguiu manter todos os seus.
            </p>
            
`;
  } else if (number == 8) {
    cardInfoAptidao.innerHTML = `
<h3>“Fazendeiro, Sujeira”</h3>
            <p>
              Você entrou nesse negócio pelos tubérculos, mas ficou para arar, plantar, podar e colher. Não é trabalho honesto se você chega em casa limpo. Minhocas precisam de terra, e comida precisa de minhocas. Você só está fazendo a sua parte pelas minhocas.
            </p>
            
`;
  } else if (number == 9) {
    cardInfoAptidao.innerHTML = `
<h3>“Testador de aditivos alimentares”</h3>
            <p>
              Às vezes, o controle de qualidade significa experimentar um delicioso smoothie de javali, mas na maioria das vezes significa engolir toxinas até encontrar uma que não te desperdice. Você adora uma boa surpresa. Agora que o revestimento do seu estômago está com a consistência de uma sela amaciada, é fácil explorar seus limites culinários.
            </p>
            
`;
  } else if (number == 10) {
    cardInfoAptidao.innerHTML = `
<h3>“Técnico Médico, Nível Júnior”</h3>
            <p>
              Antes de deixar a Terra, você conquistou a confiança dos cirurgiões juniores mais respeitados da comunidade médica, que lhe confiaram a tarefa de colocar bolas de algodão em frascos de comprimidos. A experiência profissional fez você perceber que diagnosticar doenças não exige uma educação formal quando um terminal de busca e um pouco de imaginação bastam.
            </p>
            
`;
  }
}

function confirmarAptidao() {
  const radios = document.getElementsByName("radAptidao");
  console.log(radios);
  aptidaoSelecionado = null;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      aptidaoSelecionado = radios[i].value;
      avisoAptidao.innerHTML = `
        Aptidão selecionado: ${aptidaoSelecionado}
        `;
      break; // Para após encontrar o primeiro radio selecionado
    }
  }

  console.log("Valor selecionado:", aptidaoSelecionado); // Imprime o valor no console
}
