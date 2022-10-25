function increment(letter) {
  return String.fromCharCode(letter.charCodeAt(0) + 1);
}

function decrement(letter) {
  return String.fromCharCode(letter.charCodeAt(0) - 1);
}

function getVowelAndConsonantCount(arr) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let consonantCount = 0;
  arr.forEach((l) => {
    if (vowels.includes(l)) vowelCount++;
    else consonantCount++;
  });
  return { vowelCount, consonantCount };
}

function getMinOperations(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const letters = str.split("");
  const len = letters.length;
  let minCount = 0;
  // [h, a, c, k]
  let { vowelCount, consonantCount } = getVowelAndConsonantCount(letters);
  if (vowelCount === consonantCount) {
    return minCount;
  } else if (vowelCount < consonantCount) {
    // aim => ++vowelCount or --consonantCount
    // focus : turning consonants => vowels
    for (let i = 0; i < len; i++) {
      const l = letters[i];
      minCount = 0;
      if (!vowels.includes(l)) {
        let incrementedLetter, decrementedLetter;
        if (l !== "z") {
          incrementedLetter = increment(l);
        }
        decrementedLetter = decrement(l);
        if (vowels.includes(incrementedLetter)) {
          ++vowelCount;
          --consonantCount;
          letters[i] = incrementedLetter;
          ++minCount;
        } else if (vowels.includes(decrementedLetter)) {
          ++vowelCount;
          --consonantCount;
          letters[i] = decrementedLetter;
          ++minCount;
        }
        if (vowelCount === consonantCount) {
          return minCount;
        }
      }
    }
  } else {
    // aim => ++consonantCount or --vowelCount
    // focus : turning vowels => consonants
    for (let i = 0; i < len; i++) {
      const l = letters[i];
      if (!vowels.includes(l)) {
        const incrementedLetter = increment(l);
        // if(vowels.includes(incrementedLetter))
        letters[i] = incrementedLetter;
        ++minCount;
        if (vowelCount === consonantCount) {
          return minCount;
        }
      }
    }
  }
}

console.log(getMinOperations("ahck"));
