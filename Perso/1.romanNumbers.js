let romanToInt = (s) => {
  let romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };

  let total = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
      let currentValue = romanNumerals[s[i]];
      console.log(`Itération ${s.length - 1 - i + 1}: caractère '${s[i]}', valeur actuelle = ${currentValue}, valeur précédente = ${prevValue}, total avant = ${total}`); // état avant décision

      if (currentValue < prevValue) {
          total -= currentValue;
          console.log(`  → ${currentValue} < ${prevValue}, on soustrait ${currentValue}, nouveau total = ${total}`); // soustraction
      } else {
          total += currentValue;
          console.log(`  → ${currentValue} ≥ ${prevValue}, on ajoute ${currentValue}, nouveau total = ${total}`); // addition
      }

      prevValue = currentValue;
  }

  return total;
}

console.log(romanToInt("XXIV")) // 24
