function addAsterixBorder(strArr: string[]) {
  let lengthOfWall = strArr[0].length + 2;
  let wall = "";
  for (let i = 0; i < lengthOfWall; i++) {
    wall = wall.concat("*");
  }

  strArr.unshift(wall);
  strArr.push(wall);

  for (let i = 1; i < strArr.length - 1; i++) {
    strArr[i] = "*".concat(strArr[i], "*");
  }

  return strArr;
}

const arr = ["abc", "def"];
console.log(addAsterixBorder(arr));
