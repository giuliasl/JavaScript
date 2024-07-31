//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem

let number = prompt('Enter a number: ');

let numberVerification = (number == 0) ? "Zero" : (number > 0) ? "Positive number" : "Negative number";
alert(`${numberVerification}`);




