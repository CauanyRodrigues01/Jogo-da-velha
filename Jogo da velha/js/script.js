function iniciarJogor() {
  localStorage.clear()
}

function iniciarPartida() {
    event.preventDefault();
    mostrarOponentes();
    mudarJogador("X");
}

function mostrarMensagem(mensagem) {
  alert(mensagem);
}

function mostrarOponentes() {
    document.getElementById("nome-pessoa1").innerHTML = document.getElementsByClassName("jogador1")[0].value + " X ";
    document.getElementById("nome-pessoa2").innerHTML = document.getElementsByClassName("jogador2")[0].value;
};

function mostrarVencedor(simb){
    var inputs_jogador1 = document.getElementsByClassName("jogador1");
    var inputs_jogador2 = document.getElementsByClassName("jogador2");

    var nome_jogador1 = inputs_jogador1[0].value;
    var simbolo_jogador1 = inputs_jogador1[1].value;
    var nome_jogador2 = inputs_jogador2[0].value;
    var simbolo_jogador2 = inputs_jogador2[1].value;

    let vencedor = verificaVencedor(simb);
    
    document.getElementById("vencedor-selecionado").innerHTML = vencedor;
}

var vencedor = null;
function escolherQuadrado(id) {
  if (vencedor !== null) {
    return;
  }
  var quadrado = document.getElementById(id);

  //verifica se o quadrado já foi selecionado, caso já tenha nada vai ser retornado no lugar do traço
  if (quadrado.innerHTML !== "-") {
    return;
  }

  quadrado.innerHTML = mudarJogador(simbolo);;
  quadrado.style.color = "#000";
  
  checarVencedor();
}

function mudarJogador(simb) {
  simbolo = simb;
  document.getElementById("jogador-selecionado").innerHTML = vezJogador(
    simbolo
  );
  if (simbolo === "X") {
    simbolo = "O";
  } else {
    simbolo = "X";
  }
  return simbolo;
}

function vezJogador(simb) {

  let vez;

  var inputs_jogador1 = document.getElementsByClassName("jogador1");
  var inputs_jogador2 = document.getElementsByClassName("jogador2");

  var nome_jogador1 = inputs_jogador1[0].value;
  var simbolo_jogador1 = inputs_jogador1[1].value;
  var nome_jogador2 = inputs_jogador2[0].value;
  var simbolo_jogador2 = inputs_jogador2[1].value;

  if (simb == simbolo_jogador1) {
    vez = nome_jogador1;
  }
  if (simb == simbolo_jogador2){
    vez = nome_jogador2;
  }
  return vez;
}

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

  if (checarSequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarJogador(quadrado1);
    mostrarVencedor(quadrado1.innerHTML);
    return;
  }
  if (checarSequencia(quadrado4, quadrado5, quadrado6)) {
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarJogador(quadrado4);
    mostrarVencedor(quadrado4.innerHTML);
    return;
  }

  if (checarSequencia(quadrado7, quadrado8, quadrado9)) {
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarJogador(quadrado7);
    mostrarVencedor(quadrado7.innerHTML);
    return;
  }

  if (checarSequencia(quadrado1, quadrado4, quadrado7)) {
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarJogador(quadrado1);
    mostrarVencedor(quadrado1.innerHTML);
    return;
  }

  if (checarSequencia(quadrado2, quadrado5, quadrado8)) {
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarJogador(quadrado2);
    mostrarVencedor(quadrado2.innerHTML);
    return;
  }

  if (checarSequencia(quadrado3, quadrado6, quadrado9)) {
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarJogador(quadrado3);
    mostrarVencedor(quadrado3.innerHTML);
    return;
  }

  if (checarSequencia(quadrado1, quadrado5, quadrado9)) {
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarJogador(quadrado1);
    mostrarVencedor(quadrado1.innerHTML);
    return;
  }

  if (checarSequencia(quadrado3, quadrado5, quadrado7)) {
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarJogador(quadrado3);
    mostrarVencedor(quadrado3.innerHTML);
    return;
  }
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = "rgb(255, 0, 85)";
  quadrado2.style.background = "rgb(255, 0, 85)";
  quadrado3.style.background = "rgb(255, 0, 85)";
}

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
}

