function palindromeRearranging(inputStr: string): boolean {
  const chars = inputStr.split("");
  const letterObj = {};
  let oddCount = 0;

  // mapping the obj
  for (let i = 0; i < chars.length; i++) {
    if (letterObj.hasOwnProperty(chars[i])) {
      letterObj[chars[i]]++;
    } else {
      letterObj[chars[i]] = 1;
    }
  }

  for (let key in letterObj) {
    if (letterObj[key] % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount > 1 ? false : true;
}

console.log(palindromeRearranging("aabb"));
