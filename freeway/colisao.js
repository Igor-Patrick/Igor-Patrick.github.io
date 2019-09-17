//Variável da Colisão
let colidiu = false;

//Colisão da vaca
function verificaColisao(){
  for(let i=0; i<=5; i++){
    //Recebe a resposta se colidiu "True or false!"
  colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xVaca, yVaca, diametro);
    if(colidiu){
      console.log("Colidiu");
      yVaca = 367;
      xVaca = 185;
      somColisao.play();
      if(pontosVaca > 0){
        pontosVaca -= 1;
      }
    }
  }
    for(let i=0; i<=5; i++){
    //Recebe a resposta se colidiu "True or false!"
  colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xPorco, yPorco, diametroPorco);
    if(colidiu){
      console.log("Colidiu");
      yPorco = 367;
      xPorco = 285;
      somColisao.play();
      if(pontosPorco > 0){
        pontosPorco -=1;
      }
    }
  }
}