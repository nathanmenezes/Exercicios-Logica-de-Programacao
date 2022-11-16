function closelista2() {
    document.getElementById("lista1").style.display = "flex";
    document.getElementById("lista2").style.display = "flex";
    document.getElementById("lista3").style.display = "flex";
    document.querySelector(".screen-lista2").style.display = "none";
}

// Exercicio 9 - Lista 2 - Calculo Combustivel
document.querySelector("#submitcalculocombustivel ").addEventListener("click", (event) => {
    let tempo = parseInt(document.getElementById('tempo-calculocombustivel').value);
    let velocidade = parseInt(document.getElementById('velocidade-calculocombustivel').value);

    let distancia = tempo * velocidade;
    let litros_gastos = distancia / 12;


    let rescalculocombustiveldistancia = document.querySelector('.resultcalculocombustivel-distancia');
    let rescalculocombustivelvelocidade = document.querySelector('.resultcalculocombustivel-velocidade');
    let rescalculocombustiveltempo = document.querySelector('.resultcalculocombustivel-tempo');
    let rescalculocombustivellitros = document.querySelector('.resultcalculocombustivel-litros');


    rescalculocombustivelvelocidade.innerHTML = "Velocidade Média: <br>" + velocidade + " KM/h ";
    rescalculocombustiveltempo.innerHTML = "Tempo: <br>" + tempo + " Hora/s ";
    rescalculocombustiveldistancia.innerHTML = "Distancia Percorrida: <br>" + distancia + " KM";
    rescalculocombustivellitros.innerHTML = "Litros Gastos: <br>" + litros_gastos + " L";
    event.preventDefault();

})

function opencalculocombustivel() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista2").style.display = "flex";
    document.querySelector(".calculocombustivel").style.display = "flex";
    document.querySelector(".convertercemf").style.display = "none";
    document.querySelector(".converterfemc").style.display = "none";
    document.querySelector(".custocarro").style.display = "none";
    document.querySelector(".idadeemdias").style.display = "none";
    document.querySelector(".invertervalores").style.display = "none";
    document.querySelector(".porcentagemvotos").style.display = "none";
    document.querySelector(".reajustesalario").style.display = "none";
    document.querySelector(".volumelataoleo").style.display = "none";
    document.querySelector(".prestaçãoematraso").style.display = "none";
}

document.querySelector("#submitconvertercemf ").addEventListener("click", (event) => {
    let temperaturaC = parseInt(document.getElementById('temperaturac').value);

    let temperaturaF = (9 * temperaturaC + 160) / 5;


    let resultConvert = document.querySelector('.resultconvertercemf');


    resultConvert.innerHTML = "Temperatura em °C: " + temperaturaC + "<br>" + "Temperatura em °F: " + temperaturaF;
    event.preventDefault();

})

function openconvertercemf() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista2").style.display = "flex";
    document.querySelector(".calculocombustivel").style.display = "none";
    document.querySelector(".convertercemf").style.display = "flex";
    document.querySelector(".converterfemc").style.display = "none";
    document.querySelector(".custocarro").style.display = "none";
    document.querySelector(".idadeemdias").style.display = "none";
    document.querySelector(".invertervalores").style.display = "none";
    document.querySelector(".porcentagemvotos").style.display = "none";
    document.querySelector(".reajustesalario").style.display = "none";
    document.querySelector(".volumelataoleo").style.display = "none";
    document.querySelector(".prestaçãoematraso").style.display = "none";
}

document.querySelector("#submitconverterfemc ").addEventListener("click", (event) => {
    let temperaturaF = parseInt(document.getElementById('temperaturaf').value);

    let temperaturaC = (temperaturaF - 32) * (5 / 9);


    let resultConvert = document.querySelector('.resultconverterfemc');


    resultConvert.innerHTML = "Temperatura em °F: " + temperaturaF + "<br>" + "Temperatura em °C: " + temperaturaC;
    event.preventDefault();

})

function openconverterfemc() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista2").style.display = "flex";
    document.querySelector(".calculocombustivel").style.display = "none";
    document.querySelector(".convertercemf").style.display = "none";
    document.querySelector(".converterfemc").style.display = "flex";
    document.querySelector(".custocarro").style.display = "none";
    document.querySelector(".idadeemdias").style.display = "none";
    document.querySelector(".invertervalores").style.display = "none";
    document.querySelector(".porcentagemvotos").style.display = "none";
    document.querySelector(".reajustesalario").style.display = "none";
    document.querySelector(".volumelataoleo").style.display = "none";
    document.querySelector(".prestaçãoematraso").style.display = "none";

}


