var status = "inativo";

function salvarJogadores() {
  const nomeJogador1 = document.getElementById("nome-jogador1").value;

  const simboloJogador1 = document.getElementById("simbolo-jogador1").value;

  const nomeJogador2 = document.getElementById("nome-jogador2").value;
  const simboloJogador2 = document.getElementById("simbolo-jogador2").value;

  let jogadores = {
    nomeJogador1: nomeJogador1,
    simboloJogador1: simboloJogador1,
    nomeJogador2: nomeJogador2,
    simboloJogador2: simboloJogador2,
  };

  // se já existir jogadores cadastrados, apagar
  if (localStorage.getItem("jogadores")) {
    localStorage.clear();
  };

  localStorage.setItem("jogadores", JSON.stringify(jogadores));

  alert("Jogadores salvos com sucesso");
  
  event.preventDefault();
}

function competir() {
  if (localStorage.getItem("jogadores") != null ||  localStorage.getItem("jogadores") != undefined) {
    window.location.href = "gamer.html";
  } else {
    alert("Error: jogadores não salvos corretamente");
    event.preventDefault();
  };
}