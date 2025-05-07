// 14.timeOutCancellation.js

function cancellable(fn, args, t) {
  // 1) On programme l'exécution de fn(...args) après t ms
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  // 2) On définit la fonction d'annulation qui annulera ce timer
  const cancelFn = () => clearTimeout(timeoutId);

  // 3) On renvoie simplement cette fonction
  return cancelFn;
}

// Test
const fn = (a, b) => console.log(a + b);
const args = [1, 2];
const t = 2000;
const cancellableFn = cancellable(fn, args, t);


// fonction cancellable prend 3 paramètres : fn, args et t
// fn est la fonction à exécuter
// args est un tableau d'arguments à passer à la fonction
// t est le délai en millisecondes avant l'exécution de la fonction
// La fonction retourne un objet avec une méthode cancel
// La méthode cancel annule l'exécution de la fonction si elle n'a pas encore été exécutée
// On utilise setTimeout pour exécuter la fonction après t millisecondes
// On utilise clearTimeout pour annuler l'exécution de la fonction
