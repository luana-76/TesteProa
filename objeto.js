let nomes = ['Katrina', 'leviatã', 'salem']

//Adicionando elemento
nomes.push('marcos')

//Tirando primeiro nome
nomes.shift()

//Tamanho do array

let tamanhoArray = nomes.length

//Tranformando os nomes em maiuculo

for(let i = 0; i<nomes.length;i++){

    nomes[i] = nomes[i].toUpperCase();

}

//Dicionarios

let carro = {

    marca: 'bmw',
    modelo: 'sss',
    ano: 2022

};

//Adicionando a propriedade cor
carro['cor'] = 'preto';

//Removendo o ano do carro
delete carro['ano'];

//Retornando a marca e o modelo do carro
console.log(`A marca é '${carro['marca']}' e o modelo '${carro['modelo']}'`);
