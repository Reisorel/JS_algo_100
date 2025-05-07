// 12.addTwoPromises.js

function addTwoPromises(p1, p2) {
  return Promise.all([p1, p2])
    .then((values) => values.reduce((acc, value) => acc + value, 0));
}
// Test
const p1 = new Promise((resolve) => setTimeout(() => resolve(2), 3000));
const p2 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

addTwoPromises(p1, p2)
  .then((result) => console.log(result)) // 5
  .catch((error) => console.error(error));

// fonction addTwoPromises prend deux promesses en paramètre
// Elle utilise Promise.all pour attendre que les deux promesses soient résolues
// Elle utilise then pour récupérer les valeurs résolues
// Elle utilise reduce pour additionner les valeurs
// Elle retourne une promesse qui résout la somme des deux valeurs

// Dans l'exemple de test, on crée deux promesses p1 et p2
// On utilise setTimeout pour simuler un délai de 3 secondes avant de résoudre les promesses
// On appelle addTwoPromises avec p1 et p2


//A l'intérieur de la promesse, JS retient son résultat (fullfillment value)
