let table = document.getElementById("placar");
let linha = document.createElement("tr");
table.appendChild(linha);

let partidas = JSON.parse(localStorage.getItem("partidas"));
for (let i in partidas) {
  let partida = partidas[i];

  let table = document.getElementById("placar");

  let row = table.insertRow();

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.innerHTML = partida.num_Partida;

  var vencedor = partida.vencedor;

  if (vencedor != undefined) {
    cell2.innerHTML = vencedor;
  } else if (vencedor == undefined) {
    cell2.innerHTML = "Empate";
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
