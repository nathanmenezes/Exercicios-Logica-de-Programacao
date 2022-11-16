function ex11() {
    alert("Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.");
    let nCarros = parseFloat(prompt("Digite o número de carros vendidos: "));
    let totalVendas = parseFloat(prompt("Digite o valor total de suas vendas: "));
    let salarioFixo = parseFloat(prompt("Digite o salário fixo: "));
    let quantiaCarro = parseFloat(prompt("Digite o valor recebido por cada carro vendido: "));

    let totalPagamento = salarioFixo + (totalVendas * 0.05) + (nCarros * quantiaCarro);

    alert("O total a ser pago é de: R$" + totalPagamento);
}

function ex13() {
    alert("Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5.");

    let n1 = parseFloat(prompt("Digite a primeira nota: "));
    let n2 = parseFloat(prompt("Digite a segunda nota: "));
    let n3 = parseFloat(prompt("Digite a terceira nota: "));

    let media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;

    alert(`A média das notas é de ${media}`);
}

function ex14() {
    alert("Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!");

    let valor = parseInt(prompt("Digite o valor: "));

    if (valor > 10) {
        alert("Valor maior que 10 !");
    }
    if (valor < 10) {
        alert("Valor menor que 10 !");
    }
    if (valor == 10) {
        alert("Numero igual a 10");
    }
}

function ex15() {
    alert("Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).");

    let valor = parseInt(prompt("Digite um valor: "));

    if (valor > 0) {
        alert("Número Positivo");
    }
    if (valor < 0) {
        alert("Número Negativo");
    }
    if (valor == 0) {
        alert("Valor igual a zero");
    }
}

function ex16() {
    alert("As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.");

    let quantiaMaca = parseInt(prompt("Digite o número de maçãs compradas: "));
    let total;
    if (quantiaMaca >= 12) {
        total = quantiaMaca * 1;
    }
    if (quantiaMaca < 12) {
        total = quantiaMaca * 1.30;
    }

    alert(`O total da compra de ${quantiaMaca} maçãs é de R$${total}`);

}

function ex17() {
    alert("Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 oaluno é aprovado). Escrever também a média calculada.");

    let n1 = parseInt(prompt("Digite o valor da primeira nota: "));
    let n2 = parseInt(prompt("Digite o valor da segunda nota: "));

    let media = (n1 + n2) / 2;

    if (media >= 6) {
        alert(`Média: ${media} 
Status: APROVADO`);
    } else {
        alert(`Média: ${media} 
Status: REPROVADO`);
    }
}

function ex18() {
    alert("Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).");

    let anoAtual = parseInt(prompt("Digite o ano atual: "));
    let anoNascimento = parseInt(prompt("Digite o ano de seu nascimento: "));

    let idade = anoAtual - anoNascimento;

    if (idade >= 18) {
        alert("Pode votar e voto obrigatório!");
    }
    if (idade >= 16 && idade < 18) {
        alert("Pode votar e voto não obrigatório!");
    }
    if (idade < 16) {
        alert("Não pode votar!");
    }
}

function ex19() {
    alert("Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.");

    let n1 = parseInt(prompt("Digite um valor: "));
    let n2 = parseInt(prompt("Digite outro valor: "));

    let maior;
    let menor;

    if (n1 > n2) {
        maior = n1;
        menor = n2;
    } else {
        maior = n2;
        menor = n1;
    }

    alert(menor + ", " + maior);
}

function ex21() {
    alert("Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.");

    let horaInicio = parseInt(prompt("Digite a hora de inicio do jogo: "));
    let horaFinal = parseInt(prompt("Digite a hora de fim do jogo: "));

    let duracao = horaFinal - horaInicio;

    if (duracao <= 0) {
        duracao = duracao + 24;
    }
    alert(`A duração desse jogo de Xadrez foi de: ${duracao} Horas`);
}

function ex22() {
    alert("A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).");

    let horasTrabalhadas = parseInt(prompt("Digite a quantidade horas que você trabalhou: "));
    let salarioHora = parseInt(prompt("Digite seu salário hora: "));

    if (horasTrabalhadas > 40) {
        horaExtra = horasTrabalhadas - 40;
        salarioExtra = horaExtra * (salarioHora * 0.5);
        totalSalario = salarioHora * 40 + salarioExtra;
        alert("Você trabalhou " + horasTrabalhadas + " Horas" + " logo seu salário é de: " + totalSalario);
    } else {
        totalSalario = salarioHora * 40;
        alert("Você trabalhou " + horasTrabalhadas + " Horas" + " logo seu salário é de: " + totalSalario);
    }

}

