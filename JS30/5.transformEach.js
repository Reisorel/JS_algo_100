// Définition de la fonction map
const map = function(array, fn) {
  const result  =[];
  for (let i = 0; i < array.length; i++) {
    result[i] = fn(array[i], i);
  }
  return result;
}

// Tableau de départ
const numbers = [1, 2, 3, 4, 5];

// Fonction de transformation
const double = function(number) {
  return number * 2;
}

// Appel de map
const doubledNumbers = map(numbers, double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// La fonction map est une fonction de transformation qui prend un tableau et une fonction de transformation en paramètre.
// Elle applique la fonction de transformation à chaque élément du tableau et retourne un nouveau tableau contenant les résultats.
//  result[i] = fn(array[i], i);
// Ici on utilise i pour accéder à chaque élément du tableau auquel on applique la fonction de transformation.
// dès que fn renvoie une valeur, on l'affecte à l'indice i du tableau result.


// Variante avec push :
const map2 = function(array, fn) {
  const result  =[];
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i], i));
  }
  return result;
}

console.log(map2(numbers, double)); // [2, 4, 6, 8, 10]
