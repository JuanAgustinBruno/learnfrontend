//ALL THE JAVASCRIPT EXAMPLES WILL BE EXECUTED FROM THIS FILE



//String template literals
console.log("String template literals");
//example 1
let product = "artichoke";
let price = 2.25;
let qty = 5;
let boughtArtichokes =`You bought ${qty} ${product}. Total is: ${price * qty}`;
console.log("Example 1:");
console.log(boughtArtichokes);

//example 2
const die1 = Math.floor(Math.random() * 6) + 1;

const die2 = Math.floor(Math.random() * 6) + 1;

let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
console.log("Example 2:");
console.log(roll);

//example 3

console.log("Example 3:");

let random = Math.random();

if (random < 0.5) {

console.log("Number is less than 0.5")

console.log(random);

} if (random>= 0.5){

console.log ("Number is greater than 0.5")

console.log (random);

}

let conditionals = "Standard built-in objects:"
console.log(conditionals.toUpperCase())

const a = 'a';
const b = 'b';
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);


//nesting


let num = 102;


if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}