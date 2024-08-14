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

function calcularIMC(peso, altura){
   return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    // Condição dio IMC
    if (imc < 18.5) {
        return"Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 25) {
        return"Peso Normal"
    } else if (imc >= 25 && imc < 30) {
        return"Acima do peso"
    } else if (imc >= 30 && imc < 40) {
        return"Obeso"
    } else if (imc >= 40) {
        return"Obesidade Grave"
    }
}

function main(){  // A função main é o ponto de entrada do pregrama
    //Definir a variável peso e altura
    const peso = 68;
    const altura = 1.64

    //Formula do IMC
    const imc = calcularIMC(peso, altura);
    console.log(`O teu IMC é: ${imc.toFixed(2)} `);
    console.log(classificarImc(imc));
}

//Invocar main
main();


