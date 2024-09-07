import { Funcionario } from "./Funcionario.mjs";

export class Programador extends Funcionario {

    constructor() {

        super('Katrina', 25, 'Programadora', 2140);
        this.funcionarios();//Contagem de funcionãrios
        this._cafe = false;
        
    }

    bomFuncionario(resposta, aumento = 0){

        if (resposta === true || resposta === 'sim') {

            // Aplica um aumento se for um bom funcionário
            this.aplicarAumento(aumento);
            return `Por ser um bom funcionário, você receberá um aumento de R$250!`;

        } else {

            return `Melhore suas ações.`;

        }
    }

    codar(linguagem = ''){

        return `${this.nome} está codando em ${linguagem}.`;

    }

    //Retorna se é hora do café ou não
    horaDoCafe(){

        if (this._cafe) {

            return `Oba! Hora do café! \u{1F60A}`;

        } else {

            return `A hora do café ainda não foi iniciada. \u{1F622}`;

        }
    }

    //Retorna o valor da variável café
    get cafe(){

        return this._cafe;

    }

    //Altera o valor da variável café
    set cafe(decisao = '') {

        this._cafe = decisao;

    }
}
