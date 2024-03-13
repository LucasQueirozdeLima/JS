//Variaveis

var nome = "Lucas";
let sobrenome = "Lima";
const idade = 17;

//condições

if (idade <= 18) {
    console.log('Você é menor de idade!!');
}else if (idade <= 21) {
    console.log('Você ainda não pode beber!!')
}else {
    console.log('Você é maior de idade!!')
}

console.log('--------------------------');

//Repetição

let count = 0
for(; count < 2; count++) {
    console.log(count);
}

console.log('--------------------------');
count = 0;

do {
    console.log(count);
    count++
} while(count <= 3);

console.log('--------------------------');
count = 0;

while (count <= 3) {
    console.log(count);
    count++;
}

//tabuada

let lista = new Array;

function multi(fator, operador) {
    return fator * operador
}

for (let I = 0; I <10; I ++) {
    for (let count = 0; count < 10; count++) {
        lista[count] = multi((count + 1), I + 1);

        console.log((count + 1) + " x "+ (I + 1) + " = " + lista[count]);
    }
    console.log('----------------')
}