function ex23() {
    alert("Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas: - para sexo masculino: peso ideal = (72.7 * altura) - 58 - para sexo feminino: peso ideal = (62.1 * altura) - 44.7");

    let nome = prompt("Qual o seu nome ?");
    let sexo = prompt("Qual o seu sexo ? (M/F)");
    let altura = parseFloat(prompt("Digite sua altura (em metros): "));
    let pesoIdeal;

    if (sexo == "M") {
        pesoIdeal = (72.8 * altura) - 58;
        alert(nome + " seu peso ideal é de: " + pesoIdeal + " KG");
    } else {
        pesoIdeal = (62.1 * altura) - 44.7;
        alert(nome + " seu peso ideal é de: " + pesoIdeal + " KG");
    }
}

function ex24() {
    alert("Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.")

    let salarioFixo = parseFloat(prompt("Digite o valor do salário fixo: "));
    let valorVendas = parseFloat(prompt("Digite o valor das vendas efetuadas: "));
    let comissao;
    let totalSalario;

    if (valorVendas > 1500) {
        comissao = (valorVendas - 1500) * 0.05 + (1500 * 0.03);
        totalSalario = salarioFixo + comissao;
    } else {
        totalSalario = salarioFixo + valorVendas * 0.03
    }

    alert("O salário total será de: R$ " + totalSalario)
}

function ex25() {
    alert("Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.")

    let nConta = parseFloat(prompt("Digite o nº da sua conta: "));
    let saldo = parseFloat(prompt("Digite seu saldo: "));
    let debito = parseFloat(prompt("Digite seu debito: "));
    let credito = parseFloat(prompt("Digite seu crédito: "));

    saldo = saldo - debito + credito;
    console.log(saldo)
    if (saldo == 0) {
        alert("Saldo Zerado!");
    }

    if (saldo > 0) {
        alert("Saldo Positivo! R$" + saldo);
    }
    if (saldo < 0) {
        alert("Saldo Negativo! R$" + saldo);
    }
}

function ex26() {
    alert("Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.");

    let quantiaAtual = parseInt(prompt("Digite a quantidade atual em estoque: "));
    let quantiaMax = parseInt(prompt("Digite a quantida maxima do estoque: "));
    let quantiaMin = parseInt(prompt("Digite a quantida minima do estoque: "));

    let quantiaMedia = (quantiaMax + quantiaMin) / 2;

    if (quantiaAtual >= quantiaMedia) {
        alert("NÃO EFETUAR COMPRA");
    } else {
        alert("EFETUAR COMPRA");
    }
}

function ex28() {
    alert("Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.")

    let n1 = parseInt(prompt("Digite o primeiro valor: "));
    let n2 = parseInt(prompt("Digite o segundo valor: "));
    let n3 = parseInt(prompt("Digite o terceiro valor: "));
    let maior;
    let maiorString;

    if (n1 > n2 && n1 > n3) {
        maior = n1;
        maiorString = "N1 é o maior: "
    }
    if (n2 > n1 && n2 > n3) {
        maior = n2;
        maiorString = "N2 é o maior: "
    }
    if (n3 > n2 & n3 > n1) {
        maior = n3;
        maiorString = "N3 é o maior: "
    }

    alert(maiorString + maior)
}

function ex29() {
    alert(`Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. `)

    let n1 = parseInt(prompt("Digite o primeiro valor: "));
    let n2 = parseInt(prompt("Digite o segundo valor: "));
    let n3 = parseInt(prompt("Digite o terceiro valor: "));

    let maior;
    let meio;

    if (n1 > n2 && n1 > n3) {
        maior = n1;
        if (n2 > n3) {
            meio = n2;
        } else {
            meio = n3;
        }
    }
    if (n2 > n1 && n2 > n3) {
        maior = n2;
        if (n1 > n3) {
            meio = n1;
        } else {
            meio = n3;
        }
    }
    if (n3 > n2 & n3 > n1) {
        maior = n3;
        if (n2 > n1) {
            meio = n2;
        } else {
            meio = n1;
        }
    }

    alert("A soma entre os dois maiores é de: " + (maior + meio));
}

