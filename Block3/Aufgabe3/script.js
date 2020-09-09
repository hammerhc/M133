function fibonacci(n) {
    var number1 = 0;
    var number2 = 1;
    var result = 0;
    while (result + number1 < n) {
        result = number1 + number2;
        document.writeln(result);
        console.log(result);
        number1 = number2;
        number2 = result;
    }
}

var number1 = 0;
var number2 = 1;
var result = 0;

function fibonacciRec(n) {
    result = number1 + number2;
    document.writeln(result);
    console.log(result);
    number1 = number2;
    number2 = result;
    if (result + number1 < n) {
        fibonacci(n);
    }
}