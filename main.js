/*.Crear un array llamado meses y que almacene 
el nombre de los doce meses del año. 
Mostrar por pantalla los doce nombres 
utilizando la función console.log().*/
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log(meses);

/*Escribir el código de una función a la que se pasa 
como parámetro un número entero y devuelve como resultado 
una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función*/
 function parImpar(num){
    let cadena="";
    if(num%2===0){
    cadena="Es par";
    }else{
        cadena="Es impar";
    }
    return cadena;
 }
 console.log(parImpar(4));

 /*Definir una función que muestre información 
 sobre una cadena de texto que se le pasa como argumento. 
 A partir de la cadena que se le pasa, 
 la función determina si esa cadena está formada sólo 
 por mayúsculas, sólo por minúsculas o 
 por una mezcla de ambas.

*/

function definirTexto(texto){
    let i=0; let caracter=''; let mayusculas=0; let minusculas=0;
    texto=texto.replace(/\s+/g, "").trim();
    while(i<=texto.length-1) {
        caracter = texto.charAt(i); 
        if (caracter === caracter.toUpperCase()) { 
            mayusculas++;
        } 
        if (caracter === caracter.toLowerCase()){ 
            minusculas++; 
        } 
        i++;
    }

    if (mayusculas>0 && minusculas>0){
        console.log("El texto contiene mayusculas y minusculas");
    }else if(mayusculas>0){
        console.log("El texto contiene solo masyusculas");
    }else{
        console.log("El texto contiene solo minusculas")
    }
//console.log(mayusculas);
//console.log(minusculas);
}

let Parrafo="   MM  MMM";
definirTexto(Parrafo);

/*El factorial de un número entero n es una operación matemática que consiste en 
multiplicar todos los factores n x (n-1) x (n-2) x ... 
x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120*/

  function factorial(n){
    let resultado = n;
    if (n === 0 || n === 1) 
      return 1; 
    for(let i=n; i>1; i--){
        n--;
        resultado *=n;
    }
    return resultado;
  }
console.log(factorial(5));


