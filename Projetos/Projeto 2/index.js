alert("------Projeto 02 – Jogo Jokenpô-------");
let rdd = +prompt('Digite quantas rodadas iremos Jogar?');
function validacao(rdd) {
    return !isNaN(parseInt(rdd)) && isFinite(rdd);
}

var n=0;
var x=0;
var y=0;
function jogo (){
var us = prompt('Digite sua escolhe pedra,papel ou tesoura?');  
var esc = ['Pedra', 'papel', 'tesoura'];
alt = esc[Math.floor(Math.random() * esc.length)];


if(us=='pedra' && alt=='tesoura'){
console.log('Pedra quebra tesoura');
x++;
}else if(us=='tesoura' && alt=='pedra'){
console.log('Tesoura perde para pedra, pois pedra quebra tesoura');
y++;
}else if(us=='pedra' && alt=='papel'){
console.log('Pedra perde para papel, pois papel cobre a pedra');
y++;
}else if(us=='papel' && alt=='pedra'){
console.log('Papel cobre a pedra');
x++;
}else if(us=='tesoura' && alt=='papel'){
console.log('Tesoura corta papel');
x++;
}else if(us=='papel' && alt=='tesoura'){
console.log('papel perde pois, tesoura corta papel');
y++;
}else{
console.log ('opção invalida');
}
}

while( rdd>n ){
n++;

jogo();

}


if(x>y){
console.log('Jogador ganhou vezes:', +x, 'em', +rdd, 'rodadas');
console.log('Jogador foi o campeão');
} else if(x==y){
  console.log('Jogador ganhou vezes:', +x, 'em', +rdd, 'rodadas');
  console.log('Computador ganhou vezes:', +y, 'em', +rdd, 'rodadas');
  console.log('Empate');
}else if(y>x){
  console.log('Computador ganhou vezes:', +y, 'em', +rdd, 'rodadas');
  console.log('O computador foi o campeão');
}

