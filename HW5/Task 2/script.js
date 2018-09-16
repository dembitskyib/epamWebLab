function findDuplicates(inputString) {
    let duplicates = [];
    while (inputString !== "") {
        let possibleDuplicate = inputString[0];
        inputString = inputString.slice(1);
        if (inputString.match(possibleDuplicate)) {
            duplicates.push(possibleDuplicate);
            regExp = new RegExp(possibleDuplicate, "g");
            inputString = inputString.replace(regExp, "");
        }
    }
    return duplicates;
}
inputString = "aabbbbcCdd  E445";
console.log("Input text: " + inputString)
console.log("Duplicates: " + findDuplicates(inputString))