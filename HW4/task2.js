//task 1

console.log("Task 2 Task 1");
for (let i = 1; i < 10; i += 2) {
    console.log(i)
}

//task 2

let randNumber = Math.floor(Math.random() * 5) + 1;
alert("Random number: " + randNumber);
let userAgreement = confirm("Do you want to play the game?");
if (userAgreement == true) {
    for (let i = 0; i < 3; i++) {
        let userNumber = prompt("Write number");
        if (randNumber == userNumber) {
            alert("Congratulations! You are winner!");
            break;
        }
        if (i == 2) {
            alert("Today is not your day.");
        }
    }
} else {
    alert("Not today")
}