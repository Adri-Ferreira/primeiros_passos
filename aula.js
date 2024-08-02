/*
let  variavel = 10;

console.log(variavel)
variavel = 20;

console.log(variavel)
*/

/*Faça um programa para calcular o valor de uma viagem.

Terá de criar 3 variaveis
1. Preço do combustível,
2. Gasto medio de combustível do carro por KM,
3. Distância em KM da viagem*/

//Definir as variáveis
const precoCombustivel = 1.50;
const KmPorLitro = 5.5;
const distanciaEmKm = 270;

//Calcular os litros de combustivel consumidos
const litrosConsumidos = distanciaEmKm / KmPorLitro;

// Calcular o valor gasto na viagem
const valorGasto = litrosConsumidos * precoCombustivel;

//Outra formato de calcular 
//const valorGasto = ((distanciaEmKm / KmPorLitro) * precoCombustivel);

//Exibir o valor gasto com 2 casas decimais
console.log(valorGasto.toFixed(2));


