function truncate(inputString, maxLength) {
    return inputString.slice(0, maxLength).concat("...");
}

function calcLetterA(inputString) {
    let amount = 0;
    let index = inputString.indexOf("а");
    while (index != -1) {
        amount++;
        inputString = inputString.slice(index + 1);
        index = inputString.indexOf("а");
    }
    return amount
}

function filter(inputString) {
    return inputString.replace(/xxx|polityka/g, "");
}

function filterOnlyNumbers(inputString) {
    return inputString.match(/\d+/g).join("");
}

function testFunction(input, testedFunction) {
    console.log("Input string: " + input);
    console.log("Output string: " + testedFunction(input));
}

let inputString = "abcdefg";
console.log("Input string: " + inputString);
console.log("Output string: " + truncate(inputString, 3));

testFunction("Назва Львів дана місту на честь князя Лева Даниловича, сина засновника Львова Данила Галицького.", calcLetterA);
testFunction("Difdifxxx sfoskdfpo polityka sdksdj xxx", filter);
testFunction("іва 24 уц ац34434ауку", filterOnlyNumbers);