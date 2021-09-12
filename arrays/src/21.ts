const allVoters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
];

function voterResults(arr: any): any {
    let numYoungVotes: number = 0;
    let numYoungPeople: number = 0;
    let numMidVotesPeople: number = 0;
    let numMidsPeople: number = 0;
    let numOldsPeople: number = 0;
    let numOldVotesPeople: number = 0;

    arr.filter((person: any): void => {
        if (person.age >= 18 && person.age <= 25) {
            numYoungPeople++;
            if (person.voted) {
                numYoungVotes++;
            }
        } else if (person.age >= 26 && person.age <= 35) {
            numMidsPeople++;
            if (person.voted) {
                numMidVotesPeople++;
            }
        } else if (person.age >= 36 && person.age <= 55) {
            numOldsPeople++;
            if (person.voted) {
                numOldVotesPeople++;
            }
        }
    });
    return {
        numYoungPeople, numYoungVotes, numMidsPeople, numMidVotesPeople, numOldsPeople, numOldVotesPeople
    }

}

console.log(voterResults(allVoters)); // Returned value shown below:
 /*
 {
     numYoungVotes: 1,
     numYoungPeople: 4,
     numMidVotesPeople: 3,
     numMidsPeople: 4,
     numOldVotesPeople: 3,
     numOldsPeople: 4
 }
 */