// Завдання 1
console.log("Завдання 1:");
const a = 10;
const b = 5;
console.log(a + b, a - b, a * b, a / b);
// Завдання 2
console.log("Завдання 2:");
const firstName = "Іван";
const lastName = "Іванов";
const fullName = firstName + " " + lastName;
console.log("Привіт, " + fullName + "!");
// Завдання 3
console.log("Завдання 3:");
let age = 20;
if (age >= 18) {
    console.log("Доступ дозволено");
} else {
    console.log("Доступ заборонено");
}
// Завдання 4
console.log("Завдання 4:");
let numbersRow = "";
for (let i = 1; i <= 10; i++) {
    numbersRow += i + " ";
}
console.log(numbersRow.trim());
// Завдання 5
console.log("Завдання 5:");
function square(number) {
    return number * number;
}
console.log(square(5));
// Завдання 6
console.log("Завдання 6:");
const fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango");
console.log(fruits);