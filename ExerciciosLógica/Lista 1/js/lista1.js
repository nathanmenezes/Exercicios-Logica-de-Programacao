// Exercicio 1 - Lista 1 - 4 Operações
document.querySelector("#submit4operacoes").addEventListener("click", (event) => {
    let n1 = parseInt(document.getElementById('n1-4operacoes').value);
    let n2 = parseInt(document.getElementById('n2-4operacoes').value);

    let soma = n1 + n2;
    let multi = n1 * n2;
    let div = n1 / n2;
    let sub = n1 - n2;

    let resSoma = document.querySelector('.resultSoma')
    let resSubtracao = document.querySelector('.resultSubtracao')
    let resMultiplicacao = document.querySelector('.resultMultiplicacao')
    let resDivisao = document.querySelector('.resultDivisao')

    resSoma.innerHTML = "Soma: " + soma
    resSubtracao.innerHTML = "Subtração: " + sub
    resMultiplicacao.innerHTML = "Multiplicação: " + multi
    resDivisao.innerHTML = "Divisão: " + div
    event.preventDefault();

})

function open4operacoes() {
    document.getElementById("lista2").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista1").style.display = "flex";
    document.querySelector(".operacoes4").style.display = "flex";
    document.querySelector(".numerosucessor").style.display = "none";
    document.querySelector(".arearetangulo").style.display = "none";
    document.querySelector(".areatriangulo").style.display = "none";
    document.querySelector(".areaquadrado").style.display = "none";
    document.querySelector(".numeroantecessor").style.display = "none";
    document.querySelector(".arealosango").style.display = "none";
    document.querySelector(".areatrapezio").style.display = "none";
    document.querySelector(".areacirculo").style.display = "none";
}
// Fim Exercicio 1

//Exercicio 2 Lista 1 - Numero Sucessor

document.querySelector("#submit-numerosucessor").addEventListener("click", (event) => {
    let n1 = parseInt(document.getElementById('n1-sucessor').value);

    let sucessor = n1 + 1;

    let numeroSucessor = document.querySelector('#numero-sucessor')


    numeroSucessor.innerHTML = "Número Sucessor: " + sucessor
    console.log(sucessor)
    event.preventDefault();

})

function opennumerosucessor() {
    document.getElementById("lista2").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista1").style.display = "flex";
    document.querySelector(".operacoes4").style.display = "none";
    document.querySelector(".numerosucessor").style.display = "flex";
    document.querySelector(".arearetangulo").style.display = "none";
    document.querySelector(".areatriangulo").style.display = "none";
    document.querySelector(".areaquadrado").style.display = "none";
    document.querySelector(".numeroantecessor").style.display = "none";
    document.querySelector(".arealosango").style.display = "none";
    document.querySelector(".areatrapezio").style.display = "none";
    document.querySelector(".areacirculo").style.display = "none";
}

//Exercicio 3 Lista 1 - Numero Antecessor

document.querySelector("#submit-numeroantecessor").addEventListener("click", (event) => {
    let n1 = parseInt(document.getElementById('n1-antecessor').value);

    let antecessor = n1 - 1;

    let numeroantecessor = document.querySelector('#numero-antecessor')


    numeroantecessor.innerHTML = "Número Antecessor: " + antecessor
    console.log(antecessor)
    event.preventDefault();

})

function opennumeroantecessor() {
    document.getElementById("lista2").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista1").style.display = "flex";
    document.querySelector(".operacoes4").style.display = "none";
    document.querySelector(".numerosucessor").style.display = "none";
    document.querySelector(".arearetangulo").style.display = "none";
    document.querySelector(".areatriangulo").style.display = "none";
    document.querySelector(".areaquadrado").style.display = "none";
    document.querySelector(".numeroantecessor").style.display = "flex";
    document.querySelector(".arealosango").style.display = "none";
    document.querySelector(".areatrapezio").style.display = "none";
    document.querySelector(".areacirculo").style.display = "none";
}

