function closelista3() {
    document.getElementById("lista1").style.display = "flex";
    document.getElementById("lista2").style.display = "flex";
    document.getElementById("lista3").style.display = "flex";
    document.querySelector(".screen-lista3").style.display = "none";
}

function opennumerossomadosemultiplicados(){
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista2").style.display = "none";
    document.querySelector(".screen-lista3").style.display = "flex";
    document.querySelector(".conversaodolar").style.display = "none";
    document.querySelector(".numerossomadosemultiplicados").style.display = "flex";
    document.querySelector(".conversaorealdolar").style.display = "none"
}

document.querySelector("#submitnumerossomadosemultiplicados").addEventListener("click", (event) => {
    let a = parseInt(document.getElementById('A-numerossomadosemultiplicados').value);
    let b = parseInt(document.getElementById('B-numerossomadosemultiplicados').value);
    let c = parseInt(document.getElementById('C-numerossomadosemultiplicados').value);
    let d = parseInt(document.getElementById('D-numerossomadosemultiplicados').value);

    let somaAB  = a+b
    let somaAC  = a+c
    let somaAD  = a+d
    let somaBC  = b+c
    let somaBD  = b+d
    let somaCD  = c+d

    let multiAB = a*b
    let multiAC = a*c
    let multiAD = a*d
    let multiBC = b*c
    let multiBD = b*d
    let multiCD = c*d


    let resultnumerossomadosemultiplicados = document.querySelector('.resultnumerossomadosemultiplicados');
    resultnumerossomadosemultiplicados.innerHTML = ("Soma A + B: " + somaAB) + ("------Multiplicação A * B: " + multiAB) + ("<br>Soma A + C: " + somaAC) + ("------Multiplicação A * C: " + multiAC) + ("<br>Soma A + D: " + somaAD) + ("------Multiplicação A * D: " + multiAD) + ("<br>Soma B + C: " + somaBC) + ("------Multiplicação B * C: " + multiBC) + ("<br>Soma B + D: " + somaBD) + ("------Multiplicação B * D: " + multiBD) + ("<br>Soma C + D: " + somaCD) + ("------Multiplicação C * D: " + multiCD)

    event.preventDefault();

})

function openconversaodolar() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista2").style.display = "none";
    document.querySelector(".screen-lista3").style.display = "flex";
    document.querySelector(".conversaodolar").style.display = "flex";
    document.querySelector(".numerossomadosemultiplicados").style.display = "none";
    document.querySelector(".conversaorealdolar").style.display = "none"
}
document.querySelector("#submitconversaodolar").addEventListener("click", (event) => {
    let cotacaoDolar = parseInt(document.getElementById('cotacaodolar').value);
    let quantiaDolar = parseInt(document.getElementById('quantiadolar').value);

    let quantidadeReal = quantiaDolar * cotacaoDolar;


    let resultconvesaodolar = document.querySelector('.resultconversaodolar');
    resultconvesaodolar.innerHTML = ("Os seus dolares equivale a: R$" + quantidadeReal);


    event.preventDefault();

})

function openconversaorealdolar() {
    document.getElementById("lista1").style.display = "none";
    document.getElementById("lista2").style.display = "none";
    document.querySelector(".screen-lista3").style.display = "flex";
    document.querySelector(".numerossomadosemultiplicados").style.display = "none";
    document.querySelector(".conversaodolar").style.display = "none";
    document.querySelector(".conversaorealdolar").style.display = "flex"
}

document.querySelector("#submitconversaorealdolar").addEventListener("click", (event) => {
    let cotacaoDolar = parseInt(document.getElementById('cotacaodolarr').value);
    let quantiaReais = parseInt(document.getElementById('quantiareais').value);

    let quantidadeDolar = quantiaReais / cotacaoDolar;


    let resultconvesaodolar = document.querySelector('.resultreal');
    resultconvesaodolar.innerHTML = ("Os seus reais equivale a: $" + quantidadeDolar);


    event.preventDefault();

})

