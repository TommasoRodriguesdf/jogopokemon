const numero_moedas = 70;
const tempo_inicial = 5;
let pontos = 0;

  let tempo = 0;
let timer = null;

  let ary=[];
function iniciaJogo(){
pontos = 0;
tempo = tempo_inicial;
let tela = document.getElementById("tela");
tela.innerHTML = "";

for(let i = 0; i < numero_moedas; ++i){
 let moeda = document.createElement("img");
 moeda.src = "pokM.png";
 moeda.id = "j" + i;
 moeda.onclick = function(){
 pegaMoeda(this);
 }
 tela.appendChild(moeda);
}
timer = setInterval(contaTempo,1000);
}

for(i=0;i<numero_moedas;++i) ary.push("j"+i);
console.log(ary)

function pegaMoeda(moeda){
 moeda.src = "pok2.jpg";
 ++pontos;
let contadorPontos = document.getElementById("pontos");
contadorPontos.innerText = pontos;
}

function contaTempo(){
 if(tempo > 0){
 --tempo;
 let contadorTempo = document.getElementById("tempo");
 contadorTempo.innerText = tempo;
 
 return contaTempo = null;
 }

 if(tempo <= 0){
 clearInterval(timer);
   if(pontos >= 60) alert("Você fez " + pontos + " pontos, EXCELENTE!");
   else if(pontos >= 30) alert("Você fez " + pontos + " pontos, Parabens!");
   else alert("Você fez " + pontos + " pontos, Continue tentando");

 iniciaJogo();
 }
}