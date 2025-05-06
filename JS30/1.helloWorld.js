const createHelloWorld = function() {
  return function() {
    return "Hello World!";
  }
};

const helloWorld = createHelloWorld();
console.log(helloWorld());


// CreateHelloWorld est une fonction qui ne prend pas d'arguments et qui retourne une autre fonction.
// La fonction retournée, lorsqu'elle est appelée, doit retourner la chaîne "Hello World!".
// On plaace cette fonction dans une variable helloWorld.
// On appelle helloWorld et on affiche le résultat dans la console.

// C'est une closure : elle permet de créer des fonctions avec des états privés.
