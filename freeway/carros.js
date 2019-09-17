//Movimentar Carros
let xCarros = [450, 550, 700, -100, -150, -180];
let yCarros = [40, 150, 210, 265, 320, 100];
let velocidadesCarros = [1.5, 1.8, 2, -2, -1.8, -2];
let comprimentoCarros = [50, 50, 80, 50, 50, 80];
let altura = 38;

function mostraCarro(){
  for(let i=0; i<=5; i++){
  image(imagemDosCarros[i], xCarros[i], yCarros[i], comprimentoCarros[i], altura);
  }
}

function movimentaCarro(){
  for(let i=0; i<=5; i++){
  xCarros[i] -= velocidadesCarros[i];
  if(xCarros[i] < -50){
  xCarros[i] = 480;}
  } 
  for(let i=0; i<=5; i++){
  xCarros[i] -= velocidadesCarros[i];
  if(xCarros[i] > 515){
  xCarros[i] = -20;
    }
  }
}