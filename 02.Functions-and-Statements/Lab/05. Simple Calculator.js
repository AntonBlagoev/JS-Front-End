function calculator(a, b, operator){
    
    const multiply = (a, b) => console.log(a * b);
    const divide = (a, b) => console.log(a / b);
    const add = (a, b) => console.log(a + b);
    const subtract = (a, b) => console.log(a - b);

    switch (operator) {
        case 'multiply':
            multiply(a, b);
            break;
        case 'divide':
            divide(a, b);
            break;
        case 'add':
            add(a, b);
            break;
        case 'subtract':
            subtract(a, b);
            break;
        default:
            break;
    }
}

calculator(50, 10, 'subtract');