//Variáveis das imagens
let imagemDaEstrada;
let imagemDaVaca;
let imagemDoPorco;
let imagemDosCarros = [];//Array de Imagens

//Variáveis do Som
let somTrilha;
let somColisao;
let somPontos;


//Carregamento
function preload(){
  
  somPontos = loadSound("sons/pontos.wav");
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDaVaca = loadImage("imagens/vaca.png");
  imagemDoPorco = loadImage("imagens/porco.png");
  imagemDosCarros[0] = loadImage("imagens/carro-1.png");
  imagemDosCarros[1] = loadImage("imagens/carro-2.png");
  imagemDosCarros[2] = loadImage("imagens/carro-3.png");
  imagemDosCarros[3] = loadImage("imagens/carro-1virado.png");
  imagemDosCarros[4] = loadImage("imagens/carro-2virado.png");
  imagemDosCarros[5] = loadImage("imagens/carro-3virado.png");
  imagemDaVida = loadImage("imagens/coracao.png");
}