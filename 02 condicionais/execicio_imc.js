/* o IMC - indice massa corporal é um critério da organização mundial de saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

:Formula do IMC;
IMC = peso / (altura * altura)


Elabora um algoritmo que dado o peso e a altura de um adulto mostre a sua condição de acordo com a tabela abaixo:

Condições de um adulto:
Abaixo de 18.5 - Abaixo de Peso;
Entre 18.5 e 25 - Peso Normal;
Entre 25 e 30 - Acima do peso;
Entre 30 e 40 - Obeso;
Acima de 40 - Obsesidade Grave;
*/

//Definir a variável
const peso = 70;
const altura = 1.64

//Formula do IMC
const imc = peso / (altura * altura);
console.log(`O teu IMC é: ${imc.toFixed(2) } `);

// Condição dio IMC
if(imc < 18.5){
    console.log("Abaixo do Peso");
}else if(imc >= 18.5 && imc < 25){
    console.log("Peso Normal")
}else if(imc >= 25 && imc < 30){
    console.log("Acima do peso")
} else if(imc >= 30 && imc < 40) {
    console.log("Obeso")
} else if(imc >= 40) {
    console.log("Obesidade Grave")
}


