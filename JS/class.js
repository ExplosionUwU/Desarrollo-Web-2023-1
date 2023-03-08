let f = (Number) => {return Number+5;}
console.log(f(5));

const esPar = (numero) =>{
    return numero%2 == 0;
}

const validarParidad = (num,callbackFn) => {
    const esPar = callbackFn(num);
    console.log("El numero es entero? : " +esPar);
}
validarParidad(8,esPar)

const dividePorDos = (numero)=>{return numero / 2;}

const divideNumero = (numero, callbackFn)=>{
    return callbackFn(numero);
}

console.log(divideNumero(10,dividePorDos));

//arreglos
const numeros = [1,2,3,20,893,452];
let numerosDos = [11,2,3,20,893,452];

const sumarValores = numeros.reduce((acumulador, valorActual) => {
   return acumulador+valorActual; 
});

console.log(sumarValores);

const fnDos = numerosDos.forEach(Number =>{
    console.log(Number);
});

const fnTres = numerosDos.filter(Number => {
    return Number>10;
});

console.log(fnTres);