document.querySelector("#submitcustocarro").addEventListener("click", (event) => {

    let valorcarro = parseInt(document.getElementById('valorcarro').value);
    let taxadistibuidora = valorcarro * 0.28;
    let taxafabrica = valorcarro * 0.45;

    let custofinal = taxadistibuidora + taxafabrica + valorcarro;


    let resultcustocarro = document.querySelector('.resultcustocarro');


    resultcustocarro.innerHTML = "Custo Final ao Consumidor: " + custofinal;

    event.preventDefault();

})

function opencustocarro() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista2").style.display = "flex";
    document.querySelector(".calculocombustivel").style.display = "none";
    document.querySelector(".convertercemf").style.display = "none";
    document.querySelector(".converterfemc").style.display = "none";
    document.querySelector(".custocarro").style.display = "flex";
    document.querySelector(".idadeemdias").style.display = "none";
    document.querySelector(".invertervalores").style.display = "none";
    document.querySelector(".porcentagemvotos").style.display = "none";
    document.querySelector(".reajustesalario").style.display = "none";
    document.querySelector(".volumelataoleo").style.display = "none";
    document.querySelector(".prestaçãoematraso").style.display = "none";

}

document.querySelector("#submitidadeemdias").addEventListener("click", (event) => {

    let idadeano = parseInt(document.getElementById('idadeano').value);
    let idademes = parseInt(document.getElementById('idademes').value);
    let idadedia = parseInt(document.getElementById('idadedia').value);

    let idadedias = idadeano * 365 + idademes * 30 + idadedia


    let resultidadeemdias = document.querySelector('.resultidadeemdias');


    resultidadeemdias.innerHTML = "A sua idade em dias é igual a: " + idadedias;

    event.preventDefault();

})

function openidadeemdias() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista2").style.display = "flex";
    document.querySelector(".calculocombustivel").style.display = "none";
    document.querySelector(".convertercemf").style.display = "none";
    document.querySelector(".converterfemc").style.display = "none";
    document.querySelector(".custocarro").style.display = "none";
    document.querySelector(".idadeemdias").style.display = "flex";
    document.querySelector(".invertervalores").style.display = "none";
    document.querySelector(".porcentagemvotos").style.display = "none";
    document.querySelector(".reajustesalario").style.display = "none";
    document.querySelector(".volumelataoleo").style.display = "none";
    document.querySelector(".prestaçãoematraso").style.display = "none";

}

document.querySelector("#submitinvertervalores").addEventListener("click", (event) => {

    let A = document.getElementById('A-invertervalores').value;
    let B = document.getElementById('B-invertervalores').value; 
    
    let novab = A
    A = B


    let resultinvertervalores = document.querySelector('.resultinvertervalores');


    resultinvertervalores.innerHTML = "A: "+ A + "<br> B: " + novab;

    event.preventDefault();

})

function openinvertervalores() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista2").style.display = "flex";
    document.querySelector(".calculocombustivel").style.display = "none";
    document.querySelector(".convertercemf").style.display = "none";
    document.querySelector(".converterfemc").style.display = "none";
    document.querySelector(".custocarro").style.display = "none";
    document.querySelector(".idadeemdias").style.display = "none";
    document.querySelector(".invertervalores").style.display = "flex";
    document.querySelector(".porcentagemvotos").style.display = "none";
    document.querySelector(".reajustesalario").style.display = "none";
    document.querySelector(".volumelataoleo").style.display = "none";
    document.querySelector(".prestaçãoematraso").style.display = "none";

}

document.querySelector("#submitporcentagemvotos").addEventListener("click", (event) => {
    let eleitores = parseInt(document.getElementById('eleitores').value);
    let votosvalidos = parseInt(document.getElementById('votosvalidos').value);
    let votosbranco = parseInt(document.getElementById('votosbranco').value);
    let votosnulo = parseInt(document.getElementById('votosnulo').value);

    let porcentagemvalidos = votosvalidos * 100 / eleitores
    let porcentagembranco = votosbranco * 100 / eleitores
    let porcentagemnulo = votosnulo * 100 / eleitores


    let resultporcentagemvotos = document.querySelector('.resultporcentagemvotos');
    resultporcentagemvotos.innerHTML = ("O total de votos é igual a: "+ eleitores + "<br>" + porcentagemvalidos +"% foram votos validos" + "<br>" + porcentagemnulo + "% foram votos nulos <br>" + porcentagembranco+"% foram votos em brancos")

    event.preventDefault();

})

