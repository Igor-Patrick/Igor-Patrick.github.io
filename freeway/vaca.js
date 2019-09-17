//Variáveis do Ator
let yVaca = 367;
let xVaca = 185;
let diametro = 30/2;

//Motrar Ator
function mostraVaca(){
  image(imagemDaVaca, xVaca, yVaca, 30, 30);
}

//Movimentar Ator
function movimentaVaca(){
  if(keyIsDown(83)){
     if(yVaca > 365){
      yVaca = 366;
      }else{
    yVaca += 3;
    }
  }
  
  if(keyIsDown(87)){
    if(yVaca < 0){
      yVaca = 0;
      }else{yVaca -= 3;
    }
  }
}