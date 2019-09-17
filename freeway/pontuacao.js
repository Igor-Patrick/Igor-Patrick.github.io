//Variáveis pontuação
let pontosVaca = 0;
let pontosPorco = 0;

function pontuacaoVaca(){
  textSize(30);
  fill('green');
  textAlign(CENTER);
  text(pontosVaca, 200, 29);
  if(yVaca < 2){
    pontosVaca +=1;
    yVaca = 367;
    somPontos.play();
  } 
}

function pontuacaoPorco(){
  textSize(30);
  fill('purple');
  textAlign(CENTER);
  text(pontosPorco, 300, 29);
  if(yPorco < 2){
    pontosPorco +=1;
    yPorco = 367;
    somPontos.play();
  }
}