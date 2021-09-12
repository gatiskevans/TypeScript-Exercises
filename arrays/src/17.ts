function fiveCharactersOrFewerOnly(arr: string[]): string[] {
  const fewerLetters = arr.filter(word => word.length <= 5);
  return fewerLetters;
}

// test
console.log(
  fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
); // ["by", "dog", "wolf", "eaten"]