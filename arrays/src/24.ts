const countLetters = function (string: string): object {
  return string.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};

console.log(countLetters("abbcccddddeeeee")); // => {a:1, b:2, c:3, d:4, e:5}