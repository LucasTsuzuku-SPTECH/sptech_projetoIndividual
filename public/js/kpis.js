function obterKpis() {
  if (proximaAtualizacao != undefined) {
    clearTimeout(proximaAtualizacao);
  }

  fetch(`/medidas/contagemPersonagensCriados`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          kpi_QuantidadeTotalPersonagens.innerHTML =
            resposta[0].totalPersonagens;
          kpi_QuantidadeDiasMonitorados.innerHTML = resposta[0].diasPassados;
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function obterKpiDiaSemana() {
  if (proximaAtualizacao != undefined) {
    clearTimeout(proximaAtualizacao);
  }

  fetch(`/medidas/diaSemanaKpi`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          for (var i = 0; i < resposta.length; i++) {
            var diaDaSemana = resposta[i].diaSemanaMaiorCriacao;
            if (diaDaSemana == "Sunday") {
              diaDaSemana = "Domingo";
            } else if (diaDaSemana == "Monday") {
              diaDaSemana = "Segunda-feira";
            } else if (diaDaSemana == "Tuesday") {
              diaDaSemana = "Terça-feira";
            } else if (diaDaSemana == "Wednesday") {
              diaDaSemana = "Quarta-feira";
            } else if (diaDaSemana == "Thursday") {
              diaDaSemana = "Quinta-feira";
            } else if (diaDaSemana == "Friday") {
              diaDaSemana = "Sexta-feira";
            } else if (diaDaSemana == "Saturday") {
              diaDaSemana = "Sábado";
            }
            kpi_diaSemanaKpi.innerHTML += `${diaDaSemana}<br>`;
          }
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}
