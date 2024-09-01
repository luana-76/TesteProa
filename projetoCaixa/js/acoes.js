//OBS: Mandei o chatgpt organizar todos os códigos feitos aqui

// Seleciona os elementos do DOM necessários
let nome = document.querySelector('#nome'); // Campo de entrada para o nome
let button = document.querySelector('#enviarNome'); // Botão para enviar o nome
let saldoDaConta = 2000; // Inicializa o saldo da conta com 2000

// Dicionário de mensagens de erro
let erros = {
    igualMenor: 'Operação não autorizada.',
    erroSenha: 'Senha incorreta.',
    valorInvalido: 'Operação não autorizada.',
    saldoInsuficiente: 'Operação não autorizada.'
};

// Função que retorna a mensagem de erro com base no tipo de erro
function erro(tipoErro) {
    return erros[tipoErro];
}

// Adiciona um evento de clique no botão para exibir uma mensagem de boas-vindas
button.addEventListener('click', e => {
    let header = document.querySelector('#form1'); // Seletor do formulário
    if (!nome.validity.valueMissing) { // Verifica se o campo nome não está vazio
        header.innerHTML = `<h2>Olá ${nome.value}, é um prazer ter você por aqui!</h2>`; // Exibe a mensagem de boas-vindas
    }
});

// Seleciona os botões para as diferentes operações
let buttonSaldo = document.querySelector('#saldo'); // Botão para verificar saldo
let buttonSacar = document.querySelector('#sacar'); // Botão para sacar dinheiro
let buttonDepositar = document.querySelector('#depositar'); // Botão para depositar dinheiro
let buttonExtrato = document.querySelector('#extrato'); // Botão para extrato
let buttonTransferencia = document.querySelector('#transferencia'); // Botão para transferência
let buttonSair = document.querySelector('#sair'); // Botão para sair
let retorno = document.querySelector('#retorno'); // Elemento onde as mensagens serão exibidas

// Função para atualizar o saldo da conta e exibir a nova quantia
function atualizarSaldo(valor) {
    saldoDaConta += valor; // Atualiza o saldo
    retorno.innerHTML = `Realizado com sucesso!</br>Saldo da conta: R$${saldoDaConta}`; // Exibe o saldo atualizado
}

// Função para iniciar um campo de input para a ação solicitada
function iniciarInput(label, inputId, callback) {
    retorno.innerHTML = `
        <label for='${inputId}'>${label}</label> <!-- Cria o label para o input -->
        <input type='text' id='${inputId}' name='${inputId}' oninput='validarNumero(this)'/> <!-- Cria o campo de input -->
    `;

    // Adiciona um evento de tecla "Enter" ao campo de input
    document.querySelector(`#${inputId}`).addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            callback(this.value); // Executa a função callback com o valor do input
        }
    });
}

// Função para remover caracteres não numéricos do campo de input
function validarNumero(input) {
    input.value = input.value.replace(/[^0-9]/g, ''); // Substitui caracteres não numéricos por uma string vazia
}

// Função para pedir a senha e executar a função de callback se a senha estiver correta
function pedirSenha(callback) {
    retorno.innerHTML = `
        <label for='senha'>Digite sua senha:</label>
        <input type='password' id='senha' name='senha'/>
    `;

    let campoSenha = document.querySelector('#senha'); // Seletor do campo de senha
    // Adiciona um evento de tecla "Enter" ao campo de senha
    campoSenha.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            let senha = parseInt(this.value, 10); // Converte o valor da senha para um número
            callback(senha); // Executa a função callback com a senha digitada
        }
    });
}

