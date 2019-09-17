//Tela
function setup() {
  createCanvas(500, 400);
  // somTrilha.loop();
}

//Desenha
function draw() {
  jogo();
}
function jogo(){
  background(imagemDaEstrada);
  movimentaCarro();
  mostraCarro();
  movimentaVaca();
  movimentaPorco();
  mostraVaca();
  mostraPorco();
  textos();
  verificaColisao();
  pontuacaoVaca();
  pontuacaoPorco();
  vitorioso();
}