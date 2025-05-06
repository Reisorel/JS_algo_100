let words = ["The answer is blowing in the wind", "The answer is blowing in the wind"];


const vowelsFinder = (words) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const result = words.reduce((acc, word) => {
    const count = word
      .toLowerCase()
      .split("")
      .filter((letter) => vowels.includes(letter)).length;
    return acc + count;
  }, 0);
  return result;
}

console.log(vowelsFinder(words));
