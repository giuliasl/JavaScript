//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let score = prompt ('Enter your score');

if (score >= 100){
    alert('Congratulations, you win!!');
}
else {
    alert('Sorry. Try Again');
}