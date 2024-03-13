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