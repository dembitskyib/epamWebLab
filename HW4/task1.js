let primeNumbers = [];
for (let i = 2; i <= 20; i++) {
    let isPrime = true;
    for (let j = i - 1; j > 1; j--) {
        if (i % j == 0) {
            isPrime = false;
        }
    }
    if (isPrime == true) {
        primeNumbers.push(i);
    }
}
alert("Prime numbers: " + primeNumbers);