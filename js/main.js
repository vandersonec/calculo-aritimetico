let primeiroNumero = parseFloat(prompt('Digite um numero'))
let operador = prompt('Digite uma operação(+ ou -)')
let segundoNumero = parseFloat(prompt('Digite um numero'))

document.write(`O resultado é: <strong>${efetuarCalculo(primeiroNumero, operador, segundoNumero)}</strong>`)

function efetuarCalculo(numero1, operador, numero2) {
    let primeiroNumero = numero1
    let operacao = operador
    let segundoNumero = numero2
    let resultado

    switch (operacao) {
        case '+':
            resultado = primeiroNumero + segundoNumero
            break;
        case '-':
            resultado = primeiroNumero - segundoNumero
            break;
    }

    return resultado
}

