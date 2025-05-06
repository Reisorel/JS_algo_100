const compose = function(functions) {
  return function(x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

// Fonctions avec log avant return
const add1 = function(x) {
  console.log('add1 reçu :' , x);
  const y = x + 1;
  console.log('add1 renvoie :' , y);
  return y;
};

const multiply2 = function(x) {
  console.log('multiply2 reçu :' , x);
  const y = x * 2;
  console.log('multiply2 renvoie :' , y);
  return y;
};

const subtract3 = function(x) {
  console.log('subtract3 reçu :' , x);
  const y = x - 3;
  console.log('subtract3 renvoie :' , y);
  return y;
};

const functions = [add1, multiply2, subtract3];
const composedFunction = compose(functions);
console.log('Résultat final :' , composedFunction(5));


// la fonction compose prend un tableau de fonctions en paramètres et renvoie une nouvelle fonction.
// La nouvelle fonction prend un argument x et l'applique à la dernière fonction du tableau.
// Ensuite, elle applique le résultat à la fonction précédente, et ainsi de suite jusqu'à la première fonction.
// La fonction compose permet de chaîner plusieurs fonctions ensemble.