// Função principal para iniciar as diferentes operações com base na escolha
function inicio(escolha) {
    switch (escolha) {
        case 'saldo':
            pedirSenha(function(senha) {
                if (senha === 3589) { // Verifica se a senha está correta
                    retorno.innerHTML = `Saldo: R$${saldoDaConta}`; // Exibe o saldo
                } else {
                    pedirSenha(arguments.callee); // Re-executa a função se a senha estiver errada
                }
            });
            break;
        case 'sacar':
            pedirSenha(function(senha) {
                if (senha === 3589) { // Verifica se a senha está correta
                    iniciarInput(
                        'Digite o valor a ser sacado:',
                        'valorSaque',
                        function(value) {
                            let valorSaque = parseInt(value, 10); // Converte o valor do saque para um número
                            if (isNaN(valorSaque) || valorSaque <= 0) {
                                retorno.innerHTML = erro('valorInvalido'); // Exibe mensagem de erro se o valor for inválido
                            } else if (valorSaque > saldoDaConta) {
                                retorno.innerHTML = erro('saldoInsuficiente'); // Exibe mensagem de erro se o saldo for insuficiente
                            } else {
                                atualizarSaldo(-valorSaque); // Atualiza o saldo se o saque for permitido
                            }
                        }
                    );
                } else {
                    pedirSenha(arguments.callee); // Re-executa a função se a senha estiver errada
                }
            });
            break;
        case 'depositar':
            iniciarInput(
                'Digite o valor a ser depositado:',
                'valorDeposito',
                function(value) {
                    let valorDeposito = parseInt(value, 10); // Converte o valor do depósito para um número
                    if (isNaN(valorDeposito) || valorDeposito <= 0) {
                        retorno.innerHTML = erro('valorInvalido'); // Exibe mensagem de erro se o valor for inválido
                    } else {
                        atualizarSaldo(valorDeposito); // Atualiza o saldo se o depósito for permitido
                    }
                }
            );
            break;
        case 'extrato':
            pedirSenha(function(senha) {
                if (senha === 3589) { // Verifica se a senha está correta
                    retorno.innerHTML = `
                        <ul>
                            <li>Camisa - R$35 </li>
                            <li>Sapato - R$150 </li>
                            <li>Lanche - R$50 </li>
                            <li>Depósito - R$230 </li>
                        </ul>
                    `; // Exibe o extrato
                } else {
                    pedirSenha(arguments.callee); // Re-executa a função se a senha estiver errada
                }
            });
            break;
        case 'transferencia':
            pedirSenha(function(senha) {
                if (senha === 3589) { // Verifica se a senha está correta
                    retorno.innerHTML = `
                        <div id='transferencia'>
                            <p>Digite os detalhes da transferência:</p>
                            <label for='numConta'>Número da conta:</label>
                            <input type='text' id='numConta' name='numConta' oninput='validarNumero(this)'/>
                            <label for='valorTrans'>Informe o valor da transferência:</label>
                            <input type='text' id='valorTrans' name='valorTrans' oninput='validarNumero(this)'/>
                        </div>
                    `;

                    document.querySelector('#valorTrans').addEventListener('keypress', function(event) {
                        if (event.key === 'Enter') {
                            let valorTrans = parseInt(this.value, 10); // Converte o valor da transferência para um número
                            if (isNaN(valorTrans) || valorTrans <= 0) {
                                retorno.innerHTML = erro('valorInvalido'); // Exibe mensagem de erro se o valor for inválido
                            } else if (valorTrans > saldoDaConta) {
                                retorno.innerHTML = erro('saldoInsuficiente'); // Exibe mensagem de erro se o saldo for insuficiente
                            } else {
                                atualizarSaldo(-valorTrans); // Atualiza o saldo se a transferência for permitida
                                retorno.innerHTML = `Transferência de R$${valorTrans} realizada com sucesso.`; // Exibe mensagem de sucesso
                            }
                        }
                    });
                } else {
                    pedirSenha(arguments.callee); // Re-executa a função se a senha estiver errada
                }
            });
            break;
        case 'sair':
            retorno.innerHTML = `${nome.value}, foi um prazer ter você por aqui.`; // Mensagem de despedida
            setTimeout(e=>{window.close()},2000)
            break;
    }
}

// Adiciona eventos de clique aos botões para iniciar as operações correspondentes
buttonSaldo.addEventListener('click', e => inicio('saldo'));
buttonSacar.addEventListener('click', e => inicio('sacar'));
buttonDepositar.addEventListener('click', e => inicio('depositar'));
buttonExtrato.addEventListener('click', e => inicio('extrato'));
buttonTransferencia.addEventListener('click', e => inicio('transferencia'));
buttonSair.addEventListener('click', e => inicio('sair'));

// Função para adicionar a classe 'active' ao botão clicado e remover dos outros
function style(botões) {
    botões.forEach(botão => {
        botão.addEventListener('click', () => {
            botões.forEach(b => b.classList.remove('active')); // Remove a classe 'active' de todos os botões
            botão.classList.add('active'); // Adiciona a classe 'active' apenas ao botão clicado
        });
    });
}

// Aplica a função style aos botões dentro da seção #buttons
style(document.querySelectorAll('#buttons button'));