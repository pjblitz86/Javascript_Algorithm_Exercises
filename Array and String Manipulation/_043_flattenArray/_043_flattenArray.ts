function steamrollArray(inputArr: any[]): any[] {
  const flattenedArr = [];

  flatten(inputArr);

  // recursion
  function flatten(inputArr: any[]) {
    inputArr.forEach(el => {
      if (Array.isArray(el)) {
        flatten(el);
      } else {
        flattenedArr.push(el);
      }
    });
  }

  return flattenedArr;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
