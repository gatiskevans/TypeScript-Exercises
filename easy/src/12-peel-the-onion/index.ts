/**
 * You have made a virtual onion and want to peel off the outer layer.
 * Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.
 * 
 * Example:
 * 
 * Input:
[
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
]

 * Output: 
[
  ["f", "g"],
  ["j", "k"]
]
 */

import { isConditionalExpression } from "typescript";

function peelTheOnion(onion: (string | number)[][]): (string | number)[][] {
  onion.pop();
  onion.shift();

  for (let i = 0; i < onion.length; i++) {
    onion[i].shift();
    onion[i].pop();
  }

  return onion;
}

export { peelTheOnion };