// Exercicio 4 - Lista 1 - Área Triangulo
document.querySelector("#submitareatriangulo").addEventListener("click", (event) => {
    let n1 = parseInt(document.getElementById('n1-areatriangulo').value);
    let n2 = parseInt(document.getElementById('n2-areatriangulo').value);

    let area = n1 * n2 / 2;


    let resAreaTriangulo = document.querySelector('.resultAreaTriangulo')

    resAreaTriangulo.innerHTML = "Área: " + area + " Metros Quadrados"
    event.preventDefault();

})

function openareatriangulo() {
    document.getElementById("lista2").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista1").style.display = "flex";
    document.querySelector(".operacoes4").style.display = "none";
    document.querySelector(".numerosucessor").style.display = "none";
    document.querySelector(".arearetangulo").style.display = "none";
    document.querySelector(".areatriangulo").style.display = "flex";
    document.querySelector(".areaquadrado").style.display = "none";
    document.querySelector(".numeroantecessor").style.display = "none";
    document.querySelector(".arealosango").style.display = "none";
    document.querySelector(".areatrapezio").style.display = "none";
    document.querySelector(".areacirculo").style.display = "none";
}

// Exercicio 5 - Lista 1 - Área Retangulo
document.querySelector("#submitarearetangulo").addEventListener("click", (event) => {
    let n1 = parseInt(document.getElementById('n1-arearetangulo').value);
    let n2 = parseInt(document.getElementById('n2-arearetangulo').value);

    let area = n1 * n2


    let resarearetangulo = document.querySelector('.resultarearetangulo')

    resarearetangulo.innerHTML = "Área: " + area + " Metros Quadrados"
    event.preventDefault();

})

function openarearetangulo() {
    document.getElementById("lista2").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista1").style.display = "flex";
    document.querySelector(".operacoes4").style.display = "none";
    document.querySelector(".numerosucessor").style.display = "none";
    document.querySelector(".arearetangulo").style.display = "flex";
    document.querySelector(".areatriangulo").style.display = "none";
    document.querySelector(".areaquadrado").style.display = "none";
    document.querySelector(".numeroantecessor").style.display = "none";
    document.querySelector(".arealosango").style.display = "none";
    document.querySelector(".areatrapezio").style.display = "none";
    document.querySelector(".areacirculo").style.display = "none";
}

// Exercicio 6 - Lista 1 - Área Quadrado
document.querySelector("#submitareaquadrado").addEventListener("click", (event) => {
    let n1 = parseInt(document.getElementById('n1-areaquadrado').value);

    let area = n1 * n1


    let resareaquadrado = document.querySelector('.resultareaquadrado')

    resareaquadrado.innerHTML = "Área: " + area + " Metros Quadrados"
    event.preventDefault();

})

function openareaquadrado() {
document.getElementById("lista2").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista1").style.display = "flex";
    document.querySelector(".operacoes4").style.display = "none";
    document.querySelector(".numerosucessor").style.display = "none";
    document.querySelector(".arearetangulo").style.display = "none";
    document.querySelector(".areatriangulo").style.display = "none";
    document.querySelector(".areaquadrado").style.display = "flex";
    document.querySelector(".numeroantecessor").style.display = "none";
    document.querySelector(".arealosango").style.display = "none";
    document.querySelector(".areatrapezio").style.display = "none";
    document.querySelector(".areacirculo").style.display = "none";
}

// Exercicio 7 - Lista 1 - Área Losango
document.querySelector("#submitarealosango").addEventListener("click", (event) => {
    let n1 = parseInt(document.getElementById('n1-arealosango').value);
    let n2 = parseInt(document.getElementById('n2-arealosango').value);

    let area = n1 * n2 / 2


    let resarealosango = document.querySelector('.resultarealosango')

    resarealosango.innerHTML = "Área: " + area + " Metros Quadrados"
    event.preventDefault();

})

