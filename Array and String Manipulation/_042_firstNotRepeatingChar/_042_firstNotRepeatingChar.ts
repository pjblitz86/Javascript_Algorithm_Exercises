function firstNotRepeatingCharacter(str: string): string {
  const charArr: string[] = str.split("");
  let duplicates = {};
  let answer = "_";
  let indexAnswer = Number.MAX_SAFE_INTEGER;

  charArr.forEach((el, index) => {
    if (!duplicates.hasOwnProperty(el)) {
      duplicates[el] = {
        count: 1,
        index
      };
    } else {
      duplicates[el].count++;
      duplicates[el].index = index;
    }
  });

  for (const key in duplicates) {
    if (duplicates[key].count === 1 && duplicates[key].index < indexAnswer) {
      answer = key;
      indexAnswer = duplicates[key].index;
    }
  }

  return answer;
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
