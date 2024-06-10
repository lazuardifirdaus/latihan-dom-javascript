const calculatingInput = (input_text_1, input_text_2) => {

    let input_1 = document.getElementById(input_text_1);
    let input_2 = document.getElementById(input_text_2);
    
    let firstNumber = parseInt(input_1.value);
    let secondNumber = parseInt(input_2.value);

    let sum = firstNumber + secondNumber;

    showResult(firstNumber, secondNumber, sum);
}

const showResult = (firstNumber, secondNumber, sum) => {
    if (sum % 3 === 0) {
        document.writeln(`Fizz = ${firstNumber} + ${secondNumber}`);
    } else if (sum % 5 === 0) {
        document.writeln(`Buzz = ${firstNumber} + ${secondNumber}`);
    } else if (sum % 3 === 0 && sum % 5 === 0) {
        document.writeln(`FizzBuzz = ${firstNumber} + ${secondNumber}`);
    } else {
        document.writeln(`${firstNumber + secondNumber}`);
    }
}