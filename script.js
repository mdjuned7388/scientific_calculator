let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        expression = expression.replace(/π/g, "Math.PI");
        expression = expression.replace(/\be\b/g, "Math.E");
        expression = expression.replace(/÷/g, "/");
        expression = expression.replace(/×/g, "*");

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

function scientific(type) {

    try {
        let value = parseFloat(display.value);

        if (isNaN(value)) {
            display.value = "Error";
            return;
        }

        switch (type) {

            case "sin":
                display.value = Math.sin(value * Math.PI / 180);
                break;

            case "cos":
                display.value = Math.cos(value * Math.PI / 180);
                break;

            case "tan":
                display.value = Math.tan(value * Math.PI / 180);
                break;

            case "sqrt":
                display.value = Math.sqrt(value);
                break;

            case "square":
                display.value = Math.pow(value, 2);
                break;

            case "log":
                display.value = Math.log10(value);
                break;

            case "ln":
                display.value = Math.log(value);
                break;

            case "factorial":
                display.value = factorial(value);
                break;
        }

    } catch (error) {
        display.value = "Error";
    }
}

function factorial(n) {

    if (n < 0 || !Number.isInteger(n)) {
        return "Error";
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}