function ex30() {
    alert(`Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente. `)

    let n1 = parseInt(prompt("Digite o primeiro valor: "));
    let n2 = parseInt(prompt("Digite o segundo valor: "));
    let n3 = parseInt(prompt("Digite o terceiro valor: "));

    let maior;
    let meio;

    if (n1 > n2 && n1 > n3) {
        maior = n1;
        if (n2 > n3) {
            meio = n2;
            menor = n3;
        } else {
            meio = n3;
            menor = n2;
        }
    }
    if (n2 > n1 && n2 > n3) {
        maior = n2;
        if (n1 > n3) {
            meio = n1;
            menor = n3;
        } else {
            meio = n3;
            menor = n1;
        }
    }
    if (n3 > n2 & n3 > n1) {
        maior = n3;
        if (n2 > n1) {
            meio = n2;
            menor = n1;
        } else {
            meio = n1;
            menor = n2;
        }
    }

    alert(`Maior: ${maior} Meio: ${meio} Menor: ${menor}`);
}

function ex31() {
    alert(" Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.")

    let lado1 = parseInt(prompt("Digite o primeiro lado: "));
    let lado2 = parseInt(prompt("Digite o segundo lado: "));
    let lado3 = parseInt(prompt("Digite o terceiro lado: "));

    if (lado1 > (lado2 + lado3)) {
        alert("Não pode formar um triangulo!");
    } else if (lado2 > (lado1 + lado3)) {
        alert("Não pode formar um triangulo!");
    } else if (lado3 > (lado2 + lado1)) {
        alert("Não pode formar um triangulo!");
    } else {
        alert("Pode formar um triangulo!");
    }
}

function ex32() {
    alert("Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. ")

    let time1 = prompt("Digite o nome do primeiro time: ");
    let golsTime1 = parseFloat(prompt("Digite a quantidade de gols marcados pelo time " + time1));
    let time2 = prompt("Digite o nome do segundo time: ");
    let golsTime2 = parseFloat(prompt("Digite a quantidade de gols marcados pelo time " + time2));


    if (golsTime1 > golsTime2) {
        alert("VENCEDOR: " + time1)
    } else if (golsTime1 == golsTime2) {
        alert("EMPATE!")
    } else {
        alert("VENCEDOR: " + time2)
    }

}

function ex33() {
    alert(` Ler dois valores e imprimir uma das três mensagens a seguir:
    Números iguais, caso os números sejam iguais
    Primeiro é maior, caso o primeiro seja maior que o segundo;
    Segundo maior, caso o segundo seja maior que o primeiro. `);

    let valor1 = parseInt(prompt("Digite o primeiro valor: "))
    let valor2 = parseInt(prompt("Digite o segundo valor: "))

    if (valor1 == valor2) {
        alert("Números Iguais");
    } else if (valor1 > valor2) {
        alert("Primeiro é Maior");
    } else if (valor2 > valor1) {
        alert("Segundo é Maior");
    }

}

function ex35() {
    let tipo = prompt("Digite o tipo de combustível: (G - Gasolina A - Alcool)")
    let litros = parseInt(prompt("Digite a quantidade de combustivel em litros: "));

    let total;

    switch (tipo) {
        case "G":
            if (litros > 20) {
                total = litros * 3.30
                total = total - total * 0.06
            } else {
                total = litros * 3.30
                total = total - total * 0.04
            }
            break;
        case "A":
            if (litros > 20) {
                total = litros * 2.90
                total = total - total * 0.05
            } else {
                total = litros * 2.90
                total = total - total * 0.03
            }
    }

    alert("O total de combústivel é de: " + total.toFixed(2))
}

function ex36() {
    alert(`Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
        dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
        das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
        novo com a mulher mais velha. `)

    let homem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
    let homem2 = parseInt(prompt("Digite a idade do segundo homem: "));

    let mulher1 = parseInt(prompt("Digite a idade do primeiro mulher: "));
    let mulher2 = parseInt(prompt("Digite a idade do segundo mulher: "));

    let velho, velha, nova, novo;

    if (homem1 > homem2) {
        velho = homem1;
        novo = homem2;
    } else {
        velho = homem2;
        novo = homem1;
    }

    if (mulher1 > mulher2) {
        velha = mulher1;
        nova = mulher2;
    } else {
        velha = mulher2;
        nova = mulher1;
    }

    alert("A soma do mais velho com a mais nova é de: " + (velho + nova) + "\nO produto da mais velha com o mais novo é de: " + (velha * novo));
}

