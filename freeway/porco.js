let xPorco = 285;
let yPorco = 367;
let diametroPorco = 30/2;

function mostraPorco(){
  image(imagemDoPorco, xPorco, yPorco, 30, 30);
}

function movimentaPorco(){
  if(keyIsDown(DOWN_ARROW)){
     if(yPorco > 365){
      yPorco = 366;
      }else{
      yPorco += 3;
    }
  }
  if(keyIsDown(UP_ARROW)){
    if(yPorco < 0){
      yPorco = 0;
      }else{yPorco -= 3;
    }
  }
}