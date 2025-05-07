// 15.intervalCancellation

function cancellable(fun, args, t) {
  fun(...args);
  const intervalId = setInterval(() => {
    fun(...args);
  }, t);
  return function cancelFn() {
    clearInterval(intervalId);
  }
}

// Test
const fn = (a, b) => console.log(a + b);
const args = [1, 2];
const t = 2000;

const cancellableFn = cancellable(fn, args, t);


// la fonction cancellable prend 3 paramètres : fn, args et t
// fn est la fonction à exécuter
// args est un tableau d'arguments à passer à la fonction
// t est le délai en millisecondes avant l'exécution de la fonction
// l'argument fun est appellé avec les arguments args et un intervalle de t millisecondes

// La fonction retourne un objet avec une méthode cancel
// La méthode cancel annule l'exécution de la fonction si elle n'a pas encore été exécutée

// Dans l'exemple de test, on crée une fonction fn qui additionne deux nombres
// On crée un tableau args avec les arguments 1 et 2
// On crée un intervalle de 2 secondes
// la fonction fn est appelée toutes les 2 secondes avec les arguments 1 et 2
