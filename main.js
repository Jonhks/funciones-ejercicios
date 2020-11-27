// Funciones Declaradas
// FunctionDeclaration

// declaración de la función
// function sumaDeclarada() {
//   const resultado = 3 + 3;
//   alert(resultado);
//   return resultado;
// };

// sumaDeclarada();

// Funcion expresada
// FunctionExpression

// const sumaDeclarada = function () {
//   const resultado = 3 + 3;
//   alert(resultado);
//   return resultado;
// };

// Invocación de la función
// sumaDeclarada();


// Funciones Flecha
// Arrow Functions

// const sumaDeclarada = () => {
//   const resultado = 5 + 5;
//   return resultado;
// };

 
// Retorno implicito
// const sumaDeclarada = () => 7 + 7;

// Invocación de la función
// sumaDeclarada();
// sumaDeclarada();

// const num1 = parseInt(prompt('Ingresa el primer numero'));
// const num2 = parseInt(prompt('Ingresa el segundo numero'));

// funcion arrow con parametros
// const sumaDosNumeros = (num1, num2) => {
//   const resultado = num1 + num2;
//   return resultado;
// };

// const sumaDosNumeros = (num1, num2) => num1 + num2; 

// invocación con argumentos
// alert(`El total de la suma es: ${sumaDosNumeros(num1, num2)}`);

                            // Ejercicios 

// Ejercicio 1

// const sumar = (a, b) => {
//   // const result = num1 + num2;
//   // return result;
//   return a + b;
// };

// const sumar = (num1, num2) => num1 + num2;

// console.log(sumar(2,3));
// console.log(sumar(1.2,3.4));
// console.log(sumar(3,-5));


// Ejercicio 2

// const restar = (a, b) => a - b;

// console.log(restar(3,2));
// console.log(restar(10,5.5));
// console.log(restar(3,5));


// const esPar = (num) => {
//   if(num % 2 === 0){
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(esPar(4));


// const boton = document.getElementById('boton');

// let count = 0;
// const global = 'Ambiente global';
// console.log(count)

// const prueba = () => {
//   const result = count = count + 1;
//   alert(count)
//   // alert(global)
//   const local = 'Ambiente local';
//   console.log(local)
// }

// // console.log(result)
// boton.addEventListener('click', prueba)


// Ejercicio saludo variables

// const nombre = prompt("Ingresa tu nombre");
// const apellido = prompt("Ingresa tu apellido");

// const nombreCompleto = `Hola ${nombre} ${apellido}, bienvenida a Ada`;
// alert(nombreCompleto);

// alert(`Hola ${nombre} ${apellido}, bienvenida a Ada`);

// prompt("Ingresa algo")
// alert("Ingresa algo")
// confirm("Ingresa algo")

// const prueba = 'Jonh';

// console.log("un 'saludo'" + " " + prueba);
// console.log(`un saludo ${prueba}`);


// Ejercicio Heladeria

// const helado1 = prompt("Dime el primer sabor que te guste");
// const helado2 = prompt("Dime el segundo sabor que te guste");
// const helado3 = prompt("Dime el tercer sabor que te guste");

// alert( `Aquí tiene su helado de ${helado1}, ${helado2} y ${helado3}`);



// ejercicio Datos personales

// const nombre = prompt('Ingresa tu nombre');
// const apellido = prompt('Ingresa tu apellido');
// const edad = prompt('Ingresa tu edad');
// const nacionalidad = prompt('Ingresa tu nacionalidad');
// const documento = prompt('Ingresa tu documento');

// alert(`Nuevo usuario agregado al sistema: 
//   ${nombre}
//   ${apellido}
//   ${edad}
//   ${nacionalidad}
//   ${documento}`
// );

// Ejercico Años de perro

// const edad = prompt('Ingresa la edad de tu perro');

// const formula = (edad - 31) / 16;

// const edadPerro = Math.exp(formula);

// alert(edadPerro);


// Ejercicio Celcius a Farenheit

// const grados = prompt('Ingrese los grados celcius');

// const formula = (grados * 9/5) + 32;

// alert(`EL cambio de celcius afarenheit es: ${formula}`);

// const numero = prompt('Ingrese un numero')
// const numero2 = prompt('Ingrese otro numero')

// const multiplicar = (a, b) => {
//   const resultado =  a * b; 
//   return resultado;
// };

// Retorno implicito
// const multiplicar = (a, b) => a * b;


// console.log(multiplicar(2, 3));
// console.log(multiplicar(4, 0.5));


// const dividir = (a, b) => a / b;

// const dividir = (a, b) => {
//   return a / b;
// };

// const resultado = dividir(10, 2);
// const resultado2 = dividir(8, 4);

// console.log(resultado2);

// const uno = prompt('Ingresa lo quieras');
// const dos = prompt('dos');
// const tres = prompt('tres');

const calcularPuntaje = (facil, normal, dificil) => {
  const ejercicio1 = facil * 3; // 8 * 3 = 24
  const ejercicio2 = normal * 5; // 6 * 5 = 30
  const ejercicio3 = dificil * 10; // 3 * 10 =30

  return ejercicio1 + ejercicio2 + ejercicio3;
    // 24 + 30 + 30 = 84
};

// const resultado = calcularPuntaje(5, 1, 2);
// const resultado = calcularPuntaje(uno, dos, tres);
// const nueva = resultado / 2;
// alert(`El puntaje obtenido es: ${resultado}`);

// console.log(calcularPuntaje(8,6,3));

const func = (string, string2) => `${string}@${string2}`;

console.log(func('jonh', 'email'))
