// 10.allowOnefunctionCall.js
var once = function(fn) {
  // 1. Variables de la closure
  let called = false;
  let result;

  // 2. Retourne le wrapper
  return function(...args) {
    if (!called) {
      // Premier appel : on exécute fn et on mémorise
      result = fn.apply(this, args);
      //ici apply permet d'appeller la fonction fn avec le contexte this et les arguments passés
      // on utilise apply pour passer le contexte this et les arguments
      called = true;
      return result;
    }
    // Appels suivants : on ne fait rien
    return undefined;
  };
};


// Test
function add(a, b) {
  return a + b;
}
const addOnce = once(add);
console.log(addOnce(1, 2)); // 3
console.log(addOnce(1, 2));

// la fonction once prend en parmaètre une fonction fn
// Elle retourne une fonction qui ne peut être appellée qu'une seule fois.
// Les appels suivants ne produisent aucun effet.
// called est initialisé à false
// result est initialisé à undefined
// La fonction retournée vérifie si called est false
// Si c'est le cas, elle appelle fn avec les arguments passés et mémorise le résultat
// Elle met called à true
// Si called est true, elle ne fait rien et retourne undefined


// Explication de .this

function allumer() {
  console.log("J'allume la télé de", this.piece);
}

const salon = { piece: "salon", allumer };
const chambre = { piece: "chambre", allumer };

salon.allumer();   // J'allume la télé de salon
chambre.allumer(); // J'allume la télé de chambre
allumer();  // J'allume la télé de undefined (mode strict)

// ici this fait référence à l'objet salon ou chambre
// Dans le cas de allumer(), this fait référence à l'objet global (window en mode non strict)
