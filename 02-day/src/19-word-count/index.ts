/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {

  count(str: string) {
    let object: any = {};
    str.trim().toLowerCase().replace(/\s\s|\t|\n+/g, ' ').split(" ").forEach((word) => {
      if (object.hasOwnProperty(word)) {
        object[word]++;
      } else {
        object[word] = 1;
      }
    });
    return object;

  }
}
export { Words };
