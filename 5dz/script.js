function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        case '**':
            result = Math.pow(num1, num2);
            break;
        case 'sqrt':
            if (num1 >= 0 && num2 !== 0) {
                result = Math.pow(num1, 1 / num2);
            } else {
                result = "Invalid input for square root";
            }
            break;
        default:
            result = "Invalid operation";
            break;
    }

    document.getElementById('result').innerHTML = "Result: " + result;
}
