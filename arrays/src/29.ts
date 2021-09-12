function warnTheSheep(arr: string[]): string[] {
    let reversed = arr.reverse();
    return reversed.filter((wolf) => {
        if (wolf === 'wolf') {
            if (wolf === arr.shift()) {
                console.log("Pls go away and stop eating my sheep");
            } else {
                console.log(`Oi! Sheep number ${reversed.indexOf("wolf")+1}! You are about to be eaten by a wolf!`);
            }
        }
    });

}

warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]);
//"Oi! Sheep number 1! You are about to be eaten by a wolf!";
warnTheSheep(["sheep", "sheep", "wolf"]);
  //"Pls go away and stop eating my sheep";