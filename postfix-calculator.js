"use strict";
class Calculator {
    evaluate(input) {
        const parts = input.split(' ');
        let stack = [];
        for (var i of parts) {
            if (this.#isNumber(i)) {
                stack.push(Number.parseInt(i));
            }
            else {
                var result;
                if (i == "MAX") {
                    result = Math.max(...stack);
                    stack = [];
                }
                else {
                    result = this.#doOperation(i, [stack.pop(), stack.pop()]);
                }
                stack.push(result);
            }
        }
        return stack.pop();
    }
    #isNumber(i) {
        return !Number.isNaN(+i);
    }
    #doOperation(operator, [operandA, operandB]) {
        var result = 0;
        switch (operator) {
            case "+":
                result = operandB + operandA;
                break;
            case "-":
                result = operandB - operandA;
                break;
            case "*":
                result = operandB * operandA;
                break;
            case "/":
                result = operandB / operandA;
                break;
        }
        return result;
    }
}
module.exports = { Calculator }