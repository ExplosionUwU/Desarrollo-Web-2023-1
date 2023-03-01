

//flecha sin parametros
const saludar = () => {
    return console.log("Hola, ¿cómo estás?");
};
saludar();

//flecha 1 parametro
const doble = numero => {
    return numero * 2;
};
console.log(doble(5));

//flecha 2 parametros
const double = (a, b) => {
    return a + b;
};
console.log(double(1,2));

//arreglo
let numeros = [1,2,3,4,5,6];
//ingresa un numero adicional
numeros.push(10);
//saca el ultimo elemento
numeros.pop();
