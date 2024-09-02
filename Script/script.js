document.querySelector(".calculate").addEventListener('click', calcularImc);
const message = document.querySelector(".answer");

function calcularImc() {

    let idadeInput = document.querySelector("#idade").value
    let pesoInput = document.querySelector("#peso").value
    let AlturaInput = document.querySelector("#altura").value
    let idadeNumber = Number(idadeInput)
    let pesoNumber = Number(pesoInput)
    let AlturaNumber = Number(AlturaInput)/100

    if ((isNaN(idadeNumber) || idadeInput.trim() === "") || (isNaN(pesoNumber) || pesoInput.trim() === "") || (isNaN(AlturaNumber) || AlturaInput.trim() === "")) {

        message.innerText = "Por favor insira um numero valido!";
    }

    else if ( idadeNumber < 18) {

        message.innerText = "Deve ser maior de 18!";
    }


    else {

        calcImc(pesoNumber, AlturaNumber);
    }

}

function calcImc(peso, altura) {

    let imc = peso / (altura * altura);
    let healthLevel = "";

    if (imc < 18.5) {
        healthLevel = "estas abaixo do peso. Consulte um profissional de saúde.";
    } else if (imc >= 18.5 && imc < 25) {
        healthLevel = "Peso normal, continue assim!";
    } else if (imc >= 25 && imc < 30) {
        healthLevel = "estás com sobrepeso. Considere consultar um profissional de saúde.";
    } else if (imc >= 30 && imc < 35) {
        healthLevel = "estas com obesidade grau 1. É importante agir agora.";
    } else if (imc >= 35 && imc < 40) {
        healthLevel = "estas com obesidade grau 2. Consulte um profissional de saúde urgentemente.";
    } else {
        healthLevel = "estás com obesidade grau 3. Ação imediata é necessária.";
    }

    message.innerText = `O seu IMC é ${imc.toFixed(2)}. Classificação: ${healthLevel}`;

}