//esse deve ser a função para verificar quem ganhou no jogo por completo
function verificaVencedor(simbolo) {
  var inputs_jogador1 = document.getElementsByClassName("jogador1");
  var inputs_jogador2 = document.getElementsByClassName("jogador2");

  var nome_jogador1 = inputs_jogador1[0].value;
  var simbolo_jogador1 = inputs_jogador1[1].value;
  var nome_jogador2 = inputs_jogador2[0].value;
  var simbolo_jogador2 = inputs_jogador2[1].value;

  let vencedor = null;
  if (simbolo_jogador1 == simbolo) {
    vencedor = nome_jogador1;
  } else if (simbolo_jogador2 == simbolo) {
    vencedor = nome_jogador2;
  } else {
    vencedor = "Empate";
  }
  return vencedor;
}

let criarTabela = () => {
  let table = document.getElementById("placar");
  let linha = document.createElement("tr");
  let coluna1 = linha.appendChild(document.createElement("th"));
  let coluna2 = linha.appendChild(document.createElement("th"));
  let coluna3 = linha.appendChild(document.createElement("th"));
  let coluna4 = linha.appendChild(document.createElement("th"));
  let coluna5 = linha.appendChild(document.createElement("th"));
  let coluna6 = linha.appendChild(document.createElement("th"));

  coluna1.innerHTML = "N° da Partida";
  coluna2.innerHTML = "Jogador 1";
  coluna3.innerHTML = "Símbolo";
  coluna4.innerHTML = "Jogador 2";
  coluna5.innerHTML = "Símbolo";
  coluna6.innerHTML = "Vencedor";
  table.appendChild(linha);
};

function mostrarPlacar() {
  event.preventDefault();

  let partidas = JSON.parse(localStorage.getItem("partidas"));
  for (let i in partidas) {
    let partida = partidas[i];

    let table = document.getElementById("placar");

   
    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = partida.num_Partida;
    cell2.innerHTML = partida.nome_jogador1;
    cell3.innerHTML = partida.simbolo_jogador1;
    cell4.innerHTML = partida.nome_jogador2;
    cell5.innerHTML = partida.simbolo_jogador2;
    cell6.innerHTML = partida.vencedor;
  }

}

function fecharPlacar() {
  let table = document.getElementById("placar");
  let qtdLinhas = table.rows.length;
  for (let i = qtdLinhas - 1; i > 0; i--) {
    table.deleteRow(i);
  }
  table.deleteRow(table);
}

var numPartidas;
let salvarJogadores = () => {

  let inputs_jogador1 = document.getElementsByClassName("jogador1");
  let inputs_jogador2 = document.getElementsByClassName("jogador2");
  let partidas = JSON.parse(localStorage.getItem("partidas"));
  if (localStorage.getItem("partidas")){
    numPartidas = partidas.length;
  } else {
    numPartidas = 0;
  }

  let partida = {
    num_Partida: numPartidas,
    nome_jogador1: inputs_jogador1[0].value,
    simbolo_jogador1: inputs_jogador1[1].value,
    nome_jogador2: inputs_jogador2[0].value,
    simbolo_jogador2: inputs_jogador2[1].value,
    vencedor: document.getElementById("vencedor-selecionado").innerHTML,
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

  //location.reload(); //tem que ter cuidado quando implementar outras funções!!!

  mostrarMensagem("Partida cadastrada com sucesso!");
};

function salvarPartida() {
  salvarJogadores();
}

function reiniciar() {

  vencedor = null;
  document.getElementById("jogador-selecionado").innerHTML = "";
  document.getElementById("vencedor-selecionado").innerHTML = "";

  for (var i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i);
    quadrado.style.backgroundColor = "#eee";
    quadrado.style.color = "#eee";
    quadrado.innerHTML = "-";
  }
  mudarJogador("X");
}

function restartGame() {
  localStorage.clear();
}