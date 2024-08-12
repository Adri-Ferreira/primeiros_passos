/* Faz um algiritmo que dado das 3 notas tirdas por um aluno num semetre da faculdade. Calcule a e impreme a média e a sua classificação conforme a tabela de baixo.

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Media menor que 5, Reprovou;
- Média entre 5 e 7, Bom;
- Média acima de 7, Muito Bom;
*/

//Definir a variável para as Notas
const nota1 = 1;
const nota2 = 7;
const nota3 = 9;

//Calculo da média
const media = (nota1 + nota2 + nota3) / 3;

//Determinar a classificação com base na média
let classificação  // a variável que armazena o resultado da classificação

if (media < 5){
    classificação = 'Reprovou';
} else if (media >= 5 && media <= 7){
    classificação = 'Bom'
}else {
    classificação = 'Muito Bom';
}

//Exibir a média com duas casas decimais e a classificação
console.log('Média: ' + media.toFixed(2) + ', Classificação: ' + classificação);