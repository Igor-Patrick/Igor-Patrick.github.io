$(document).ready(function(){
    
    setInterval(function(){
    $('.levell').html('Nível' + '<br/><br/>' + level); 
    $('.scoree').html('Pontos' + '<br/><br/>' + score); 
    $('.livess').html('Vidas' + '<br/><br/>' + lives);     
    }, 1);
    
});