const reduce = function(nums, fn, init) {
  let acc = init;
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i], i);
  }
  return acc;
}

// Tableau de départ
const numbers = [1, 2, 3, 4, 5];
// Fonction de réduction
const sum = function(acc, number) {
  return acc + number;
}
// Appel de reduce
const sumOfNumbers = reduce(numbers, sum, 0);
console.log(sumOfNumbers); // 15

// la fonction reduce prend en argument un tableau, une fonction et un valeur initiale.
// On itialise acc à la valeur de init (0 dans notre exemple).
// On itère sur chaque élément du tableau nums.
// Pour chaque élément, on appelle la fonction fn avec acc, l'élément courant et l'indice de l'élément courant.
// Dans notre exemple on appelle la fonction sum qui additionne acc et number.
// On affecte le résultat de fn à acc.
// On retourne acc à la fin de la fonction.
// acc = fn(acc, nums[i], i); ici nums[i] est le nombre courant, acc est la somme courante, on ajoute i pour la position de l'élément courant.
