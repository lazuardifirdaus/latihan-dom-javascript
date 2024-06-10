let calculatingInput = (input_text_1, input_text_2) => {
    let input_1 = document.getElementById(input_text_1);
    let input_2 = document.getElementById(input_text_2);
    
    let firstNumber = parseInt(input_1.value);
    let secondNumber = parseInt(input_2.value);

    let sum = firstNumber + secondNumber;

    showResult(firstNumber, secondNumber, sum); // Panggil showResult di sini
}

let showResult = (firstNumber, secondNumber, sum) => {
    let resultContainer = document.getElementById('checkResult');
    let resultText;

    
    if (sum === 0){
        alert("Inputnya tidak valid!");
        resultText = undefined;
    } else if (sum % 3 === 0 && sum % 5 === 0) {
        resultContainer.innerHTML += "<br />";
        resultText = `FizzBuzz = ${firstNumber} + ${secondNumber}`;
    } else if (sum % 3 === 0) {
        resultContainer.innerHTML += "<br />";
        resultText = `Fizz = ${firstNumber} + ${secondNumber}`;
    } else if (sum % 5 === 0) {
        resultContainer.innerHTML += "<br />";
        resultText = `Buzz = ${firstNumber} + ${secondNumber}`;
    } else {
        resultContainer.innerHTML += "<br />";
        resultText = `${firstNumber + secondNumber}`;
    }

    if (typeof resultText === 'undefined'){
        resultContainer.innerHTML = ""; // Menggunakan innerHTML untuk menampilkan hasil
    } else {
        resultContainer.innerHTML += resultText + "<br />"; // Menggunakan innerHTML untuk menampilkan hasil
    }
}
