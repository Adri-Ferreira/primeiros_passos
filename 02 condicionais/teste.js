/*
let nome = "James Bond";
let idade = 31;

console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`);
--------------------------
const a = 5;
const b = 3;

const soma=(a +b);
const substraction = (a - b);
const multi = (a * b);
const division = (a / b);
console.log(soma);
console.log(substraction);
console.log(multi);
console.log(division);

*/

//Selcionar os número de usuário

let num1 = 10;
let num2 = 3;

//converter as entradas para os números
num1 = Number(num1);
num2 = Number(num2);


//Verificar se as entradas são números válidos
if(isNaN(num1) || isNaN(num2)){
    console.log('Inserir números válidos: ')
}else{
    console.log(`A soma é: ${num1 + num2}`);
    console.log(`A subtração é: ${num1 - num2}`);
    console.log(`A multiplicação é: ${num1 * num2}`);
    console.log(`A divisão é: ${num1 / num2}`);
}
