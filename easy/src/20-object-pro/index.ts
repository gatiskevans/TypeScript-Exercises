/**
 * You are on your way to becoming a professional, time to master objects.
 * Create a function that takes an object and returns the keys and values as separate arrays. 
 * Return the keys sorted alphabetically, and their corresponding values in the same order.
 */

function objectPro(input: any) {
    const arrKeys: string[] = [];
    const arrValues: any[] = [];
    input = Object.fromEntries(Object.entries(input).sort())

    for(let key of Object.keys(input)){
        arrKeys.push(key);
    }

    for(let value of Object.values(input)){
        arrValues.push(value);
    }
    
    const seperateArr = [arrKeys, arrValues];
    return seperateArr;
}

export { objectPro };