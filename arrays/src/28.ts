function checkExam(arrCorrect: string[], arrSub: string[]): void {
    let counter = 0;
    arrCorrect.filter((value, index) => {

        if (value === arrSub[index]) {
            counter += 4;
        } else if (arrSub[index] === '') {
            return counter;
        } else {
            return counter--;
        }

    });

    if (counter < 0) {
        counter = 0;
    }

    console.log(counter);

}


checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]); // => 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]); // => 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]); // => 16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]); // => 0