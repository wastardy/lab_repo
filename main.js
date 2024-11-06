const numbers = [
    Number(prompt('Enter first number:')),
    Number(prompt('Enter second number:')),
];

const add = (num1, num2) => {
    let result = num1 + num2;

    alert(`Your result: ${result}`);
    console.log(`Your result: ${result}`);
}

const subtract = (num1, num2) => {
    let result = num1 - num2;

    alert(`Your result: ${result}`);
    console.log(`Your result: ${result}`);
}

add(...numbers);
subtract(...numbers);