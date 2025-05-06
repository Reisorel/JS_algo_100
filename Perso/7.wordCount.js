let poem = "From the bottom of the ocean to the top of the moutain, let met count the ways I love you";


// Fonction retournant le nombre de mots présents dans une chaîne de caractères
function wordCount(str) {
  return str.trim().split(/\s+/).length; // On utilise une expression régulière pou
}

console.log(wordCount(poem)); // { From: 1, the: 2, bottom: 1, of: 2, ocean: 1, to: 2, top: 1, moutain,: 1, let: 1, met: 1, count: 1, ways: 1, I: 1, love: 1, you: 1 }


// Fonction retournant le mot le plus fréquent dans une chaîne de caractères avec filter
function mostFrequentWord(str) {
  const counts = {};
  let maxWord = null;
  let maxCount = 0;

  for (const word of str.trim().split(/\s+/)) {
    // on incrémente le compteur pour ce mot
    const c = (counts[word] = (counts[word] || 0) + 1);
    // on met à jour le mot le plus fréquent dès qu’on dépasse l’ancien maximum
    if (c > maxCount) {
      maxCount = c;
      maxWord = word;
    }
  }

  return maxWord;
}

console.log(mostFrequentWord(poem)); // the
