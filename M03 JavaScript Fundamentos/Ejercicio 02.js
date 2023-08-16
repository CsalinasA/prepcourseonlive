/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   var palabra = string
   return palabra // Debe retornar un string.
   // Tu código:
}
devolverString('hola')

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   var sumacion = x + y// Retorna el resultado de su suma.
   return sumacion// Tu código:
}
suma(28, 30)

function resta(x, y) {
   var restacion = x - y // Retorna el resultado de la resta.
   return restacion // Tu código:
}
resta(100, 1)

function divide(x, y) {
   var dividelos = x / y // Retorna el resultado de su división.
   return dividelos// Tu código:
}
divide (14, 2)

function multiplica(x, y) {
   var multiplicadera = x * y // Retorna el resultado de su multiplicación.
   return multiplicadera// Tu código:
}
multiplica(10, 4)

function obtenerResto(x, y) {
   var restante = x % y // Obten el resto de la división de "x" entre "y".
   return restante// Tu código:
}
obtenerResto(42, 5)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
