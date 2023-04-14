/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arr = Object.entries(objeto);
   return arr;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const obj = {};

   let stringArreglo = string.split("").sort();

   stringArreglo.forEach(el => { 
      
      if(obj[el]) {         //// Si la letra ya existe en el objeto, aumentar la cuenta en 1
         obj[el]++;         
      } else {
         obj[el] = 1;
      }
   });
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const arrMin = [];
   const arrMayus = [];

   const arrString = string.split("");

   arrString.forEach(el => {
      if(el === el.toUpperCase()){
         arrMayus.push(el);
      } else {
         arrMin.push(el);
      }
   });
   const arrOrdenado = arrMayus.concat(arrMin);
   let stringOrdenado = arrOrdenado.join("");
   return stringOrdenado;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   const arrFrase = frase.split(" ");
   
   const arrInvertido = arrFrase.map(el => {
     return el.split("").reverse().join("");
   });
 
   return arrInvertido.join(" ");
 }


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   const arrNum = numero.toString().split("");
   const numInvert = arrNum.reverse().join(""); 

   if( numero.toString() === numInvert){
      return("Es capicua");
   } else {
      return("No es capicua");
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const arrFinal = [];
   const arrABC = [];
   

   const arrString = string.split("");

   arrString.forEach(el => {
      if ( el === "a" || el === "b" || el === "c") {
         arrABC.push(el);
      } else {
         arrFinal.push(el);
      }
   });
   let stringFinal = arrFinal.join("");
   return stringFinal;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort((a,b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   const comunes = [];

   array1.forEach(el => {
      if(array2.includes(el)) comunes.push(el);

      if(comunes.length === 0) return [];
   });
   return comunes;  
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
