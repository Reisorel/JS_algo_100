const createCounter = function(n) {
  return function() {
    return n++;
  };
};

// Exemple d’utilisation :
const counter = createCounter(10);
console.log(counter()); // 10


// createCounter(10) est une fonction qui qui encaspule un état privé (n).
// La closure permet que cet état persiste entre les appels. 
