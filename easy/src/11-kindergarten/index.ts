/**
 * You have decided to teach programming at a kindergarten, but you cannot understand half of what the children are saying.
 * Write a function that reverses all the words in a sentence that start with a particular letter.
 */

function kindergarten(sentence: string, letter: string): string {
    return sentence.split(" ").map(word => word.charAt(0) === letter ? word.split("").reverse().join("") : word).join(" ");
}

export { kindergarten };