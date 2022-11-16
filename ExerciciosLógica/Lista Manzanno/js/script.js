function ex1() {
    alert(" Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. ")

    let numero = parseInt(prompt("Digite um número: "));
    let acumuladora = "";

    for (let i = 0; i < 11; i++) {
        acumuladora += `\n ${numero} x ${i} = ${numero * i}`;

    }

    alert(acumuladora)
}

function ex2() {
    alert("Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). ")

    let acumuladora = 0;

    for (let i = 0; i < 101; i++) {
        acumuladora += i;
    }

    alert(acumuladora);
}

function ex3() {
    alert(`Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. `)
    let acumuladora = 0;

    for (let i = 0; i < 501; i++) {
        if (i % 2 == 0) {
            acumuladora += i;
        }
    }

    alert(acumuladora);
}

function ex4() {
    alert(`Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.`)

    let acumuladora = "";

    for (let i = 0; i < 21; i++) {
        if (i % 2 == 1) {
            acumuladora += i + "\n";
        }
    }

    alert(acumuladora);

}

function ex5() {
    alert(`Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado  que  qualquer  número  elevado  a  zero  é  1,  e  elevado  a  1  é  ele  próprio.`);

    let acumuladora = 3;
    let result = "";

    for (let i = 0; i < 16; i++) {
        if (i == 0) {
            acumuladora = 0;
        } else if (i == 1) {
            acumuladora = 3;
        } else {
            acumuladora = +acumuladora * 3;
        }
        result += `3 Elevado a ${i} é igual a: ${acumuladora} \n`;
    }

    alert(result)
}

function ex6() {
    alert("Elaborar  um  programa  que  apresente  como  resultado  o  valor  de  uma  potência  de  uma  base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente.")

    let base = parseInt(prompt("Digite a base da potencia: "));
    let expoente = parseInt(prompt("Digite o expoente da potencia: "));

    let acumuladora = 0;
    let result = "";


    for (let i = 0; i <= expoente; i++) {
        if (i == 0) {
            acumuladora = 0;
        } else if (i == 1) {
            acumuladora = base;
        } else {
            acumuladora = +acumuladora * base;
        }
        result += `${base} Elevado a ${i} é igual a: ${acumuladora} \n`;
    }

    alert(result)

}

function ex7() {
    alert(`Escreva  um  programa  que  apresente  a  série  de  Fibonacci  até  o  décimo  quinto  termo.  A  série  de Fibonacci  é  formada  pela  seqüência:  1,  1,  2,  3,  5, 8,  13,  21,  34,  ...,  etc.  Esta  série  se  caracteriza pela  soma  de  um  termo  atual  com  o  seu  anterior  subseqüente,  para  que  seja  formado  o  próximo valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. `)

    let resultado = "";
    let atual = 1;
    let anterior = 0;
    let termo = 0;


    for (let i = 0; i < 16; i++) {

        resultado += `${i + 1}º Termo: ${termo} \n`;
        termo = atual + anterior;
        atual = anterior;
        anterior = termo;
    }

    alert(resultado);
}

function ex8() {
    alert(`Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa   deve   apresentar   os   valores   das   duas   temperaturas.   A   fórmula   de   conversão é51609+=CF, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. `);

    let c = 0;
    let f = 0;
    let resultado = "";
    while (c < 100) {
        c = c + 10;
        f = (9 * c + 160) / 5;
        resultado += `${c}º Celsius equivale a ${f}º Fahrenheit \n`;
    }

    alert(resultado)

}

function ex9(){
    alert(`Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.`);

    let i = 0;

    let soma = 0;

    while(i < 10){ 
        soma += parseInt(prompt("Digite o número"));
        i++;
    }

    let media = soma / 10;

    alert(`Soma: ${soma} \n Media: ${media}`);
}

function ex10(){
    alert(` Elaborar  um  programa  que  apresente  os  resultados  da  soma  e  da  média  aritmética  dos  valores pares situados na faixa numérica de 50 a 70. `);

    let i = 50;
    let soma = 0;

    while(i <= 70){
        if(i % 2 == 0){
            soma += i;
        }
        i++
    }

    let media = soma / 20;

    alert(`Soma: ${soma} \n Media: ${media}`);
}