function openporcentagemvalores() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista2").style.display = "flex";
    document.querySelector(".calculocombustivel").style.display = "none";
    document.querySelector(".convertercemf").style.display = "none";
    document.querySelector(".converterfemc").style.display = "none";
    document.querySelector(".custocarro").style.display = "none";
    document.querySelector(".idadeemdias").style.display = "none";
    document.querySelector(".invertervalores").style.display = "none";
    document.querySelector(".porcentagemvotos").style.display = "flex";
    document.querySelector(".reajustesalario").style.display = "none";
    document.querySelector(".volumelataoleo").style.display = "none";
    document.querySelector(".prestaçãoematraso").style.display = "none";

}

document.querySelector("#submitreajustesalario").addEventListener("click", (event) => {
    let salario = parseInt(document.getElementById('salariomensal').value);
    let reajuste = parseInt(document.getElementById('percentualajuste').value);

    let salarionovo = salario * (reajuste / 100) + salario


    let resultreajustesalario = document.querySelector('.resultreajustesalario');
    resultreajustesalario.innerHTML = ("Novo Salário: " + salarionovo)

    event.preventDefault();

})

function openreajustesalario() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista2").style.display = "flex";
    document.querySelector(".calculocombustivel").style.display = "none";
    document.querySelector(".convertercemf").style.display = "none";
    document.querySelector(".converterfemc").style.display = "none";
    document.querySelector(".custocarro").style.display = "none";
    document.querySelector(".idadeemdias").style.display = "none";
    document.querySelector(".invertervalores").style.display = "none";
    document.querySelector(".porcentagemvotos").style.display = "none";
    document.querySelector(".reajustesalario").style.display = "flex";
    document.querySelector(".volumelataoleo").style.display = "none";
    document.querySelector(".prestaçãoematraso").style.display = "none";
}

document.querySelector("#submitvolumelataoleo").addEventListener("click", (event) => {
    let raio = parseInt(document.getElementById('raio').value);
    let altura = parseInt(document.getElementById('altura').value);

    let volume = 3.14 * (raio * raio) * altura


    let resultvolumelataoleo = document.querySelector('.resultvolumelataoleo');
    resultvolumelataoleo.innerHTML = ("Volume: " + volume + " Metros Cubicos")

    event.preventDefault();

})

function openvolumelataoleo() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista2").style.display = "flex";
    document.querySelector(".calculocombustivel").style.display = "none";
    document.querySelector(".convertercemf").style.display = "none";
    document.querySelector(".converterfemc").style.display = "none";
    document.querySelector(".custocarro").style.display = "none";
    document.querySelector(".idadeemdias").style.display = "none";
    document.querySelector(".invertervalores").style.display = "none";
    document.querySelector(".porcentagemvotos").style.display = "none";
    document.querySelector(".reajustesalario").style.display = "none";
    document.querySelector(".volumelataoleo").style.display = "flex";
    document.querySelector(".prestaçãoematraso").style.display = "none";
}

document.querySelector("#submitprestaçãoematraso").addEventListener("click", (event) => {
    let valor = parseInt(document.getElementById('valor').value);
    let tempo = parseInt(document.getElementById('tempo').value);
    let taxa = parseInt(document.getElementById('taxa').value);

    let prestacao = valor * (valor*taxa/100)*tempo

    let resultprestaçãoematraso = document.querySelector('.resultprestaçãoematraso');
    resultprestaçãoematraso.innerHTML = ("Prestação: " + prestacao)

    event.preventDefault();

})

function openprestaçãoematraso() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista2").style.display = "flex";
    document.querySelector(".calculocombustivel").style.display = "none";
    document.querySelector(".convertercemf").style.display = "none";
    document.querySelector(".converterfemc").style.display = "none";
    document.querySelector(".custocarro").style.display = "none";
    document.querySelector(".idadeemdias").style.display = "none";
    document.querySelector(".invertervalores").style.display = "none";
    document.querySelector(".porcentagemvotos").style.display = "none";
    document.querySelector(".reajustesalario").style.display = "none";
    document.querySelector(".volumelataoleo").style.display = "none";
    document.querySelector(".prestaçãoematraso").style.display = "flex";
}


