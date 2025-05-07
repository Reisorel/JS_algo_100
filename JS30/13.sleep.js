// 13.sleep.js

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
    .then(() => console.log(`Slept for ${ms} milliseconds`));
}

// Test
const sleepPromise = sleep(2000)
  .then(() => console.log('Sleep completed!'));

// La fonction sleep prend un paramètre ms (millisecondes)
// Elle retourne une promesse qui se résout après ms millisecondes
// Elle utilise setTimeout pour créer un délai
// Elle utilise then pour afficher un message lorsque le délai est écoulé
