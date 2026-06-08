// TODO: Create a multiline string using template literals
const message = `
Welcome to JavaScript ES6!
Template literals allow
multiple lines of text
without using \n.
`;

console.log(message);

// TODO: Create a function that uses template literals for HTML generation
const createUserCard = (name, age, profession) => {
    return `
        <div class="card">
            <h2>${name}</h2>
            <p>Age: ${age}</p>
            <p>Profession: ${profession}</p>
        </div>
    `;
};

console.log(createUserCard("Nhlakanipho Luthuli", 22, "Developer"));

// TODO: Convert regular functions to arrow functions

// Regular function
// function add(a, b) {
//     return a + b;
// }

// Arrow function
const add = (a, b) => a + b;

console.log(add(5, 3));

// TODO: Use arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

// map()
const doubled = numbers.map(num => num * 2);

// filter()
const evenNumbers = numbers.filter(num => num % 2 === 0);

// reduce()
const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Doubled:", doubled);
console.log("Even Numbers:", evenNumbers);
console.log("Sum:", sum);
