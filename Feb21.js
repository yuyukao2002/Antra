const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(num => {
    console.log(num * 2); // Multiply each number by 2
});



const numbers2 = [1, 2, 3, 4, 5];

const doubled = numbers2.map(num => num * 2);

console.log(doubled);



const numbers3 = [1, 2, 3, 4, 5];

const evens = numbers3.filter(num => num % 2 === 0);

console.log(evens);



const numbers4 = [1, 2, 3, 4, 5];

const sum = numbers4.reduce((total, num) => total + num, 0);

console.log(sum);



const numbers5 = [1, 2, 3, 4, 5];

const firstEven = numbers5.find(num => num % 2 === 0);

console.log(firstEven);



const numbers6 = [1, 3, 5, 7, 8];

const hasEven = numbers6.some(num => num % 2 === 0);

console.log(hasEven);



const numbers7 = [2, 4, 6, 8];

const allEven = numbers7.every(num => num % 2 === 0);

console.log(allEven);



const numbers8 = [5, 3, 9, 1, 7];

numbers8.sort((a, b) => a - b); // Ascending order

console.log(numbers8);



const fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana"));



const sentence10 = "Hello world!";

const words10 = sentence10.split(" ");

console.log(words10);



const words11 = ["Hello", "world!"];

const sentence11 = words11.join(" ");

console.log(sentence11);



const text = "   Hello world!   ";

console.log(text.trim());



const person13 = { name: "Alice", age: 25 };

console.log(Object.keys(person13));



const person14 = { name: "Alice", age: 25 };

console.log(Object.values(person14));



const person15 = { name: "Alice", age: 25 };

console.log(Object.entries(person15));


