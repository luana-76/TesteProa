import { Programador } from "./Programador.mjs";
import { Funcionario } from "./Funcionario.mjs";

const funcionarios = new Funcionario();

console.log(`Funcionarios: ${funcionarios.funcionarios()}`); // Verifica quantos usuarios tem

//Classe Programador
// Exemplo de uso
const programador = new Programador();

// Chama a função horaDoCafe
console.log(programador.horaDoCafe());
console.log(programador.bomFuncionario(true, 250)); // Aplica um aumento fixo
console.log(programador.obterInformacoes()); // Verifica o aumento aplicado