const shiftLetters = function (string: any): string {
  return string.split('').map(letter => {

    let code = letter.charCodeAt(letter);
    return String.fromCharCode(code + 1);

  }).join('');
};

console.log(shiftLetters("hello")); // => 'ifmmp'
console.log(shiftLetters("abcxyz")); // => "bcdyz{"