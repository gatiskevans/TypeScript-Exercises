/**
 * You have decided that you are an expert of love and want to start a dating service.
 * Given an array of women and an array of men, 
 * return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
 * If the array sizes don't match, return "Cupid is on vacation"
 */

function matchMaker(women: string[], men: string[]): string | string[][] {
    let pairs: string[][] = [];
    for(let i = 0; i < women.length; i++){
        if(women.length === men.length){
            pairs.push([women[i], men[i]]);
        } else {
            return `Cupid is on vacation`;
        }
    }
  return pairs;
}

export { matchMaker };