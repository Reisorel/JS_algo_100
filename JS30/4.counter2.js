const createCounter = function(init) {
  let currentValue = init;
  return {
    increment: function(unit) {
      currentValue += unit
      return currentValue;
    },
    decrement: function() {
      currentValue--;
      return currentValue;
    },
    reset: function() {
      currentValue = init;
      return currentValue;
    }
  };
}

console.log(createCounter(5).increment(1));


// La fonction createCounter prend un paramètre init
// Elle possède 3 méthodes : increment, decrement et reset
// La méthode increment ajoute un nombre à currentValue
// La méthode decrement soustrait 1 à currentValue
// La méthode reset remet currentValue à init
// Dans l'exemple on appelle la fonction createCounter avec un argument de 5 et la méthode increment avec un argument de 1
