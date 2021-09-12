/**
 * You just returned home to find your mansion has been robbed! 
 * Given an object of the stolen items, return the total amount of the burglary (number).
 * If nothing was robbed, return the string "Lucky you!".
 */

function burglary(input: {[key: string]: number}): number | string {
    let counter: number = 0;
    for(const value of Object.values(input)){
        counter += Number(value);
    }
    
    if(counter > 0){
        return counter;
    } else {
        return `Lucky you!`;
    }
 }

export { burglary };