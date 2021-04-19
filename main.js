"use strict"

const ligado = document.getElementById("ligar");
const desligado = document.getElementById("desligar");
const imagem = document.querySelector("img");
const botao = document.getElementById("botao");

function lampadaQuebrada(){
    return imagem.src.indexOf("quebrada") > -1;
}

function desligada(){
    return imagem.src.indexOf("desligada") > -1;
}

function ligarDesligar(){
    if(!lampadaQuebrada() && desligada()){
        imagem.src="./imagens/ligada.jpg";
        botao.innerText="DESLIGAR";
    }else if(!lampadaQuebrada() && !desligada()){
        imagem.src="./imagens/desligada.jpg";
        botao.innerText="LIGAR"
    }
}


function quebrarLampada(){
    imagem.src="./imagens/quebrada.jpg";
}

botao.addEventListener("click", ligarDesligar);
imagem.addEventListener("dblclick", quebrarLampada);
imagem.addEventListener("mouseover", ligarDesligar);
imagem.addEventListener("mouseleave", ligarDesligar);


