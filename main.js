const numbers = [
    Number(prompt('Enter first number:')),
    Number(prompt('Enter second number:')),
];

const add = (num1, num2) => {
    let result = num1 + num2;

    alert(`Your result: ${result}`);
    console.log(`Your result: ${result}`);
}

console.log('Entered numbers: ', ...numbers);
add(...numbers);