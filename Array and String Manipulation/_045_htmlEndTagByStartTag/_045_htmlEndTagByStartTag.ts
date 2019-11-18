function htmlEndTagByStartTag(startTag: string): string {
  const startTagArr: string[] = startTag.split("");
  const endTagArr: string[] = [];

  if (startTagArr[0] !== "<") {
    return "";
  }

  for (let i = 0; i < startTagArr.length; i++) {
    if (startTagArr[i] === " " || startTagArr[i] === ">") {
      break;
    }
    endTagArr.push(startTagArr[i]);
  }

  endTagArr.splice(1, 0, "/");
  endTagArr.push(">");

  return endTagArr.toString();
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
