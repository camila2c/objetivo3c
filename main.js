const botoes document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){

botoes[i].onclick function(){

for(let j=0;j<botoes.length; j++){

botoes[j].classList.remove("ativo");

}

botoes[i].classList.add("ativo");

}

}
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = tempoFinal / 1000;
    return segundos;
}