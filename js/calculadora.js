const log = console.log;
const resultado = document.querySelector(".result");
const botoes = document.querySelectorAll("input[type=button]");

function SetaUmValor(valor) {
  if (resultado.value != "0") {
    resultado.value += valor;
  } else {
    resultado.value = valor;
  }
}

function PontoFlutuante(valor) {
  resultado.value += valor;
}

function Limpar() {
  resultado.value = "0";
}

function Operacoes(valor) {
  resultado.value += " " + valor + " ";
}

function Resultado(valor) {
  const soma = "+";
  const subtracao = "-";
  const mult = "*";
  const divisao = "/";

  const valores = valor.split(" ");

  if (valores.length > 3) {
    alert(
      "Desculpe! Apenas é possível fazer cálculos simples. Exemplo: n1 * n2"
    );
    resultado.value = 0;
  } else {
    const valor1 = valores[0];
    const operdor = valores[1];
    const valor2 = valores[2];

    if (isNaN(valor1) || isNaN(valor2)) {
      alert("Por favor, insira números válidos.");
      return (resultado.value = 0);
    }

    switch (operdor) {
      case soma:
        resultado.value = (+valor1 + +valor2).toFixed(2);

        break;

      case subtracao:
        resultado.value = (+valor1 - +valor2).toFixed(2);
        break;

      case mult:
        resultado.value = (+valor1 * +valor2).toFixed(2);
        break;

      case divisao:
        if (+valor2 == 0) {
          alert("Não é possível dividir por zero!");
          resultado.value = "0";
          break;
        } else {
          resultado.value = (+valor1 / +valor2).toFixed(2);
          break;
        }

      default:
        alert("Ação inválida!");
        resultado.value = "0";
        break;
    }
  }
}
