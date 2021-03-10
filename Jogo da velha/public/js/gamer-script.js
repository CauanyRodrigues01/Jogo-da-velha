var mostrarNomePessoa1 = document.getElementById("nome-pessoa1");
var mostrarNomePessoa2 = document.getElementById("nome-pessoa2");

var jogadores = JSON.parse(localStorage.getItem("jogadores"));

mostrarNomePessoa1.innerHTML = jogadores.nomeJogador1;
mostrarNomePessoa2.innerHTML = jogadores.nomeJogador2;

// variável que indica se já teve algum vencedor no jogo
var statusVencedor;
var vencedorDaPartida;

mudarJogador("X");

function escolherQuadrado(id) {
  var quadrado = document.getElementById(id);
  //verifica se o quadrado já foi selecionado, caso já tenha nada vai ser retornado no lugar do traço
  if (quadrado.innerHTML !== "-") {
    return;
  };

  // se alguem já ganhou os quadrados não devem ser mais selecionados
  if (statusVencedor) {
    return;
  }

  quadrado.innerHTML = mudarJogador(simbolo);
  quadrado.style.color = "#fff";

  checarVencedor();

  if (statusVencedor) {
    return;
  }
};

function mudarJogador(simb) {
  simbolo = simb;
  vezJogador(simbolo);

  if (simbolo === "X") {
    simbolo = "O";
  } else {
    simbolo = "X";
  };

  return simbolo;
};

function vezJogador(simb) {

  var pessoa1 = document.getElementById("vez-jogador1");
  var pessoa2 = document.getElementById("vez-jogador2");

  if (simb == jogadores.simboloJogador1) {
    pessoa1.style.opacity = 1;
    pessoa2.style.opacity = 0.5;
  };
  if (simb == jogadores.simboloJogador2) {
    pessoa1.style.opacity = 0.5;
    pessoa2.style.opacity = 1;
  };
};

function checarVencedor() {
  var quadrado1 = document.getElementById("1");
  var quadrado2 = document.getElementById("2");
  var quadrado3 = document.getElementById("3");

  var quadrado4 = document.getElementById("4");
  var quadrado5 = document.getElementById("5");
  var quadrado6 = document.getElementById("6");

  var quadrado7 = document.getElementById("7");
  var quadrado8 = document.getElementById("8");
  var quadrado9 = document.getElementById("9");

  statusVencedor = checarSequencia(quadrado1, quadrado2, quadrado3);
  if (statusVencedor) {
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarJogador(quadrado1);
    mostrarVencedor(quadrado1.innerHTML);
    return;
  };
  statusVencedor =  checarSequencia(quadrado4, quadrado5, quadrado6);
  if (statusVencedor) {
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarJogador(quadrado4);
    mostrarVencedor(quadrado4.innerHTML);
    return;
  };
  statusVencedor = checarSequencia(quadrado7, quadrado8, quadrado9);
  if (statusVencedor) {
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarJogador(quadrado7);
    mostrarVencedor(quadrado7.innerHTML);
    return;
  };
  statusVencedor = checarSequencia(quadrado1, quadrado4, quadrado7);
  if (statusVencedor) {
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarJogador(quadrado1);
    mostrarVencedor(quadrado1.innerHTML);
    return;
  };
  statusVencedor = checarSequencia(quadrado2, quadrado5, quadrado8);
  if (statusVencedor) {
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarJogador(quadrado2);
    mostrarVencedor(quadrado2.innerHTML);
    return;
  };
  statusVencedor = checarSequencia(quadrado3, quadrado6, quadrado9);
  if (statusVencedor) {
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarJogador(quadrado3);
    mostrarVencedor(quadrado3.innerHTML);
    return;
  };
  statusVencedor = checarSequencia(quadrado1, quadrado5, quadrado9);
  if (statusVencedor) {
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarJogador(quadrado1);
    mostrarVencedor(quadrado1.innerHTML);
    return;
  };
  statusVencedor = checarSequencia(quadrado3, quadrado5, quadrado7);
  if (statusVencedor) {
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarJogador(quadrado3);
    mostrarVencedor(quadrado3.innerHTML);
    return;
  };
};

//checar 3 quadrados
function checarSequencia(quadrado1, quadrado2, quadrado3) {
  var verifica = false;

  if (
    quadrado1.innerHTML !== "-" &&
    quadrado1.innerHTML === quadrado2.innerHTML &&
    quadrado2.innerHTML === quadrado3.innerHTML
  ) {
    verifica = true;
  }

  return verifica;
};

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = "rgba(230, 234, 29, .6)";
  quadrado2.style.background = "rgba(230, 234, 29, .6)";
  quadrado3.style.background = "rgba(230, 234, 29, .6)";
};

function mostrarVencedor(simb) {
  let vencedor = verificaVencedor(simb);

  document.getElementById("vez-jogador1").style.display = "none";

  document.getElementById("vez-jogador2").style.display = "none";

  document.getElementById("vencedor").innerHTML = vencedor + " venceu!";
};

function esconderVencedor() {
  document.getElementById("vez-jogador1").style.display = "block";

  document.getElementById("vez-jogador2").style.display = "block";

  document.getElementById("vencedor").innerHTML = "";
};

function verificaVencedor(simbolo) {

  var nome_jogador1 = jogadores.nomeJogador1;
  var simbolo_jogador1 = jogadores.simboloJogador1;
  var nome_jogador2 = jogadores.nomeJogador2;
  var simbolo_jogador2 = jogadores.simboloJogador2;

  let vencedor = null;
  if (simbolo_jogador1 == simbolo) {
    vencedor = nome_jogador1;
  } else if (simbolo_jogador2 == simbolo) {
    vencedor = nome_jogador2;
  } else {
    vencedor = "Empate";
  }
  vencedorDaPartida = vencedor;
  return vencedor;
};

var numPartidas;
let salvarVencedor = () => {
  let partidas = JSON.parse(localStorage.getItem("partidas"));
  if (localStorage.getItem("partidas")) {
    numPartidas = partidas.length;
  } else {
    numPartidas = 0;
  }

  let partida = {
    num_Partida: numPartidas,
    vencedor: vencedorDaPartida
  };

  if (localStorage.getItem("partidas")) {
    let partidas = JSON.parse(localStorage.getItem("partidas"));
    partidas.push(partida);
    localStorage.setItem("partidas", JSON.stringify(partidas));
  } else {
    let partidas = [];
    partidas.push(partida);
    localStorage.setItem("partidas", JSON.stringify(partidas));
  }

  alert("Partida salva com sucesso");
};

function reiniciar() {
  esconderVencedor()
  salvarVencedor();
  vencedor = null;
  statusVencedor = false;

  for (var i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i);
    quadrado.style.backgroundColor = "rgba(248, 248, 255, 0.2)";
    quadrado.style.color = "rgba(0, 0, 0, 0)";
    quadrado.innerHTML = "-";
  }
  mudarJogador("X");
};
