export class Funcionario{

    constructor(nome, idade, profissao, salario){

        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this._salario = salario;
        this.quantidadeFuncionario = 0;

    }

    //Metodo que conta os funcionários
    funcionarios(){

        this.quantidadeFuncionario++;
        return this.quantidadeFuncionario;

    }

    // Retorna todas as informações sobre o funcionário
    obterInformacoes(){

        return `Nome: ${this.nome}, Cargo: ${this.profissao}, Salário: R$${this.salario.toFixed(2)}`;

    }
    
    // Getter para o salário
    get salario(){

        return this._salario;

    }
    
    // Setter para o salário
    set salario(novoSalario = 0){
        //O salário tem que ser um número positivo
        if (novoSalario >= 0) {

            this._salario = novoSalario;

        } else {

            console.log('O salário não pode ser negativo.');

        }
    }

    // Aplica aumento percentual ao salário
    aplicarAumento(percentual = 0){
        //O percentual tem que ser maior que zero
        if (percentual > 0) {

            let aumento = this.salario * (percentual / 100);
            this.salario += aumento; // Atualiza o salário
            return this.salario; // Retorna o novo salário

        } else {

            console.log('O percentual de aumento deve ser positivo.');
            return this.salario;

        }
    }
    
    // Promove o funcionário
    promover(novoCargo = ''){

        this.profissao = novoCargo;

    }
    
    // Despede o funcionário
    despedir(){

        this.profissao = 'Desempregado';
        this.salario = 0; // Define o salário como 0

    }
}
