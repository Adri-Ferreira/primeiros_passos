
/*
const camisaRenanAzul = true;
const camisaLemaoAzul = false;
*/
// Estrutura IF e ELSE
/*
const numero = 3;
const numeroPar =(numero % 2) === 0;

if (numeroPar){
    console.log("Par");
}else{
    console.log('Impar');
}
*/


//Estrutura Condicional com ELSE IF
/*
const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero === 0){
    console.log('O numero é inválido');
}else if (numeroDivisivelPor5){
    console.log('Sim');
}else{
    console.log('Não');
}
    */

/*Faça um programa para calcular o valor de uma viagem.

Terá de criar 5 variaveis
1. Preço do etanol,
2. Preço do gasolina,
3. O tipo de cobustivel do carro por KM,
4. Gasto médio de combustível do carro por KM,
5. Distância em KM da viagem.

Resultado, o valor que será gasto para realizar esta viagem.
*/

//Definir as variáveis
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Gasolina';
const KmPorLitro = 10;  //Consumo médio de combustível do carro em KM por litro
const distanciaEmKm = 100;

//Calcular os litros de combustivel que serão consumidos na viagem
const litrosConsumidos = distanciaEmKm / KmPorLitro;

//Calcular o valor gasto na viagem com base no tipo de combustível
let valorGasto;

if(tipoCombustivel === 'Etanol'){
    // Calcular o valor gasto na viagem
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log('Combustível Etanol: ' + valorGasto.toFixed(2));
}else {
    // Calcular o valor gasto na viagem
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log('Combustível gasolina: ' + valorGasto.toFixed(2));
}



