function escreverMeuNome(nome){
    return 'O meu nome é: ' + nome;
}

//Declaração da função
function verificarIdade(idade){
    //Estrutura condicional
    if(idade >= 18){
        console.log(escreverMeuNome('Adriano') + ', e sou Maior de idade.');
    }else{
        console.log(escreverMeuNome('Adriano') + ', e sou Menor de idade.');
    }
}

verificarIdade(17);

/*

//Dlacarar a função
function modeloCarro(carro){
//Criair uma condição
    if(carro === 'BMW'){
        console.log(`O teu modelo do carro é ${carro} `);
    }else{
        console.log(`O carro não é o meu modelo`);
    }

}

//Invocar a função do modelo do carro
modeloCarro('BMW');
*/