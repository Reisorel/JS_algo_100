// 11.Memoize.js

// Une fonction mémoïsation est une fonction qui se souvient de ses précédents appels pour éviter les recalculs.
// Une closure se définit comme une combinaison d'une fontion et de l'environmement lexical dans lequel elle était déclarée.
// Utile pour les fonctions pures, fortement recursives ou coüteuses
// Pour le même jeu d'arguments, fn ne sera exécutée qu'une seule fois.
// Les appels suivants retourneront le résultat mémorisé.

function memoise(fn) {
  // Création d'un cache vide. New Map crée un objet de clés/valeurs
  const cache = new Map();
  // Initialisation d'un compteur d'appels à 0
  let callCount = 0;

  function memoized(...args) {
    // Stringify trasnforme le tableau d'arguments en une chaine de caractères
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      // Si le cache ne contient pas la clé, on l'ajoute
      cache.set(key, fn(...args));
      // On incrémente le compteur d'appels
      callCount += 1;
    }
    // On retourne le résultat mémorisé
    return cache.get(key);

  }
  // On ajoute une méthode pour obtenir le nombre d'appels
  // On utilise une closure pour accéder à callCount
  // On retourne la fonction mémoïsée
  memoized.getCallCount = function() {
    return callCount;
  }
  return memoized;
}

// Test
function add(a, b) {
  return a + b;
}
const memoizedAdd = memoise(add);
console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // 3 (mémorisé)
