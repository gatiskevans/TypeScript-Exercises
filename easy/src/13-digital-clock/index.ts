/**
 * Write a function that takes the number of seconds and returns the digital format clock time as a string. 
 * Time should be counted from 00:00:00.
 */

function digitalClock(seconds: number): string {
    let hours: number = Math.floor(seconds / 3600);
    seconds %= 3600;
    let minutes: number = Math.floor(seconds / 60);
    let secondsLeft: number = seconds % 60;

    let includeZeroForHours: string | number;
    let includeZeroForMins: string | number;
    let includeZeroForSecs: string | number;

    if(hours === 24){
        hours = 0;
    }

    hours < 10 ? includeZeroForHours = `0` + hours : includeZeroForHours = hours;
    minutes < 10 ? includeZeroForMins = `0` + minutes : includeZeroForMins = minutes;
    secondsLeft < 10 ? includeZeroForSecs = `0` + secondsLeft : includeZeroForSecs = secondsLeft;

    return `${includeZeroForHours}:${includeZeroForMins}:${includeZeroForSecs}`;
}

export { digitalClock };