function openarealosango() {
    document.getElementById("lista2").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista1").style.display = "flex";
    document.querySelector(".operacoes4").style.display = "none";
    document.querySelector(".numerosucessor").style.display = "none";
    document.querySelector(".arearetangulo").style.display = "none";
    document.querySelector(".areatriangulo").style.display = "none";
    document.querySelector(".areaquadrado").style.display = "none";
    document.querySelector(".numeroantecessor").style.display = "none";
    document.querySelector(".arealosango").style.display = "flex";
    document.querySelector(".areatrapezio").style.display = "none";
    document.querySelector(".areacirculo").style.display = "none";
}

// Exercicio 8 - Lista 1 - Área Trapezio
document.querySelector("#submitareatrapezio").addEventListener("click", (event) => {
    let n1 = parseInt(document.getElementById('n1-areatrapezio').value);
    let n2 = parseInt(document.getElementById('n2-areatrapezio').value);
    let n3 = parseInt(document.getElementById('n3-areatrapezio').value);

    let area = (n1 + n2) * n3 / 2


    let resareatrapezio = document.querySelector('.resultareatrapezio')

    resareatrapezio.innerHTML = "Área: " + area + " Metros Quadrados"
    event.preventDefault();

})

function openareatrapezio() {
    document.getElementById("lista2").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista1").style.display = "flex";
    document.querySelector(".operacoes4").style.display = "none";
    document.querySelector(".numerosucessor").style.display = "none";
    document.querySelector(".arearetangulo").style.display = "none";
    document.querySelector(".areatriangulo").style.display = "none";
    document.querySelector(".areaquadrado").style.display = "none";
    document.querySelector(".numeroantecessor").style.display = "none";
    document.querySelector(".arealosango").style.display = "none";
    document.querySelector(".areatrapezio").style.display = "flex";
    document.querySelector(".areacirculo").style.display = "none";
    document.querySelector(".areacirculo").style.display = "none";
}

// Exercicio 9 - Lista 1 - Área Circulo
document.querySelector("#submitareacirculo").addEventListener("click", (event) => {
    let n1 = parseInt(document.getElementById('n1-areacirculo').value);

    let area = 3.14 * (n1 * n1)


    let resareacirculo = document.querySelector('.resultareacirculo')

    resareacirculo.innerHTML = "Área: " + area + " Metros Quadrados"
    event.preventDefault();

})

function openareacirculo() {
    document.getElementById("lista2").style.display = "none";
    document.getElementById("lista3").style.display = "none";
    document.querySelector(".screen-lista1").style.display = "flex";
    document.querySelector(".operacoes4").style.display = "none";
    document.querySelector(".numerosucessor").style.display = "none";
    document.querySelector(".arearetangulo").style.display = "none";
    document.querySelector(".areatriangulo").style.display = "none";
    document.querySelector(".areaquadrado").style.display = "none";
    document.querySelector(".numeroantecessor").style.display = "none";
    document.querySelector(".arealosango").style.display = "none";
    document.querySelector(".areacirculo").style.display = "flex";
    document.querySelector(".areatrapezio").style.display = "none";
}

function closelista1() {
    document.getElementById("lista2").style.display = "flex";
    document.getElementById("lista3").style.display = "flex";
    document.querySelector(".screen-lista1").style.display = "none";
    document.querySelector(".operacoes4").style.display = "none";
    document.querySelector(".numerosucessor").style.display = "none";
    document.querySelector(".arearetangulo").style.display = "none";
    document.querySelector(".areatriangulo").style.display = "none";
    document.querySelector(".areaquadrado").style.display = "none";
    document.querySelector(".numeroantecessor").style.display = "none";
    document.querySelector(".arealosango").style.display = "none";
    document.querySelector(".areacirculo").style.display = "none";
    document.querySelector(".areatrapezio").style.display = "none";
}

