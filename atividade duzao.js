Faça o teste de mesa para o seguinte programa 
let n1 = 3; 
let n2 = 2; 
let a; 
let b; 
let total = 0; 
a = n1 / n2; 
b = a; 
n1 = n2 + 10; 
n2 = n1 % 2; 
b = b * 2; 
a++; 
a+=1; 
b = b; 
total = n1 + n2; 
b = a + total; 
a = total + 2 % 2; 
b = (2 + 3) * n1; 
b = n1 - total - n2; 
total = b + a;

let n1 = 3;
n1 = 3
n2 = não definido
a = não definido
b = não definido
total = 0

let n2 = 2;
n1 = 3
n2 = 2
a = não definido
b = não definido
total = 0

let a;
n1 = 3
n2 = 2
a = undefined
b = não definido
total = 0

let b;
n1 = 3
n2 = 2
a = undefined
b = undefined
total = 0

let total = 0;
n1 = 3
n2 = 2
a = undefined
b = undefined
total = 0

a = n1 / n2;
n1 = 3
n2 = 2
a = 1.5
b = undefined
total = 0

b = a;
n1 = 3
n2 = 2
a = 1.5
b = 1.5
total = 0

n1 = n2 + 10;
n1 = 12
n2 = 2
a = 1.5
b = 1.5
total = 0

n2 = n1 % 2;
n1 = 12
n2 = 0
a = 1.5
b = 1.5
total = 0

b = b * 2;
n1 = 12
n2 = 0
a = 1.5
b = 3
total = 0

a++;
n1 = 12
n2 = 0
a = 2.5
b = 3
total = 0

a+=1;
n1 = 12
n2 = 0
a = 3.5
b = 3
total = 0

b = b;
n1 = 12
n2 = 0
a = 3.5
b = 3
total = 0

total = n1 + n2;
n1 = 12
n2 = 0
a = 3.5
b = 3
total = 12

b = a + total;
n1 = 12
n2 = 0
a = 3.5
b = 15.5
total = 12

a = total + 2 % 2;
n1 = 12
n2 = 0
a = 12
b = 15.5
total = 12

b = (2 + 3) * n1;
n1 = 12
n2 = 0
a = 12
b = 60
total = 12

b = n1 - total - n2;
n1 = 12
n2 = 0
a = 12
b = 0
total = 12

total = b + a;
n1 = 12
n2 = 0
a = 12
b = 0
total = 12

Você se lembra do teste de mesa? Nele, o programador descreve os valores que as variáveis vão assumindo de acordo com a execução do programa. Vou começá-lo e você pode terminá-lo, tudo bem?

n1 = 3 
n2 = 2 
a = ? 
b = ? 
total = 0

n1 = 3
n2 = 2
a = ?
b = ?
total = 0

Atribuição: a = n1 * 2
n1 é 3, então a se torna 6.
Atribuição: b = n2 + a
n2 é 2 e a é 6, então b se torna 8.
Atribuição: total = a + b
a é 6 e b é 8, então total se torna 14.

n1 = 3
n2 = 2
a = 6
b = 8
total = 14

2-	Faça um programa que leia três valores inteiros e imprima a soma deles. 

# Solicita ao usuário para inserir três valores inteiros
valor1 = int(input("Insira o primeiro valor inteiro: "))
valor2 = int(input("Insira o segundo valor inteiro: "))
valor3 = int(input("Insira o terceiro valor inteiro: "))

# Calcula a soma dos três valores
soma = valor1 + valor2 + valor3

# Imprime o resultado da soma
print("A soma dos três valores é:", soma)

3-	Faça um programa que leia um número inteiro e imprima o seu antecessor e o seu sucessor. 

// Solicita ao usuário para inserir um número inteiro
var numero = parseInt(prompt("Insira um número inteiro:"));

// Calcula o antecessor e o sucessor do número
var antecessor = numero - 1;
var sucessor = numero + 1;

// Imprime o antecessor e o sucessor
console.log("O antecessor de", numero, "é", antecessor);
console.log("O sucessor de", numero, "é", sucessor);

4-	Faça um programa para ler uma temperatura em graus Kelvin e apresentar a temperatura convertida em graus Celsius. A fórmula de conversão é: C = K – 273.15, sendo K a temperatura em Kelvin e C a temperatura em Celsius. 

// Solicita ao usuário para inserir a temperatura em Kelvin
var temperaturaKelvin = parseFloat(prompt("Insira a temperatura em Kelvin:"));

// Calcula a temperatura em Celsius
var temperaturaCelsius = temperaturaKelvin - 273.15;

// Imprime a temperatura em Celsius
console.log("A temperatura em Celsius é:", temperaturaCelsius);

5-	Faça um programa que leia a idade de uma pessoa em anos, meses e dias (devem ser realizadas três perguntas para o usuário). Exemplo: 12 anos, 5 meses e 3 dias. Depois, o programa deve escrever a idade dessa pessoa só em dias. Considerar ano igual a 365 dias e mês igual a 30 dias. 

// Solicita ao usuário para inserir a idade em anos, meses e dias
var anos = parseInt(prompt("Insira a idade em anos:"));
var meses = parseInt(prompt("Insira a idade em meses:"));
var dias = parseInt(prompt("Insira a idade em dias:"));

// Calcula a idade total em dias
var idadeEmDias = (anos * 365) + (meses * 30) + dias;

// Imprime a idade total em dias
console.log("A idade total em dias é:", idadeEmDias);

6-	Faça um programa que leia um número e imprima o resultado do quadrado desse número

// Solicita ao usuário para inserir um número
var numero = parseFloat(prompt("Insira um número:"));

// Calcula o quadrado do número
var quadrado = numero * numero;

