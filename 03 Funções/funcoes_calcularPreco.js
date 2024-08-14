/*
Elabora um algoritmo que calcula o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetua o cálculo adequado.

Código Condição de Pagamento:
Pagamento Débito, recebe 10% de desconto;
Pgamento em Dinheiro, recebe 15% de desconto;
Pagamento em duas vezes, preço normal sem juros;
Mais do que duas vezes, preço normal mais juros de 10%;

*/

function aplicarDesconto(valor, desconto){
    return
}

//Definir as variáveis
const precoProduto = 100;
const formaDePagamento = 4;

//Variável para armazenar o preço final
let precoFinal;

//Calcular o preço final com base na condição de pagamento
if (formaDePagamento === 1) {
    //Pagamento Débito: 10% de desconto
    precoFinal = precoProduto - (precoProduto * 0.10);
    console.log("Condição de pagamento: Débito");
} else if (formaDePagamento === 2) {
    //Pagamento em Dinheiro: 15% de desconto
    precoFinal = precoProduto - (precoProduto * 0.15);
    console.log("Condição de pagamento: Dinheiro");
} else if (formaDePagamento === 3) {
    //Pagamento duas vezes sem juros
    precoFinal = precoProduto;
    console.log("Condição de pagamento: 2 vezes");
} else if (formaDePagamento === 4) {
    //Pagamento mais duas vezes acresenta 10% de juros
    precoFinal = precoProduto * 1.10;
    console.log("Condição de pagamento: com 10% de juros")
} else {
    console.log("Código de condição de pagamento inválido");
}
//Apresentar o preço final
console.log(`O valor a ser pago é: € ${precoFinal.toFixed(2)}`);