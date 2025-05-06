const expect = function (val) {
  return {
    toBe: function (other) {
      if (val === other) return true;
      else return false
    },
    notToBe: function (other) {
      if (val !== other) return true;
      else return false
    },
  };
};

console.log(expect(2).toBe(1)); // true
console.log(expect(1).notToBe(4)); // true

// La fonction expect renvoie un objet avec deux méthodes : toBe et notToBe.
// toBe : vérifie si la val est égale à other.
// notToBe : vérifie si la val est différente de other.
// Si la condition est remplie, elle retourne true.
// On appelle la fonction expact avec une valeur et la méthode toBe ou notToBe avec une autre valeur.
// val et other sont des arguments de la fonction expect
