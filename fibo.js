let inicial = 0;
let soma = 1;
let resultado = 1;
let lista = new Array();
for (let count = 1; count < 11; count++) {
    lista[count - 1] = inicial;
    resultado = inicial + soma;
    inicial = soma;
    soma = resultado;
}
console.log(lista.toString());