// Imprime o quadrado do número
console.log("O quadrado de", numero, "é", quadrado);

7-	Três amigos jogaram na loteria. Caso eles ganhem, o prêmio deve ser repartido proporcionalmente ao valor que cada um deu para a realização da aposta. Faça um programa que leia quanto cada apostador investiu, o valor do prêmio, e imprima quanto cada um ganharia do prêmio com base no valor investido. 

// Solicita ao usuário para inserir o valor investido por cada apostador
var investimentoAmigo1 = parseFloat(prompt("Insira o valor investido pelo amigo 1:"));
var investimentoAmigo2 = parseFloat(prompt("Insira o valor investido pelo amigo 2:"));
var investimentoAmigo3 = parseFloat(prompt("Insira o valor investido pelo amigo 3:"));

// Solicita ao usuário para inserir o valor do prêmio
var premio = parseFloat(prompt("Insira o valor do prêmio:"));

// Calcula a soma total dos investimentos
var investimentoTotal = investimentoAmigo1 + investimentoAmigo2 + investimentoAmigo3;

// Calcula a parte proporcional do prêmio para cada amigo
var parteAmigo1 = (investimentoAmigo1 / investimentoTotal) * premio;
var parteAmigo2 = (investimentoAmigo2 / investimentoTotal) * premio;
var parteAmigo3 = (investimentoAmigo3 / investimentoTotal) * premio;

// Imprime a parte proporcional do prêmio para cada amigo
console.log("O amigo 1 ganharia:", parteAmigo1);
console.log("O amigo 2 ganharia:", parteAmigo2);
console.log("O amigo 3 ganharia:", parteAmigo3);

8-	Faça o teste de mesa do seguinte programa e mostre como ficará a tela do usuário após sua execução. 

let a = 4;
let n1 = 0;
let n2 = 3;

n1 = n2 > 5 == n2 <= 3;  // n1 = false

n2 = a % 4 * 3 / 2 + 15 - 1 * n1 != 3 * 5;  // n2 = true

a = a * 2;  // a = 8

a /= 8;  // a = 1

console.log(n1);  // false
console.log(n2);  // true
console.log(a);  // 1


Inicialização:
a = 4
n1 = 0
n2 = 3

Atribuição de n1:
n2 > 5 é false
n2 <= 3 é true
Então, n1 recebe o valor false

Atribuição de n2:
a % 4 é 0
0 * 3 é 0
0 / 2 é 0
15 - 1 * n1 é 15
3 * 5 é 15
Portanto, a expressão final é 0 + 15 - 15 != 15, que é false
Então, n2 recebe o valor false

Atribuição de a:
a é multiplicado por 2, resultando em 8

Divisão de a:
a é dividido por 8, resultando em 1

Impressão dos valores:
n1 é false
n2 é true
a é 1

a tela do usuário após a execução do programa seria:
false
true
1

9-	Faça um programa que receba uma senha e teste se ela é igual à 904087. Se a senha estiver correta escreva “Acesso permitido”, do contrário, escreva a mensagem “Você não tem acesso ao sistema”

// Solicita ao usuário para inserir a senha
var senhaInserida = prompt("Digite a senha:");  // Lê a senha como string

// Senha correta
var senhaCorreta = "904087";

// Verifica se a senha inserida é igual à senha correta
if (senhaInserida === senhaCorreta) {
    console.log("Acesso permitido");
} else {
    console.log("Você não tem acesso ao sistema");
}

10-	Faça um programa que leia um valor inteiro em segundos, e imprima-o em horas, minutos e segundos. 
// Solicita ao usuário para inserir um valor inteiro em segundos
var segundosTotal = parseInt(prompt("Insira um valor inteiro em segundos:"));

// Calcula as horas, minutos e segundos
var horas = Math.floor(segundosTotal / 3600);
var minutos = Math.floor((segundosTotal % 3600) / 60);
var segundos = segundosTotal % 60;

// Imprime o resultado
console.log("Horas:", horas);
console.log("Minutos:", minutos);
console.log("Segundos:", segundos);

11-	Faça um programa que receba dois números inteiros e mostre o maior deles. Não se esqueça que eles podem ser iguais. 

// Solicita ao usuário para inserir dois números inteiros
var numero1 = parseInt(prompt("Insira o primeiro número inteiro:"));
var numero2 = parseInt(prompt("Insira o segundo número inteiro:"));

// Verifica qual número é maior
if (numero1 > numero2) {
    console.log("O maior número é:", numero1);
} else if (numero2 > numero1) {
    console.log("O maior número é:", numero2);
} else {
    console.log("Os números são iguais.");
}

12-	Faça um programa que deve receber duas notas de provas (P1 e P2), duas notas de trabalho (T1 e T2) e imprimir se o aluno foi aprovado ou reprovado. As notas de provas têm peso 7 e as de trabalho peso 3. Assim, a média deve ser calculada com base na seguinte fórmula: (P1 * 0.7 + T1 * 0.3 + P2 * 0.7 + T2 * 0.3) / 2. O aluno estará aprovado se sua média for superior ou igual a 6, caso contrário estará reprovado. 

// Solicita ao usuário para inserir as notas das provas e dos trabalhos
var notaP1 = parseFloat(prompt("Insira a nota da prova P1:"));
var notaT1 = parseFloat(prompt("Insira a nota do trabalho T1:"));
var notaP2 = parseFloat(prompt("Insira a nota da prova P2:"));
var notaT2 = parseFloat(prompt("Insira a nota do trabalho T2:"));

// Calcula a média ponderada
var media = (notaP1 * 0.7 + notaT1 * 0.3 + notaP2 * 0.7 + notaT2 * 0.3) / 2;

// Verifica se o aluno foi aprovado ou reprovado
if (media >= 6) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado.");
}

