const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const campos = document.querySelectorAll("input");

function IMC() {
    const valorIMC = (peso.value / (altura.value * altura.value)).toFixed(1);

    let classificacao = "";

    if (valorIMC < 18.5){
        classificacao = "abaixo do peso.";
    } else if (valorIMC < 25) {
        classificacao = 'com peso ideal. Parabéns!!';
    } else if (valorIMC < 30){
        classificacao = 'levemente acima do peso';
    } else if (valorIMC < 35){
        classificacao = 'com obesidade grau I';
    } else if (valorIMC < 40){
        classificacao = 'com obesidade grau II';
    } else {
        classificacao = 'com obesidade grau III. Cuidado!!';
    }

    resultado.textContent = `${nome.value}, seu IMC é ${valorIMC} e você está ${classificacao}!`;
};

function validacao() {
    campos.forEach((input)=>{
        if (input.value) {
            IMC();
        } else {
            resultado.textContent = "Preencha todos os campos!";
        }
    })
};

calcular.addEventListener("click", validacao);