function ex37() {
    alert(`Uma fruteira está vendendo frutas com a seguinte tabela de preços:
    Até 5 Kg Acima de 5 Kg
    Morango R$ 2,50 por Kg R$ 2,20 por Kg
    Maçã R$ 1,80 por Kg R$ 1,50 por Kg
    Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
    ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
    morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. `);

    let kgMorango = parseInt(prompt("Digite a quantidade de morangos que você deseja comprar: (KG)"))
    let kgMaca = parseInt(prompt("Digite a quantidade de maçãs que você deseja comprar: (KG)"))

    let totalMorango, totalMaca;

    if (kgMorango > 5) {
        totalMorango = kgMorango * 2.20;
    } else {
        totalMorango = kgMorango * 2.50;
    }

    if (kgMaca > 5) {
        totalMaca = kgMaca * 1.50;
    } else {
        totalMaca = kgMaca * 1.80;
    }

    let total = totalMaca + totalMorango;

    if ((kgMorango + kgMaca) > 8 || total > 25) {
        total = total - total * 0.1;
    }

    alert("Você deverá pagar: R$ " + total);

}


function ex38() {
    alert(`Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
    diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
    mensagem Usuário inválido!. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
    esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem senha incorreta. Caso a
    senha esteja correta, deve ser mostrada a mensagem Acesso permitido.`)

    let usuario = parseInt(prompt("Digite o usuario: "))

    if (usuario == 1234) {
        let senha = parseInt(prompt("Digite a senha: "));
        if (senha == 9999) {
            alert("Acesso Permitido");
        } else {
            alert("Senha Incorreta!");
        }
    } else {
        alert("Usuario Invalido!");
    }
}

function ex40() {
    alert(`Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
    unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
    a pagar (total a pagar = total - desconto), sabendo-se que:
        - Se quantidade <= 5 o desconto será de 2%
        - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
        - Se quantidade > 10 o desconto será de 5% `);

    let produto = prompt("Digite o nome do produto: ");
    let quantidade = parseInt(prompt("Digite a quantidade itens: "));
    let preco = parseInt(prompt("Digite o valor unitario: "));

    let total = quantidade * preco;

    let desconto;

    if (quantidade <= 5) {
        desconto = total * 0.02;
    } else if (quantidade > 5 && quantidade < 10) {
        desconto = total * 0.03;
    } else {
        desconto = total * 0.05;
    }

    total = total - desconto;

    alert(`O total da compra desses ${produto} é de ${total}`);
}

function ex41() {

    let nota1 = parseInt(prompt("Digite a primeira nota: "));
    let nota2 = parseInt(prompt("Digite a segunda nota: "));
    let nota3 = parseInt(prompt("Digite a terceira nota: "));
    let mediaEx = parseInt(prompt("Digite a média dos exercicios: "))

    let media = (nota1 + nota2 * 2 + nota3 * 3 + mediaEx) / 7;

    let conceito;

    if (media >= 9) {
        conceito = "Conceito: A";
    } else if (media >= 7.5 && media < 9) {
        conceito = "Conceito: B";
    } else if (media >= 6 && media < 7.5) {
        conceito = "Conceito: C";
    } else {
        conceito = "Conceito: D";
    }

    alert(conceito);

}

function ex42() {
    let codigo = prompt("Digite seu código: ");
    let idade = parseInt(prompt("Digite seu ano de nascimento: "));
    let idadeEmp = parseInt(prompt("Digite o ano de ingresso na empresa: "));

    idade = 2022 - idade;
    idadeEmp = 2022 - idadeEmp;

    let status;

    if (idade >= 65) {
        status = "Requerer Aposentadoria!"
    } else if (idadeEmp >= 30) {
        status = "Requerer Aposentadoria!"
    } else if (idade >= 60 && idadeEmp >= 25) {
        status = "Requerer Aposentadoria!"
    }
    else{
        status = "Não Requerer!"
    }

    alert(` Empregado: ${codigo} \n Idade: ${idade} \n Tempo Empresa: ${idadeEmp} \n ${status}`);
}