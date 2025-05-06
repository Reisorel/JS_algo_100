const filter = function(arr, fn) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (fn(value, i)) {
      result.push(value);
    }
  }
  return result;
}

// Tableau de départ
const numbers = [1, 2, 3, 4, 5];
// Fonction de filtrage
const isEven = function(number) {
  return number % 2 === 0;
}
// Appel de filter
const evenNumbers = filter(numbers, isEven);
  console.log(evenNumbers); // [2, 4]


// la fonction filter est une fonction de filtrage qui prend un tableau et une fonction de filtrage en paramètre
// la fonction de filtre est une callback.
// Initialisation d'un tableau vide result
// Itération sur chaque éléement du tableau d'entrée
// value change de valeur à chaque itération (ex pour i = 0, value = arr[0], dans le cas numbers, value = 1)
// appel de la fonction de filtrage avec value et i
// si la fonction de filtrage renvoie true, on ajoute value au tableau result
// on retourne le tableau result
