const calcular = document.getElementById('calcular');

function imc () {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'com Magreza.';
        }else if (valorIMC < 25) {
            classificacao = 'Normal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'com SobrePeso.';
        }else if (valorIMC > 30){
            classificacao = 'com Obesidade.';
        };
        resultado.textContent = `Seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);