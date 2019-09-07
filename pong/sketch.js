//Som
let raquetada;
let ponto;

//Placar
let placarPlayerUm = 0;
let placarPlayerDois = 0;

//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;
let corBolinha = [250,0,0];
let velocidadeX = 15; 
let velocidadeY = 5;

//Variáveis das Raquetes
let alturaRaquete = 100;
let larguraRaquete = 20;

//Variáveis Minha Raquete
let xMinhaRaquete = 580;
let yMinhaRaquete = 150;
let corMinhaRaquete = [147, 18, 222];

//Variáveis Raquete Oponente
let xRaqueteOponente = 0;
let yRaqueteOponente = 150;
let corRaqueteOponente = [255];

//Som
function preload(){
  raquetada = loadSound('raquetada.mp3');
  ponto = loadSound('ponto.mp3');
}

//Configuração Inicial
function setup() {
  createCanvas(600, 400);
  largura = width;
  altura = height;
  print("Largura: "+largura+" Altura: "+altura); //Aparecer na tela
  
}
//Desenha - LOOP Infinito while (1)
function draw() {
  background(0,0,0);
  vitorioso();
  if(!(placarPlayerUm >= 10 || placarPlayerDois >=10)){
  jogo();
  }
}

function jogo(){
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  movimentaRaqueteOponente();
  pontos();
  placar();
}

function vitorioso(){
  if(placarPlayerUm >= 10){
    fill(147, 18, 222);
    rect(300,0,300,400);
    textSize(32);      
text('Player Um Vitorioso', 310, 200);
fill('white');
     }
  if(placarPlayerDois >= 10){
    fill('red');
    rect(0,0,300,400);
    textSize(32);   
text('Player Dois Vitorioso', 0, 200);
fill('white')
     }
}

function placar(){
  if(xBolinha < 12){    
     placarPlayerUm += 1;
     ponto.play();
     }
  if(xBolinha > 588){    
     placarPlayerDois += 1;
     //ponto.setVolume(1000); 
     ponto.play();
     }
}

function pontos(){
  textSize(32);
  strokeWeight(2);
  stroke('white');
  
  fill('red');
  rect(380,5,60,30,10);
  rect(120,5,60,30,10);
  
  fill('white');
text(placarPlayerUm, 400, 30);
text(placarPlayerDois, 140, 30);
text('Pontuação', 205, 30)
    
}

function verificaColisaoRaquete(){
  if(xBolinha + raio > xMinhaRaquete && 
     yBolinha - raio < yMinhaRaquete + alturaRaquete && 
     yBolinha + raio > yMinhaRaquete){
    if(!(xBolinha < 300 && velocidadeX > 0 ||
        xBolinha > 300 && velocidadeX <0)){
     velocidadeX *= -1;
     //raquetada.setVolume(5.0); 
     raquetada.play();
    }
  }
  if(xBolinha - raio < xRaqueteOponente + larguraRaquete&& 
     yBolinha + raio < yRaqueteOponente + alturaRaquete && 
     yBolinha - raio > yRaqueteOponente){
    if(!(xBolinha < 300 && velocidadeX > 0 ||
        xBolinha > 300 && velocidadeX <0)){
    velocidadeX *= -1;
    //raquetada.setVolume(0.1); 
    raquetada.play();
    }
  }  
}

function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
    if(yRaqueteOponente < 0){
    yRaqueteOponente = 0;
    }else{
    yRaqueteOponente -=10;}
  }
  if(keyIsDown(83)){
    if(yRaqueteOponente > 300){
      yRaqueteOponente = 300;
      }else{
    yRaqueteOponente += 10;
    }
  }
  
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    if(yMinhaRaquete < 0){
      yMinhaRaquete = 0
      }else{yMinhaRaquete -= 10;
    }
  }

  if(keyIsDown(DOWN_ARROW)){
     if(yMinhaRaquete > 300){
      yMinhaRaquete = 300;
      }else{
    yMinhaRaquete += 10;
    }
  }
}

function mostraRaquete(){
  fill(corMinhaRaquete);
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
  fill(corRaqueteOponente);
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}

function movimentaBolinha(){
  if(frameCount > 200){
  xBolinha += + velocidadeX; //Incremento de X, Horizontal
  yBolinha += + velocidadeY; //Incremento de Y. Vertical
  }
}

function mostraBolinha(){
  noStroke();
  fill(corBolinha);
  circle(xBolinha, yBolinha, diametro);
}

function verificaColisao(){
  //Colisão tanto Horizontal e Vertical com as bordas do raio
  if (xBolinha + raio > largura || xBolinha - raio < 0){
    //velocidadeX = velocidadeX * -1
    velocidadeX *= -1;
  }
  if (yBolinha + raio > altura || yBolinha - raio < 0){
    //velocidadeX = velocidadeX * -1
    velocidadeY *= -1;
  }
}
