/**
 * Génère les valeurs FizzBuzz de 1 à n.
 * @param {number} n Nombre maximal à traiter.
 * @return {string[]} Tableau de chaînes ("Fizz", "Buzz", "FizzBuzz" ou nombre).
 */
function fizzBuzz(n) {
  const results = [];              // 1. structure pour accumuler

  for (let i = 1; i <= n; i++) {   // 2. boucle de 1 à n
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");    // 2.1 multiple de 3 ET 5
    }
    else if (i % 3 === 0) {
      results.push("Fizz");        // 2.2 multiple de 3 seul
    }
    else if (i % 5 === 0) {
      results.push("Buzz");        // 2.3 multiple de 5 seul
    }
    else {
      results.push(i.toString());  // 2.4 aucun : convertir i en chaîne
    }
  }

  return results;                  // 3. retour du tableau
}

// Exemple d’utilisation :
const output = fizzBuzz(15);
console.log(output.join(", "));    // affiche : 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
