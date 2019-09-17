function vitorioso(){
  if(pontosVaca > 9){
    background(0);
    textAlign(CENTER);
    textSize(60);
    fill(255);
    text('Vaca venceu!!', 250, 200);
    frameRate(0);
  }
  if(pontosPorco > 9){
    background(0);
    textAlign(CENTER);
    textSize(60);
    fill(255);
    text('Porco venceu!!', 250, 200);
    frameRate(0);
  }
}