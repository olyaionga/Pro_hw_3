// 1.1
let a = prompt('введіть перший рядок');
let b = prompt('введіть другий рядок');
let c = prompt('введіть третій рядок');

console.log(a + c + b);

// 1.2
const number = parseInt(prompt("Введіть п'ятизначне число:"));
const digits = number.toString().split("");
let result = "";
for (let i = 0; i < digits.length; i++) {
  result += digits[i] + " ";
}
console.log(result.trim());

