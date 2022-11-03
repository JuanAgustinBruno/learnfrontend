//Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML

const { randomUUID } = require('crypto');

//HTML (HyperText Markup Language) is the most basic building block of the Web

2 + 2

//comment all selected text

shift+alt+a
ctrl+k+c
//uncomment
ctrl+k+u

// BOILERPLATE TEMPLATE HTML 

First set HTML to the language.
Then type:
​
html:5.
​
And hit Tab


//duplicate line

 to copy the line to the line above itself, press Shift + Alt + Up Arrow Key.
 to copy the line to the line below itself, press Shift + Alt + Down Arrow Key.


//creacion de una variable
let agustin = 1985;

//modificacion de una variable

agustin = agustin + 1;

agustin += 1; //manera simplificada
agustin -= 1;

agustin--;
agustin++;

//variable constante que no puede ser modificada
const pi = 3.14;

//variable antigua de javascript

var edadhoy = 36;

//variable BOOLEAN , True or False

true
false

// Strings: variables en forma de texto
let nombre = "agustin"
let apellido = "bruno";
let ciudadNacimiento = "Buenos Aires";
let sentence = "the cat is under the table";
// index y lenght de la variable (numeracion)

apellido [0] //revela el caracter que se encuentra en la numeracion solicitada

apellido.length //cantidad de caracteres que componen el string

nombre + apellido = agustinbruno //concatenation

apellido.toUpperCase = "BRUNO" //string method, da como resultado una modificacion aun string.

let apellidoMayusc = apellido.toUpperCase = "BRUNO" // modifica el string y crea una nueva variable simultaneamente, mas ej: https://www.w3schools.com/js/js_string_methods.asp

let sentence = "the cat is under the table"
sentence.slice(4 , 8) = "cat " //method + args () en este caso, corta el string hasta y desde
let newsentence = sentence.replace("cat", "dog") //---->  newsentence = "the dog is under the table"
sentence.repeat(2) //repite el numero de veces determinada por el argumento

const word = "skateboard"; 
let facialHair = word.slice(5).replace("o","e") 
"beard"
//se puede utilizar multiples methods simultaneamente para modificar una variable

//STRING TEMPLATE LITERALS
`hello ${1+2+3}` = "hello 6" // usando los "backtics" el compilador detecta el texto como java script y no como string (diferentes a los single quotes)

ej:
let product = "artichoke";
let price = 2.25;
let qty = 5;
`You bought ${qty} ${product}. Total is: ${price*qty}` = 'You bought 5 artichoke. Total is: 11.25'

Math.random() //genera un numero decimal de 0 a 0.99999999
Math.random() * 5 //genera un numero hasta la cifra que lo multiplica sin incluirlo
Math.floor(Math.random()*10) // genera un numero hasta la cifra q lo multiplica sin incluira y redondeando para abajo
Math.floor(Math.random()*10) + 1 //numero random incluido el valor que lo multiplica
Math.floor(Math.random()*3) +20 //el valor base es el que suma y el rango de numeros sera afectado por la variable que multiplica 


ej:
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6`

let roll =`You rolled a ${die1} and a ${die2}. They sum to ${die1+die2} `

'You rolled a 4 and a 4. They sum to 8 '

//LOGICA BOOLEAN
1 == "1" //igualdad sin distincion de tipo de variable
true
1 === "1" //igualdad estricta
false
1 != "1" //desigualdad sin distincion
false
1 !== "1" //desigualdad estricta
true

console.log("text");
console.error("text");
console.warn("text");


alert("text")
prompt("request entry")
let userimput = prompt("type your name") //el input se guardara en la variable

//----------------------------------------
//interaccion de JS en html file
//<!DOCTYPE html>
//<html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>javascript</title>
//   </head>
//    <body>
//        <h1>JAVASCRIPT</h1>
//        <script src="JS-HTMLinteraction.js"></script>
//    </body>
//</html>

//Las practicas continuan en JS-HTMLinteraction.js






console.log("Welcome to the practice");

let random = Math.random();
if (random < 0.5) {
    console.log("Number is less than 0.5")
    console.log(random);
}
if (random >= 0.5) {
    console.log ("Number is greater than 0.5")
    console.log (random);
} 

//multi coment shortcut "shift + alt + a"

//if

function isEven(num){
    
    if (num % 2 === 0) 
      console.log ("even");
} 

//else if

const age = 9;

if (age < 5){
    console.log("you get for free")
} else if (age< 10){
    console.log("please pay $10")
} else if (age < 65) {
    console.log("please pay $20")
}


//else
const dayOfWeek = prompt("enter a day").toLowerCase();

if (dayOfWeek === "monday") {
    console.log("i hate mondays")
} else if (dayOfWeek === "saturday"){
    console.log("i love saturdays")
} else {
    console.log("meh")
}


//ejercicio
function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
if (phrase === "stop"){
    console.log("red")
} else if (phrase ==="slow"){
    console.log("yellow")
} else if (phrase ==="go"){
    console.log("green")
} else {
    console.log("purple")
}
   
    //AND THIS LINE ↑↑↑↑↑
}

//nesting
const password = prompt("enter password");

if (password.length >=6) {
    
    if(password.indexOf(" ") === -1){
        console.log("valid password");
    } else {
        console.log("password cannot contain spaces");
    }
} else {
    console.log("password too short, must contain 6 character")
}

//ejercicio:

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 0; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
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

//logic && (and)

const password = prompt("enter your password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("valid")
} else {
    console.log("invalid")
}

//ejercicio

const mystery = 'Pleas7 '; //resuelto //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}

//logic "or" ----> ||

const age = 9;
if (age >= 0 && age < 5 || age >= 65) {
    console.log("free");
} else if (age >=5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("invalid")
}

//logical NOT "!", invierte el valor entre true or false
// !true = false or !false = true

let firstName = prompt ("enter your first name");
if (!firstName) {  //meaning entry was false or empty
    firstName = prompt("try again");
}

const age = 45;
if (!(age >= 0 && age < 5 || age >= 65)) { // ! validates the oposite logic
    console.log("you are not a baby or a senior")
}

//switch
//will search through the cases and execute when finds the variable, 
//without the break it will continue to execute the next ones until the end or a break
const day = 1;
switch (day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
    case 7:
        console.log("weekend");
    default:
        console.log("i dont know")       

}

//ARRAYS : its a data structure that colects information inside

let colors = ["red", "orange", "yellow"];
colors[0] = "red";
colors[1] = "orange";
colors[2] = "yellow"; //new items can be added 
                      //or modified writing the variable name
                      //+ the numeral of the array = the new one
                      //or just call them out with the numeral
colors[5]; //undefined
colors[pa5] = "blue"
//["red","orange","yellow", empty x 2, "blue"]
//to display an array on console just write the variable, to know length, variable.length
let lottNums = [19,22,56,12,51];

lottNums.push(5)
[19,22,56,12,51,5] //PUSH method added an element to the queue of the array
lottNums.pop();
[19,22,56,12,51] //POP method removed the last element of the array
lottNums.shift();
[22,56,12,51] //SHIFT method removed the first elemnt of the array
lottNums.unshift(76);
[79,22,56,12,51] //UNSHIFT method added a new element to the beggining of the array


//ej
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!
planets.shift(); //"The Moon" out
planets.push("Saturn"); //"Saturn" in to queue
planets.unshift("Mercury"); //"Mercury" in to start

let cats= ["blue","kitty"];
let dogs= ["rusty","wyatt"];
let comboParty = dogs.concat(cats); //CONCAT method merges arrays
comboParty 
["rusty","wyatt","blue","kitty"]
cats.includes("blue");
true
cats.includes("Blue"); //INCLUDES method display boolean condition
false

cats.indexOf("kitty") //indexOf method display the element searched (if there is not, will be -1)
1

comboParty.reverse(); //REVERSE method... backflip the queue
(4) ['kitty', 'blue', 'wyatt', 'rusty']

let colors = ["red", "orange", "yellow","green","blue","indigo","violet"];
let coolColors = colors.slice(3) //SLICE method copy and paste to the new variable from the 0 to the number between ()
coolColors
(4) ['green', 'blue', 'indigo', 'violet']
colors.slice(2,4) //SLICE from #2 to #3 
(2) ['yellow', 'green']
colors.slice(-3); //SLICE counting elements from the end
(3) ['blue', 'indigo', 'violet']

colors.splice(5,1) //(5#,1 quantity of elemnts to delete)
['indigo'] //SPLICE method, deleted 1 element from the array
colors.splice(3,0,"ambar","magenta");  //added 2 new elements starting from the #given
colors
(9) ['red', 'orange', 'yellow', 'ambar', 'magenta', 'green', 'blue', 'indigo', 'violet']

colors.sort(); //SORT method, rearanged the array using some critearia.
(9) ['ambar', 'blue', 'green', 'indigo', 'magenta', 'orange', 'red', 'violet', 'yellow']

//NESTED ARRAYS
const gameBoard = [["x","o","x"],["o","null","x"],["o","o","x"]]

gameBoard
(3) [Array(3), Array(3), Array(3)]
0: (3) ['x', 'o', 'x']
1: (3) ['o', 'null', 'x']
2: (3) ['o', 'o', 'x']
length: 3
[[Prototype]]: Array(0)

gameBoard[1] //display the array #1
(3) ['o', 'null', 'x']

gameBoard[1][1] //display the element #1 on array #1
'null'

//Exercise NESTED ARRAYS

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3].splice(1,1,"Hugo"); //located on the #3 array, executed method splice placing on the #1, deleting 1, adding new string.

airplaneSeats
(5) [Array(3), Array(3), Array(3), Array(3), Array(3)]
0: (3) ['Ruth', 'Anthony', 'Stevie']
1: (3) ['Amelia', 'Pedro', 'Maya']
2: (3) ['Xavier', 'Ananya', 'Luis']
3: (3) ['Luke', 'Hugo', 'Deniz']
4: (3) ['Rin', 'Sakura', 'Francisco']
length: 5
[[Prototype]]: Array(0)

//OBJECTS
//example:
const kitchenSink = {
    favNum: 2412442,
    material: ["metal", "ceramic"],
    warranty: true
}

const user = {name:"agustin",surename:"bruno"} //variable data enclosed with curly brackets {}

//exercise
const product = {name:"Gummy Bears",inStock:true,price:1.99,flavors:["grape","apple","cherry"]}

//extract data from objects
const years = {1999:"good", 2020:"bad"};

years["1999"]
"good"

years[1999]
"good"

const happy= {birthday:"today",newyear:"yesterday"};

happy.birthday
'today'


//EXERCISE 

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

const fullAddress = restaurant.address+ restaurant.city+ restaurant.state+ restaurant.zipcode

'90 Johnson AveBrooklynNY11206'

//MODIFYING OBJECTS

const midterms = {danielle:96, thomas:78}
midterms.thomas = 79 //modified score to 79
midterms.ezra
midterms.ezra = 60
midterms["antonio"]
midterms["antonio"] = 100
midterms
{danielle: 96, thomas: 79, ezra: 60, antonio: 100}

//OBJECTS & ARRAY NESTING

const shoppingCart= [
    {
        product: "jenga classic",
        price: 6.88,
        quantity: 1,

    }
    {
        product: "Echo Dot",
        price: 29.99,
        quantity: 3
    }
]

const student = {
    firstName: "david",
    strengths:["music","art"],
    exams: {
        midterm:92,
        final:88
    }
}

//LOOPS 

for (let num = 1; num <= 10; num += 1) { //crea variable num, si num menor o igual a 10 , num +1
    console.log(num);
}
entry-main-modern-vendor.bc3fe55a2dfdc187fb1c.js:2 1
entry-main-modern-vendor.bc3fe55a2dfdc187fb1c.js:2 2
entry-main-modern-vendor.bc3fe55a2dfdc187fb1c.js:2 3
entry-main-modern-vendor.bc3fe55a2dfdc187fb1c.js:2 4
entry-main-modern-vendor.bc3fe55a2dfdc187fb1c.js:2 5
entry-main-modern-vendor.bc3fe55a2dfdc187fb1c.js:2 6
entry-main-modern-vendor.bc3fe55a2dfdc187fb1c.js:2 7
entry-main-modern-vendor.bc3fe55a2dfdc187fb1c.js:2 8
entry-main-modern-vendor.bc3fe55a2dfdc187fb1c.js:2 9
entry-main-modern-vendor.bc3fe55a2dfdc187fb1c.js:2 10


// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}

//ejercicio looping  script
const n = 6

for (let i = 1; i <= n; i ++) {
    console.log("Da ba dee da ba daa");
}

//exercise looping from 25 to 0 

for (let i = 25; i >= 0; i -= 5 ) {
    console.log(i)
}
25
20
15
10
5
0


// INFINITE LOOP , WARNING!!

for (let i = 1; i >= 1; i ++){ 
    console.log(i);
} //cuelga el browser 

// ===================================
// ITERATING OVER ARRAYS!
// ===================================

const animals = [
    "Aardvark",
    "Aardwolf",
    "African Elephant",
    "African Tree Pangolin",
    "Alligator",
    "Alpaca",
    "Anteater",
    "Antelope",
    "Ape(s)",
    "Arabian Horse",
    "Armadillo",
    "Arthropod(s)",
    "Asian Elephant",
    "Aye-Aye"
    
]

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(animals[i])
// }

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for(let i = 0; i < people.length; i++){
    console.log(people[i].toUpperCase());
}

//NESTED LOOPS

for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log (`    j is: ${j}`)
    }
}

//WHILE LOOP

let count = 0;
while (count < 10) {
    count++;
    console.log(count)
}

const SECRET = "BabyHippo";

let guess = promt("enter the secret code...");
while (guess !== SECRET) {
    guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!")


//break

let input = prompt ("Hey, say something!")
while (true) {
    input = prompt(input);
    if (input === "stop copying me") {
        break; //cut the ploop
    }

}
console.log("OK YOU WIN!")

for (let i = 0; i < 1000; i++) {
    console.log(i);
    if (i === 100) break;
}


//exercise LOOPs

let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:")
    } else {
        guess = prompt("Too low! Enter a new guess:")
    }
}
if (guess === "q") {
    console.log ("OK, Bye")
} else {
    console.log("congrats")
    console.log(`You got it! It took you ${attempts} guesses`)
}

// FOR OF LOOP


const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
]

for (let row of airplaneSeats) {
    for (let passenger of row) {
        console.log(passenger);
    }
}

for (let char of "hello world") {
    console.log(char)
}


//EXERCISE FOR OF : use a for of loop to loop over it and print out the square number of each value

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (let quad of numbers){
    let results = Math.pow(quad,2)
    console.log(results)
    
}

// OBJECT LOOP

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72
}
for (let person in testScores) {
    console.log( ` ${person} scored ${testScores[person]}`);
}

//en consola
Object.values(testScores)
(5) [80, 67, 89, 91, 72]
Object.keys(testScores)
(5) ['keenan', 'damon', 'kim', 'shawn', 'marlon']
Object.entries(testScores)
(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
0: (2) ['keenan', 80]
1: (2) ['damon', 67]
2: (2) ['kim', 89]
3: (2) ['shawn', 91]
4: (2) ['marlon', 72]
length: 5
[[Prototype]]: Array(0)

//calcula el promedio de los valores
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log (total /scores.length)


//todo exercise 
//-------------------------------------------------------------------
let input = prompt("what would you like to do?");
const todos = ["collect chicken eggs", "clean litter"];

while (input !== "quit" && input !== "q") {
    
    if (input === "list") {
        console.log("*********")
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*********")
    
    } else if (input === "new") {
            const newTodo = prompt("what is the new todo?");
            todos.push(newTodo);
            console.log(`${newTodo} added to the list!`)

    } else if (input === "delete") {
        const index = parseInt (prompt("ok, enter an index to delete"));
        
        if (!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1);
        console.log (`ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index")
        }
    }
        
    input = prompt("what would you like to do?")
}
console.log("ok, bye")

//---------------------------------------------------------------------------

//FUNCTIONS
//defining a function

function singSong() {
    console.log("do");
    console.log("re");
    console.log("mi");
}

singSong()


//arguments

function greet(firstName){
    console.log(`Hey there, ${firstName}!`)
}

greet("Agustin")

//Exercise

function rant(message){
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
}

rant("I hate beets")

//multiple ARGUMENTS

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

greet("Luis","Alvarez");
"Hey there, Luis A."

function repeat (str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat("ja",20)
jajajajajajajajajajajajajajajajajajajaja


//exercise 37
//
function isSnakeEyes(num1,num2) {
    if (num1 == 1 && num2 == 1){
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
}
}
//aldo version

function rollDice() { return Math.floor(Math.random() * 6) +1; }

function isSnakeEyes(num1,num2) {
    if (num1 == 1 && num2 == 1){
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
        console.log(num1,num2)
 }
}

isSnakeEyes(rollDice(),rollDice());


//function RETURN

function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    }
    return x + y;
}

//exercise 38

function multiply(x,y){
    return x * y;
    }

//exercise 39

function isShortsWeather(t){
    if (t >= 75) {
        return true;
    } else {
        return false;
    }
}

//exercise 40

function lastElement(array){
    if (array[-1])
        return array
} else if {
    array = null
    console.log(null)
}
}

//FUNCTIONS LVL UP

//Lexical Scope

function bankRobbery() {
    const heroes = ["Spiderman", "Wolverine", "Black Panther"]
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`please help us, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();

}

function outer() {
    let hero = "black panther";
    function inner() {
        let cryForHelp = `${hero}, please save me!`
        console.log(cryForHelp);
    }
    inner();
}

//Exercise 44

const square = function(num){
    return Math.pow(num,2)
}

//Higher order functions

function callTwice (func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie)

function callTenTimes(f) {
    for (let i = 0; i < 10; i++)
    f()
}

callTenTimes(rollDie)

//Returning functions

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    } else {
        return Function () {
            alert("YOU HAVE BEEN INFECTED BY A VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")

        }
    }
}

//factory function

function makeBetweenFunc(min,max) {
    return function(num) {
        return num >= min && num <= max; 
    }
}

//in console
const isChild = makeBetweenFunc(0,18)
undefined
isChild(40)
false
isChild(7)
true

const isAdult = makeBetweenFunc (19,64);
const isSenior = makeBetweenFunc (65,120);

//function method to object

const myMath = {
    PI: 3.141592,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}

//in console
myMath
{PI: 3.141592, square: ƒ, cube: ƒ}
myMath.square(2)
4
myMath.square(myMath.PI)
9.869600294464002
myMath.cube(3)
27

// exercise 45 

const square = {
    area: function (num) {
        return num * num;
    },
    perimeter: function (num) {
        return num * 4;
    },

}

//keyword THIS

const cat = {
    name: "Blue Steele",
    color: "grey",
    breed: "scottish fold",
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWWW`);
    }
}

//in console

cat.meow()
THIS IS: {name: 'Blue Steele', color: 'grey', breed: 'scottish fold', meow: ƒ}
Blue Steele says MEOWWWWW

//exercise 46
//mi intento
const hen = {
    name: "Helen",
    eggcount: 0 ,
    layAnEgg() {
        return (`${this.eggcount + 1}  EGG`)
    }
}

//respuesta correcta

const hen = {
    name: "Helen",
    eggCount: 0 ,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}


// TRY & CATCH : used to detect possible errors in the code

try {
    hello.toUpperCase();
} catch { 
    console.log("error!")
}

function yell(msg){
    try {
    console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("type a string")
    } 
}

//en consola
yell()
test.js:5 TypeError: Cannot read properties of undefined (reading 'toUpperCase')
    at yell (test.js:3:21)
    at <anonymous>:1:1
test.js:6 type a string


//FOR EACH

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

numbers.forEach(function(el){
    if (el % 2 === 0) {
    console.log(el)
    }
})

const movies = [
    {
        title: "amadeus",
        score: 99
    },
    {
        title: "stand by me",
        score: 85
    },
    {
        title: "parasite",
        score: 95
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})


// MAP (call back from an array to create a new array)

const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map( function (t){
    return t.toUpperCase();
})
['ROFL', 'LOL', 'OMG', 'TTYL']

exercise: 47

const firstNames = fullNames.map(function(n){
    return n.first;
})

//Arrow functions

const add = (x, y) => {
    return x + y;
}

const square = num => {
    return num * num;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) +1
}


exercise: 48

const greet = (name) => {
    return (`Hey ${name}!`);
}
//implicit return in arrow function

const add = (a, b) => a + b

const rollDie = () => (
    Math.floor(Math.random() * 6) +1
)

// setTimeout setInterval

console.log ("hello!..")
setTimeout(() => {
    console.log("..are you still there?")
}, 3000)
console.log("goodbye!")

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

//clearInterval(id); <------ stops the process of interval.

//filter

const movies = [
    {
        title: "amadeus",
        score: 99,
        year: 2000,
    },
    {
        title: "stand by me",
        score: 85,
        year: 2001,
    },
    {
        title: "parasite",
        score: 95,
        year: 1999,
    }
]

const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)

movies.filter(m => m.score > 80).map(m => m.title);
const badMovies = movies.filter(m => m.score < 70)

const recentMovies = movies.filter(m => m.year > 2000)

exercise: 49

function validUserNames(usernames) {
    // your code here
      let shortuser = usernames.filter(usernames => usernames.length < 10);
      return shortuser;
      
  }

//SOME & EVERY (returns bolean, true or false)

const words = ["dog", "jello", "log"];

words.some(word => {
    return word.length > 4;
})

//true 

words.every(word =>[0] === "d");

//false

 exercise: 50

 function allEvens (array) {
    if (
    array.every(array => array %2 === 0)
    ) 
    {
    return true; 
        
    } else {
        return false;
    }
} 

//REDUCE (executes a reducer function on each element of the array, resulting in a single value)

const numbers = [3,5,7,9,11]
const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}); //sum all the values into total
const minNum = numbers.reduce((min, number) => {
    if (number < min) {
        return number
    }
    return min;
}) //search the smaller number of the array

//Keyword THIS

const person = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        },3000)
    }
}

person.shoutName()
undefined
test.js:9 {firstName: 'Viggo', lastName: 'Mortensen', fullName: ƒ, shoutName: ƒ}
test.js:10 Viggo Mortensen

//Default parameters

function rollDie(numSides = 6) {
    return Math.floor(Math.random()  * numSides) +1
}

rollDie()
4
rollDie(20)
16

function greet(person, msg = "hey there", punc = "!") {
    console.log(`${msg},${person}${punc}`)
}

greet("agustin")
test.js:2 hey there,agustin!

//Spread (separates elements inside an object, array , string)

const nums = [1, 2, 3 , 4, 5]

console.log(...nums)
1 2 3 4 5 

console.log(..."hello")
h e l l o


//spread with array literals

const cats = ["blue", "scout", "rocket"];
const dogs = ["rusty", "wyatt"];

const allPets = [...cats, ... dogs];
(5) ['blue', 'scout', 'rocket', 'rusty', 'wyatt']

[..."hello"]
(5) ['h', 'e', 'l', 'l', 'o']

//spread objects

const dataFromForm = {
    email: "blueman@gmail.com",
    password: "tobias123!",
    username: "tfunke"
}
const newUser = {...dataFromForm, id: 2345, isAdmin: false}

newUser
{email: 'blueman@gmail.com', password: 'tobias123!', username: 'tfunke', id: 2345, isAdmin: false}
email: "blueman@gmail.com"
id: 2345
isAdmin: false
password: "tobias123!"
username: "tfunke"

//rest

function raceResults(gold, silver, ...everyoneElse){
    console.log(`Gold medal: ${gold}`)
    console.log(`silver medal: ${silver}`)
    console.log(`everyone else: ${everyoneElse}`)
}
raceResults("ala", "pala", "mala", "tala", "sala")
test.js:2 Gold medal: ala
test.js:3 silver medal: pala
test.js:4 everyone else: mala,tala,sala

function sum(...nums){
    console.log(nums)
    return nums.reduce((total, el) => total + el)
}   

sum(1,2,3,4)
test.js:2 (4) [1, 2, 3, 4]0: 11: 22: 33: 4length: 4[[Prototype]]: Array(0)
10

//destructuring arrays

const scores = [ 199, 188, 177, 166, 155, 144]
const highScore= scores[0];
const secondHigh= scores[1];
const [gold, silver, bronze, ...everyoneElse] = scores;

scores
(6) [199, 188, 177, 166, 155, 144]
highScore
199
secondHigh
188
bronze
177
silver
188
gold
199
everyoneElse
(3) [166, 155, 144]

//destructuring objects

const user = {
    email: "harvey@gmail.com",
    password: "scott194smith",
    firstName: "Harvey",
    lastName: "Milk",
    born: 1930,
    died: 1978,
    bio:"gay politician",
    city:"san francisco",
    state: "california"
}
const { email, firstName, lastName, city, bio} = user;

email
'harvey@gmail.com'
city
'san francisco'
bio
'gay politician'

const { born: birthYear} = user;

birthYear
1930

//destructuring parameters
function fullName(user){
    return `${user.firstName} ${user.lastName}`
}
function fullName(user) {
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`
}
//destructured
function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}

fullName(user)
'Harvey Milk'


//destructuring example
const movies = [
    {
        title: "amadeus",
        score: 99,
        year:1999
    },
    {
        title: "stand by me",
        score: 85,
        year: 1983
    },
    {
        title: "parasite",
        score: 95,
        year: 1955
    }
]

movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})
//destructured
movies.map(({title, score, year}) => {
    return `${title} (${year}) is rated ${score}`
})

(3) ['amadeus (1999) is rated 99', 'stand by me (1983) is rated 85', 'parasite (1955) is rated 95']

//  DOM , Document Object Model

 //on console

 window  =  "represents the browser's window"
 document = "document object is the owner of all other objects in your web page."
 console.dir(document) = " displays an interactive list of the properties of the document"
 document.all = "returns all of the document's elements, accessible by order (like an array) and by ID (like a regular object)."

  //selecting

  getElementById()
  getElementsByTagName()
  getElementsByClassName()
1
  const example = document.getElementById("example")
  console.dir(example)

  const allImage = document.getElementsByTagName("img");
  const allDiv = document.getElementsByTagName("div");

  <img class="square"...></img> ;
  const squares = document.getElementsByClassName("squares");


//querySelector: 

//selects the first match.
//with nth-of-type() selects specific.


document.querySelector("h1")  //element
document.querySelector("#banner") //id
document.querySelector(".square") //class
document.querySelector("img:nth-of-type(2)")
document.querySelector("a")
document.querySelector("input[type="text"]")

//querySelectorAll:

document.querySelectorAll("p") //all elements of this type

const links = document.querySelectorAll("p a") //selects all a inside p
for (let link of links) {
    console.log(link.href) //prints all links on console

}

document.querySelector("html") = document.all

//innerHTML , textContent , innerText

//textContent gets the content of all elements, including <script> and <style> elements

//innerText only shows "human-readable" elements  and won't return the text of "hidden" elements.

//innerHTML gets or sets the HTML or XML markup contained within the element.
//To insert the HTML into the document rather than replace the contents of an element, use the method insertAdjacentHTML()
example: 
document.querySelector("h1").innerHTML = "<i>asdasd</i>"

//innerText (text modified)
document.querySelector("span").innerText = "Disgusting"

//personal attempt exercise 53
const span = document.getElementById("span");
span.textContent = "Disgusting";

console.log("hola");
}

changeText()   






//querySelector Practice
const doneTodos = document.querySelectorAll(".done")
const checkbox = document.querySelector("#scales")



//attributes

document.querySelector("a").href 
document.querySelector("a").id = "asdasd"
document.querySelector("a").src

const rdLink = document.querySelector("a:nth-of-type(3)");
rdLink.href //gets attribute from the javascript file
'https://en.wikipedia.org/wiki/Chooks_(disambiguation)'
rdLink.getAttribute("href") //gets attribute from inside the HTML tag
'/wiki/Chooks_(disambiguation)'

rdLink.setAttribute("href", "http://www.google.com") //modified on the html markup

const input = document.querySelector("input[type="text"]")
input.type
"text"
input.type="password"
"password"
input.type="color"
"color" //color picker

//exercise 54

const chicken = document.querySelector("img");
chicken.src= 'https://devsprouthosting.com/images/chicken.jpg';
chicken.setAttribute("alt","chicken");

//change style (on console)

const h1 = document.querySelector("h1");

h1.style.color ="green"
h1.style.fontSize = "3em"
h1.style.border = "2px solid"


window.getComputedStyle(h1).marginLeft //returns css style declaration

//Remember to use camelCased property names in JavaScript! (backgroundColor, not background-color, etc.)

//on javascript doc

const allLinks = document.querySelectorAll("a");
for (let link of allLinks) {
    link.style.color = "cyan"
}
 
//exercise 55

const container = document.querySelector("#container");
container.style.textAlign = "center";
const img = document.querySelector("img");
img.style.width = "150px";
img.style.borderRadius = "50%";


//exercise 56
const spans = document.querySelectorAll("h1 span");
//solution 1

for (let i = 0; i < spans.length; i++) {
    spans[i].style.color= colors[i];
}

//solution 2 (dont work on the platform)

spans.forEach((span, index) => {
    span.style.color = colors[index]
}
)

//solution 3

let i = 0;
for (const span of spans) {
    span.style.color = colors[i];
    i++;
}


//ClassList (console)


const h2 = document.querySelector("h2");

h2.classList //displays DOMTokenList of selection

h2.getAttribute("class")
h2.setAttribute("class", "nameOfTheClass")

//adds new class, instead of replacing

let currentClasses = h2.getAttribute("class")
currentClasses
"border"

h2.setAttribute("class", `${currentClasses} purple`) 



//class method
h2.classList.add("purple") //apply an existing class to the selected element.
h2.classList.add("border") //class can be added without replacing current ones

h2.classList.remove("border") //removes the specified class


h2.classList.toggle("purple") //swiches from true and false

//exercise 57
//solution 1
const lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
    if (lis[i].classList.contains("highlight")){
        lis[i].classList.remove("highlight");
    } else {
        lis[i].classList.add("highlight");
    }
}

//solution 2

const lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
    lis[i].classList.toggle("highlight")
}

//solution 3

lis.forEach(li => {
    li.classList.toggle("highlight")
})

//solution 4

for (const li of lis) {
    li.classList.toggle("highlight")
}


// traversing parent child sibiling

const firstBold = document.querySelector("b")

firstBold.parentElement
// <p>...</p> displays the parent element of the bold element selected with the querySelector

const paragraph = firstBold.parentElement
paragraph.children
//HTMLCollection(8) [b,b,a,a,a,a] displays the collection of childrens under that element
paragraph.children[0]
//<b>Silkie</b>

//squareImg.nextSibiling //displays the inmediate content after the element, including blank space, represented as a #text
//squareImg.previousSibiling the //inmediate content before the element
//squareImg.nextElementSibiling //displays the inmediate Element after it
//squareImg.previousElementSibiling //the inmediate element before


//append 

//adding new content to the docume t
document.createElement("img")
const newImg = document.createElement("img")
newImg.src= "www.link.com/photo"
document.body.appendChild(newImg)

const newH3 = document.createElement("h3") //creates a new element
newH3.innerText = "I am new" //add content to the element
document.body.appendChild(newH3) //adds the element to the document

const p = document.querySelector("p")
p.append ("i am new text")

//prepend
const newB = document.createElement("b")
newB.append("hi")
newB
//<b>hi</b>
p.prepend(newB) //sends the element to the beginning of the text or section

// positioning
const h2 = document.createElement("h2") //create a new element
h2.append("lalala") //asign content
const h1 = document.querySelector("h1") //create a variable containing the specified selection

h1.insertAdjacentElement("afterend", "h2") //place the h2 after the selected h1
//other options
"beforebegin"
"afterbegin"
"beforeend"

const h3 = document.createElement ("h3") //creates
h3.innerText = "I am h3"; //add text
h1.after(h3) //place it after the h1

//exercise 58

const containerDiv = document.querySelector("#container")

for (let i = 0; i < 100; i++) {
    const button = document.createElement("button");
    button.innerText = "Hey!";
    containerDiv.appendChild(button);
}

//removeChild

const firstLi = document.querySelector("li");

const ul = firstLi.parentElement;

ul.removeChild(firstLi);


const li = document.querySelector("li");
li.parentElement.removeChild(li);


//remove 

const img = document.querySelector("img")
img.remove()

// other variant

img.parentElement.removeChild(img)

//pokemon example

const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


for (let i = 1; i < 151; i++) {
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");
    const label = document.createElement("span");
    label.innerText = `#${i}`;
    const newImg = document.createElement("img");
    newImg.src = `${baseURL}${i}.png`
    
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)

}

//EVENTS (user interaction) 

// https://developer.mozilla.org/en-US/docs/Web/API/element
// https://developer.mozilla.org/en-US/docs/Web/events

//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

//inline events
//exercise 59

<h1 onclick= "console.log('boo');">Inline Events Suck...</h1>
<button onclick= "console.log('clicked');" id="btn">Click Me</button>



//on click
    
    //html

/* <!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Document</title>
</head>
<body>
    <h1>events</h1>
    <button id="v2">click me</button>
    <button id="v3">click me 3</button>
    <button id="tas">twist & shout</button>

    <script src="test.js"></script>    

    <button onclick="alert('you clicked'); alert('stop')"> click </button>  //inline example on the html

</body>

</html> */
    
    {/* //javascript */}

const btn = document.querySelector("#v2")
btn.onclick = function () {
    console.log("you clicked me")
    console.log("i hope it worked")
}
    {/* //onmouseenter */}

function scream() {
    console.log("aaah");
    console.log("stop touching me");

}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
    alert("you ckicked the h1")
}

//addEventListener

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function(){
    alert("clicked")
})

function twist() {
    console.log("twist")
}

function shout() {
    console.log("shout")
}

const tasButton = document.querySelector ("#tas");
tasButton.addEventListener("click",twist { once: true }) //will run just 1 time
tasButton.addEventListener("click",shout)


//exercise 60

const hi = document.querySelector("#hello");
const bye = document.querySelector("#goodbye");


hi.addEventListener("click", function(){ 
    console.log("hello")});
        
bye.addEventListener("click", function(){
    console.log("goodbye")});


{/* // Random color */}

/* <body>
    <h1>hi</h1>
    <button>Click</button>


    <script src="test.js"></script>    

</body> */



const button = document.querySelector("button");
const h1 = document.querySelector("h1");


button.addEventListener("click", function(){
    
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})




{/* //independent function for make new color */}



button.addEventListener("click", function(){
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return  `rgb(${r}, ${g}, ${b})`;
}


{/* /*  EVENTS KEYWORD THIS */ */}




/* <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Colors</title>
    <style>
        button {
            width: 100px;
            height: 100px;
            margin: 20px;
        }
    </style>
</head>
<body>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>
    <button>Click</button>


    <script src="test.js"></script>     */



const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return  `rgb(${r}, ${g}, ${b})`;
}




/* 
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener( "click" , function () {
        button.style.backgroundColor = makeRandomColor();
        button.style.color = makeRandomColor();
    }) 
}


const h1s = document.querySelectorAll("h1");
for (let h1 of h1s) {
    h1.addEventListener("click", function() {
        h1.style.backgroundColor = makeRandomColor();
        h1.style.color = makeRandomColor();
    })
} */


// KEYWORD THIS

const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener( "click" ,colorize)
}

const h1s = document.querySelectorAll("h1");
for (let h1 of h1s) {
    h1.addEventListener("click", colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}

//keyboard events


document.querySelector("button").addEventListener("click", function(evt){
    console.log(evt)
})

const input = document.querySelector("input");
input.addEventListener("keydown", function(e) {
    console.log(e.key)
    console.log(e.code)
})

/* input.addEventListener("keyup", function() {
    console.log("KEYUP")
}) */

/* 
window.addEventListener("keydown", function (e) {
    console.log(e.code)
}) */

window.addEventListener("keydown", function (e) {
    switch (e.code){
        case "ArrowUp":   
            console.log("up")
            break;
        case "ArrowDown":   
            console.log("down")
            break;
        case "ArrowLeft":   
            console.log("left")
            break;
        case "ArrowRight":   
            console.log("right")
            break;
        default:
            console.log("ignored")
    }
})


//form events prevent default

const form = document.querySelector("#shelterForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submitted")
})

/* 
<h1>form</h1>
    <form action="/shelter" id="shelterForm">
        <input type="text" />
        <button>Submit</button>
    </form>   */


//PRACTICE with FORM EVENTS


/* 
    <h1>form</h1>
    <form action="/shelter" id="shelterForm">
        <input type="text" id="catName">
        <button>Submit</button>
    </form>   
    <h2>Available Cats</h2>
    <ul id="cats"></ul> 
*/

    const form = document.querySelector("#shelterForm");
    const input = document.querySelector("#catName");
    const list = document.querySelector("#cats");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log(input.value) 
        
        const catName = input.value;
        const newLI = document.createElement("LI");
        newLI.innerText = catName;
        list.append(newLI);
    
    })
    
//PRACTICE FORM EVENTS OLD VERSION RESET INPUT

/*
<h1>form</h1>
<form action="/tweetpage" id="tweetForm">
    <input type="text" name="username" placeholder="username">
    <input type="text" name="tweet" placeholder="tweet">
    <button>Submit</button>
</form>   
<h2>tweets</h2>
<ul id="tweets"></ul>
<script src="test.js"></script> 
*/




//EXERCISE 61
//My attepmt (not working on udemy)
{/* 
<h1>Grocery List</h1>
    <form action="/nowhere" id="grocery">
        <label for="item">Enter A Product</label>
        <input type="text" id="product" name="product">
        <label for="item">Enter A Quantity</label>
        <input type="number" id="qty" name="qty">
        <button>Submit</button>
    </form>

    <ul id="list"></ul>
*/}
const groceryForm = document.querySelector("#grocery");

const groceryContainer = document.querySelector("#list");

groceryForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const productInput = groceryForm.elements.product;
    const qtyInput = groceryForm.elements.qty;

    addProduct(productInput.value, qtyInput.value);
    productInput.value = "";
    qtyInput.value = "";
})

const addProduct = (product, qty) => {
    const newProduct = document.createElement("li");
    newProduct.append(product," ", qty);
    groceryContainer.append(newProduct);
};

//youtube solution workinng on udemy

const form = document.querySelector('form');
const ul = document.querySelector("#list")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const quantity = document.querySelector("#qty");
    const product = document.querySelector("#product");

    const li = document.createElement("li")
    li.innerText= `${quantity.value} ${product.value}`

    ul.appendChild(li);

    quantity.value = "";
    product.value = "";
})


//input & change events 

/* 
<h1></h1>
<input type="text"></input>
 */

const input = document.querySelector("input")
const h1 = document.querySelector("h1")

input.addEventListener("input", function (e) { //input event
    h1.innerText = input.value; //will update h1 as soon as its typed down
    console.log("input event")
    console.log(e)
})

//exercise 62

const h1 = document.querySelector("h1");
const input = document.querySelector("input");

input.addEventListener("input", (e) => {
    if (e.target.value === "") {
        h1.innerText = "Enter Your Username"
    } else {
        h1.innerText = `Welcome, ${e.target.value}`
    }
})

//event bubbling 

const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", function() {
    container.style.backgroundColor = makeRandomColor();
    e.stopPropagation(); //will stop bubbling effect on events
})

container.addEventListener("click", function() {
    container.classList.toggle("hide"); //will hide the element
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return  `rgb(${r}, ${g}, ${b})`;
}

//event delegation

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets")
tweetForm.addEventListener("submit", function (e) {  
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = "";
    tweetInput.value = "";
})

    const addTweet = (username, tweet) => {
        const newTweet = document.createElement("li");
        const bTag = document.createElement("b");
        bTag.append(username);
        newTweet.append(bTag);
        newTweet.append(` - ${tweet}`);
        tweetsContainer.append(newTweet);
    }

tweetsContainer.addEventListener("click", function (e) {
    e.target.nodeName === "LI" && e.target.remove();  //will remove only "li" elements
})

//score keeper

//base html

/* <h1><span id="p1Display">0</span> to <span id="p2Display">0</span></h1>
<select name="" id="playto">
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    
</select>
<button id="p1Button">+1 Player One</button>
<button id="p2Button">+1 Player Two</button>
<button id="resetButton">Reset</button> */

//html modified with bulma

/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Score Keeper</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
    
    <style>
        .winner {
            color: green;
        }
        .loser {
            color: red;
        }
    </style>
</head>
<body>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-2by1">
                                <img src="data:image/jpeg;base64,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" alt="">
                            </figure>
                        </div>
                        <header class="card-header">
                        <p class="card-header-title">
                            Ping pong score keeper
                        </p>
                        
                        </header>
                        <div class="card-content">
                        <div class="content">
                            <h1 class="title is-1"><span id="p1Display">0</span> to <span id="p2Display">0</span></h1>
                            <p class="subtitle"> Use the buttons below to keep score</p>
                            
                            <label for="playto" class="label is-large is-inline">Playing to</label>
                            <div class="select is-rounded">
                                <select name="" id="playto">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                    <option value="30">30</option>
                                    
                                </select>
                            </div>
                            </div>
                        </div>
                        <footer class="card-footer">
                        <!-- button.is-primary.button.card-footer-item -->
                        <button id="p1Button" class="is-primary button card-footer-item"> Player 1</button>
                        <button id="p2Button" class="is-info button card-footer-item"> Player 2</button>
                        <button id="resetButton" class="is-danger button card-footer-item"> Reset</button>
                        
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="test.js"></script>
</body>
</html> */


// javascript

const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;


p1Button.addEventListener("click", function(){
    if (!isGameOver){
        p1Score += 1;
        if (p1Score === winningScore) {
                isGameOver = true;
                p1Display.classList.add("winner");
                p2Display.classList.add("loser");
                p1Button.disabled = true;
                p2Button.disabled = true;
            }
            p1Display.textContent = p1Score
    }   
})

p2Button.addEventListener("click", function(){
    if (!isGameOver){
        p2Score += 1;
        if (p2Score === winningScore) {
                isGameOver = true;
                p2Display.classList.add("winner");
                p1Display.classList.add("loser");
                p1Button.disabled = true;
                p2Button.disabled = true;

            }
            p2Display.textContent = p2Score
    }   
})

winningScoreSelect.addEventListener("change", function (){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener("click", reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("winner", "loser");
    p1Button.disabled = false;
    p2Button.disabled = false;
}


//ASYNC

//callstack: is the queue where the processes get stacked and executed 1 by 1, since javascript can just run 1 process at the time.
//simultaneous operations are handled by timeout settings that organize the process.

//callback

setTimeout(() => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "orange";
        setTimeout(() => {
            document.body.style.backgroundColor = "yellow";
        }, 1000)
    }, 1000)
}, 1000)


//------------------------------------------------

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange("red", 1000, () => {
    delayedColorChange("orange", 1000, () => {
        delayedColorChange("yellow", 1000, () => {
            delayedColorChange("green", 1000, () => {
                delayedColorChange("blue", 1000, () => {
               
                })
            })
        })
    })
})


//NESTED PROMISES


//callback

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

 fakeRequestCallback('books.com/page1',
     function (response) {
         console.log("IT WORKED!!!!")
         console.log(response)
         fakeRequestCallback('books.com/page2',
             function (response) {
                 console.log("IT WORKED AGAIN!!!!")
                 console.log(response)
                 fakeRequestCallback('books.com/page3',
                     function (response) {
                         console.log("IT WORKED AGAIN (3rd req)!!!!")
                         console.log(response)
                     },
                     function (err) {
                         console.log("ERROR (3rd req)!!!", err)
                     })
             },
             function (err) {
                 console.log("ERROR (2nd req)!!!", err)
             })
     }, function (err) {
         console.log("ERROR!!!", err)
     })

//promise


const fakeRequestPromise = (url) => {
    return new Promise (resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) +500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout :(") 
            } else {
                resolve(`here is your fake data from ${url}`)
            }
        }, delay)
    })
}


//The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.

 fakeRequestPromise('yelp.com/api/coffee/page1')
     .then(() => {
         console.log("IT WORKED!!!!!! (page1)")
         fakeRequestPromise('yelp.com/api/coffee/page2')
             .then(() => {
                 console.log("IT WORKED!!!!!! (page2)")
                 fakeRequestPromise('yelp.com/api/coffee/page3')
                     .then(() => {
                         console.log("IT WORKED!!!!!! (page3)")
                     })
                     .catch(() => {
                         console.log("OH NO, ERROR!!! (page3)")
                     })
             })
             .catch(() => {
                 console.log("OH NO, ERROR!!! (page2)")
             })
     })
     .catch(() => {
         console.log("OH NO, ERROR!!! (page1)")
     })



// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })


    //new promises

    new Promise((resolve, reject) => {
        resolve();
    })


    //example 2
    const fakeRequest = (url) => {
        return new Promise((resolve, reject) => {
            const rand = Math.random();
            setTimeout(() => {
                if(rand < 0.7){
                    resolve("ok");
                }
                reject("error");
            },1000)
        })
    }
    fakeRequest("/dogs/1")
        .then(() => {
            console.log("done")
        })
    


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7) {
                resolve("fake data"); // <----- doesnt work
            }
            reject("Request error");
        },1000)
    })
}
fakeRequest("/dogs/1")
    .then(() => {
        console.log("done with request")
        console.log("data is:", data)
    })
    .catch((err) => {
        console.log("oh no", err)
    })

//other example

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7) {
                resolve("fake data"); // <----- doesnt work
            }
            reject("Request error");
        },1000)
    })
}
fakeRequest("/dogs/1")
    .then(() => {
        console.log("done with request")
        console.log("data is:", data)
    })
    .catch((err) => {
        console.log("oh no", err)
    })

//
//colour example promise

const delayedColorChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange("red, 1000")
    .then(() => delayedColorChange ("orange", 1000))
    .then(() => delayedColorChange ("yellow", 1000))
    .then(() => delayedColorChange ("green", 1000))
    .then(() => delayedColorChange ("blue", 1000))
    .then(() => delayedColorChange ("blue", 1000))
    .then(() => delayedColorChange ("violet", 1000))


    //async promise

    async function hello() {

    } 

    const sign = async () => {
        throw "oh no, problem"
        return "lalala"
    }

    sign()
        .then(data => {
            console.log("promise resolved with:", data)
        })
        .catch(err => {
            console.log("oh no, promise rejected")
            console.log(err)
        })

// login example

const login = async (username, password) => {
    if (!username || !password) throw "missing credentials"
    if (password === "corgifeetaerecute") return "welcome"
    throw "invalid password"
}

login("akjsdhsa", "corgifeetarecute")
    .then(msg => {
        console.log("logged in")
        console.log(msg)
    })
    .catch(err => {
        console.log("error")
        console.log(err)
    })


//AWAIT keyword

async function rainbow () {
    await delayedColorChange("red", 1000)
    await delayedColorChange("orange", 1000)
    await delayedColorChange("yellow", 1000)
    await delayedColorChange("green", 1000)
    await delayedColorChange("blue", 1000)
    await delayedColorChange("indigo", 1000)
    await delayedColorChange("violet", 1000)
    return "all done"
}

rainbow().then(() => console.log("end of rainbow"))


//await fake request example

const fakeRequest = (url) => {
    return new Promise ((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("conection timeout :(")
        } else {
            resolve(`here is your fake data from ${url}`)
        }
        }, delay)
    })
}

async function makeTwoRequests(){
    let data1 = await fakeRequest("/page1");
    console.log(data1);
}

//handling errors in async functions

async function makeTwoRequests(){
    try {
        let data1 = await fakeRequest("/page1");
        console.log(data1);
        let data2 = await fakeRequest("/page2");
        console.log(data2);
    } catch (e) {
        console.log("caught an error")
        console.log("error is:", e)
    }
}

makeTwoRequests()
Promise {<pending>}
test.js:17 here is your fake data from /page1
test.js:21 caught an error
test.js:22 error is: conection timeout :(
</pending>

//ajax = async java script and xml
//making request on a page that is already loaded

//api = Application Programming Interface (data intermediate app witch sends a json string to convert into javascript)
api.cryptonator.com/api/ticker/btc-usd

//JSON = java script object notation (object style data)

//JavaScript has a built in function for converting JSON strings into JavaScript objects:

const data = '{"ticker":{"base":"BTC","target":"USD","price":"43820.11439748","volume":"21624.75737334","change":"208.49573222"},"timestamp":1649405165,"success":true,"error":""}'

JSON.parse(data)

{ticker: {…}, timestamp: 1649405165, success: true, error: ''}
error: ""
success: true
ticker:
base: "BTC"
change: "208.49573222"
price: "43820.11439748"
target: "USD"
volume: "21624.75737334"
[[Prototype]]: Object
timestamp: 1649405165
[[Prototype]]: Object


//JavaScript also has a built in function for converting an object into a JSON string:

JSON.stringify()

const kitchenSink = {favNum: 2412442,material: ["metal", "ceramic"],warra

JSON.stringify(kitchenSink)
'{"favNum":2412442,"material":["metal","ceramic"],"warranty":true}'

//Postman (app for testing api requests)
//https://www.postman.com/downloads/
//https://hoppscotch.io/ru (opensource alternative)
//https://swapi.dev/
//https://catfact.ninja/



//HTTP request methods
CONNECT
DELETE
GET
HEAD
OPTIONS
PATCH
POST
PUT
TRACE

//HTTP STATUS CODES
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

//MAKING XHRs 

const req = new XMLHttpRequest();

req.onload = function () {
    console.log("it loaded");
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.name , data.height);
    console.log(this);
};

req.onerror = function () {
    console.log("error");
    console.log(this);
}

req.open("get", "https://swapi.dev/api/people/1/");
req.send();

//FETCH
    
fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("resolved", res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("error", e);
    })


//other example for fetch with async

    const loadStarWarsPeople = async () => {
        try {
            const res = await fetch("https://swapi.dev/api/people/1/");
            const data = await res.json();
            console.log(data);
            const res2 = await fetch("https://swapi.dev/api/people/2/");
            const data2 = await res2.json();
            console.log(data2);
        } catch (error) {
            console.log("error", e);
        }
    };
    loadStarWarsPeople();
    
    //ctrl + shift + p ---> surround with snipet try catch

    //AXIOS (not native javascript requests)
    //library to include in the html

    https://github.com/axios/axios#installing

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

axios.get("https://swapi.dev/api/people/1/").then((res) => {
    console.log("response: ",res);
})
.catch(e => {
    console.log("error", e);
});




const getStarWarsPerson = async (id) => {
    try {  
      const res = await axios.get(`http://swapi.dev/api/people/${id}/`);
      console.log(res.data);
    } catch (e) {
        console.log("error",e);
    }
  };
  
  getStarWarsPerson(5);
  getStarWarsPerson(10);



{/* <h1>hi</h1>
    <button>Click me!</button>
    <ul id="jokes"></ul>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="test.js"></script> */}



  const jokes = document.querySelector("#jokes");
  const button = document.querySelector("button");
  
  
  const addNewJoke = async () => {
      const jokeText = await getDadJoke();
      const newLI = document.createElement("LI");
      newLI.append(jokeText);
      jokes.append(newLI)
  }
  
  
  const getDadJoke = async () => {
      try {
          const config = { headers: { Accept: "application/json" } }
          const res = await axios.get("https://icanhazdadjoke.com/", config)
          return res.data.joke;
      } catch (e) {
          return "no jokes available"
      }
  
  } 
  button.addEventListener("click", addNewJoke)



//TV SHOW practice

{/* <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

</head>
<body>
    <h1>TV show search</h1>
    <form id="searchForm">
        <input type="text" placeholder="TV show title" name="query">
        <button>Search</button>
    </form>
    
    
    <script src="test.js"></script> */}



const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = "";
})

const makeImages = (shows) => {
    for (let result of shows) {
        if(result.show.image){
            const img = document.createElement("IMG");
            img.src = result.show.image.medium
            document.body.append(img)
        }
        
    }
}

//OBJECT ORIENTED PROGRAMING

//PROTOTYPES

Array.prototype
String.prototype

//Add a method/function into an array

const arr = [1,2,3]

arr.sing = function() {console.log("lalala")} //assign new function/prototype to the array 



String.prototype.yell = function () {
    return `omg ${this.toUpperCase()} asdf`
};

"cat".yell()
'omg CAT asdf'


Array.prototype.pop = function() {
    return "sorry i wont give u that info";
};

[1,2,3].pop()
'sorry i wont give u that info'

//factory function

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {
        const { r, g, b} = this;
        return          
        '#' + ((1 << 24) + (r << 16) + (h << 8) + b) .toString(16).slice(1);
        
    };
    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex();


//constructor function

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const { r, g, b} = this;
    return
};
Color.prototype.hex = function () {
    const { r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b) .toString(16).slice(1);
    
};
Color.prototype.rgba = function (a=1.0) {
    const { r, g, b} = this;
    return `rgba(${r}, ${g}, ${a})`
}



const Color1 = new Color(40,50,60);
Color {r: 40, g: 50, b: 60}
b: 60
g: 50
r: 40
[[Prototype]]: Object

Color1.hex()
'#28323c'



//CLASS
//constructor

//example 1:
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
var userOne= new User("ryu@ninjas.com", "Ryu");
var userTwo= new User("yoshi@mariokorp.com", "Yoshi");


//example 2:

class Color {
    constructor(r,g,b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const { r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb(){
        return  `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return  `rgba(${this.innerRGB()}, ${a})`;
    }
}
const c1 = new Color(255,67,89, "tomato");

//EXTENDS AND SUPER KEYWORDS

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(){ //functionality
        return `${this.name} is eating`;
    }
}

class Cat extends Pet { //key "extends" gives access to the Pet class functionality
    constructor(name, age, livesLeft = 9) {
        super(name,age); //reference to the super class (in this case Pet)
        this.livesLeft = livesLeft;
    }
    meow() {
        return "meow";
    }
}

class Dog extends Pet {
    bark() {
        return "woof";
    }
}

const wyatt = new Dog("Wyiatt", 13)
'Wyiatt is eating'

const fred = new Cat("fred", 13)
fred
Cat {name: 'fred', age: 13, livesLeft: 9}
age: 13
livesLeft: 9
name: "fred"
[[Prototype]]: Pet


//terminal
//use the Git Bash app for terminal

//commands:

//ls: stands for "list", similar to "dir"
//pwd: "print working directory"

//cd : "change directory"
//cd .. : backwards
//cd ~ : home directory
//cd / : root directory
//cd c/: to C   
//cd ../../Pets : backs out to the directory required, relative path
//absolute path: cd /Users/coltsteele 
//explorer . : open the instalation folder of git bash

//change home

/* Setting the default directory for Git Bash can be very helpful for a hassle-free start to your development for the day.

Method 1: Change in Shortcut
When we open Git Bash, we’re running git-bash.exe.

We don’t want to mess with this file.

In order to set the default directory, we need to find the shortcut to git-bash.exe.

When I search git bash in the Start Menu and Open File Location of the shortcut, it brings me to C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Git.

Once we find our shortcut, we can right click the Git Bash shortcut and select Properties.

Inside Target:, we have "C:\Program Files\Git\git-bash.exe" --cd-to-home. We want to remove the --cd-to-home flag.

Then we want to set our desired default directory inside Start in:.

Method 2: Change in ~/.bashrc
We can also modify our ~/.bashrc file to change the default directory.

All we have to do is add this line to our ~/.bashrc.


cd C:/path/to/folder;
I’ll walk you through how to add this line to your ~/.bashrc.

We’ll use vim inside Git Bash to create/edit this file.

Open up Git Bash
Run vim ~/.bashrc
Press i in order to insert characters
Type cd C:/path/to/folder; (make sure it’s on its own line)
Press esc to exit the insert mode
Press :wq or ZZ to save and exit vim
You’ve successfully updated ~/.bashrc! Type cat ~/.bashrc to double check. */

https://simplernerd.com/cli-git-bash-default/


//mkdir : creates new folder
//mkdir ../ : creates folder upwards

//man : manual, example ; man ls = description of ls command
//man command doesnt work on git bash, use instead:
//"command" --help

//flags
/* ar014493@DESKTOP-8DE8FET MINGW64 ~/onedrive/escritorio/vscode/javascript
$ ls --help */

/* Mandatory arguments to long options are mandatory for short options too.
  -a, --all                  do not ignore entries starting with .
  -A, --almost-all           do not list implied . and ..
      --author               with -l, print the author of each file
  -b, --escape               print C-style escapes for nongraphic characters
      --block-size=SIZE      with -l, scale sizes by SIZE when printing them;
                               e.g., '--block-size=M'; see SIZE format below
  -B, --ignore-backups       do not list implied entries ending with ~
  -c                         with -lt: sort by, and show, ctime (time of last
                               modification of file status information);
                               with -l: show ctime and sort by name;
                               otherwise: sort by ctime, newest first
  -C                         list entries by columns
      --color[=WHEN]         colorize the output; WHEN can be 'always' (default
                               if omitted), 'auto', or 'never'; more info below
  -d, --directory            list directories themselves, not their contents
  -D, --dired                generate output designed for Emacs' dired mode
  -f                         do not sort, enable -aU, disable -ls --color
  -F, --classify             append indicator (one of */=>@|) to entries
      /* --file-type            likewise, except do not append '*'
      --format=WORD          across -x, commas -m, horizontal -x, long -l,
                               single-column -1, verbose -l, vertical -C
      --full-time            like -l --time-style=full-iso
  -g                         like -l, but do not list owner
      --group-directories-first
                             group directories before files;
                               can be augmented with a --sort option, but any
                               use of --sort=none (-U) disables grouping
  -G, --no-group             in a long listing, don't print group names
  -h, --human-readable       with -l and -s, print sizes like 1K 234M 2G etc.
      --si                   likewise, but use powers of 1000 not 1024
  -H, --dereference-command-line
                             follow symbolic links listed on the command line
      --dereference-command-line-symlink-to-dir
                             follow each command line symbolic link
                               that points to a directory
      --hide=PATTERN         do not list implied entries matching shell PATTERN
                               (overridden by -a or -A)
      --hyperlink[=WHEN]     hyperlink file names; WHEN can be 'always'
                               (default if omitted), 'auto', or 'never'
      --indicator-style=WORD  append indicator with style WORD to entry names:
                               none (default), slash (-p),
                               file-type (--file-type), classify (-F)
  -i, --inode                print the index number of each file
  -I, --ignore=PATTERN       do not list implied entries matching shell PATTERN
  -k, --kibibytes            default to 1024-byte blocks for disk usage;
                               used only with -s and per directory totals
  -l                         use a long listing format
  -L, --dereference          when showing file information for a symbolic
                               link, show information for the file the link
                               references rather than for the link itself
  -m                         fill width with a comma separated list of entries
  -n, --numeric-uid-gid      like -l, but list numeric user and group IDs
  -N, --literal              print entry names without quoting
  -o                         like -l, but do not list group information
  -p, --indicator-style=slash
                             append / indicator to directories
  -q, --hide-control-chars   print ? instead of nongraphic characters
      --show-control-chars   show nongraphic characters as-is (the default,
                               unless program is 'ls' and output is a terminal)
  -Q, --quote-name           enclose entry names in double quotes
      --quoting-style=WORD   use quoting style WORD for entry names:
                               literal, locale, shell, shell-always,
                               shell-escape, shell-escape-always, c, escape
                               (overrides QUOTING_STYLE environment variable)
  -r, --reverse              reverse order while sorting
  -R, --recursive            list subdirectories recursively
  -s, --size                 print the allocated size of each file, in blocks
  -S                         sort by file size, largest first
      --sort=WORD            sort by WORD instead of name: none (-U), size (-S),
                               time (-t), version (-v), extension (-X)
      --time=WORD            change the default of using modification times;
                               access time (-u): atime, access, use;
                               change time (-c): ctime, status;
                               birth time: birth, creation;
                             with -l, WORD determines which time to show;
                             with --sort=time, sort by WORD (newest first)
      --time-style=TIME_STYLE  time/date format with -l; see TIME_STYLE below
  -t                         sort by time, newest first; see --time
  -T, --tabsize=COLS         assume tab stops at each COLS instead of 8
  -u                         with -lt: sort by, and show, access time;
                               with -l: show access time and sort by name;
                               otherwise: sort by access time, newest first
  -U                         do not sort; list entries in directory order
  -v                         natural sort of (version) numbers within text
  -w, --width=COLS           set output width to COLS.  0 means no limit
  -x                         list entries by lines instead of by columns
  -X                         sort alphabetically by entry extension
  -Z, --context              print any security context of each file
  -1                         list one file per line.  Avoid '\n' with -q or -b
      --append-exe           append .exe if cygwin magic was needed
      --help     display this help and exit
      --version  output version information and exit */
      

//example
/* ar014493@DESKTOP-8DE8FET MINGW64 ~/onedrive/escritorio/vscode/javascript
$ ls -l
total 101
-rw-r--r-- 1 ar014493 197609  3949 Apr 12 17:28  BASE.js
-rw-r--r-- 1 ar014493 197609   428 Apr 13 10:40  JS-HTMLinteraction.html
-rw-r--r-- 1 ar014493 197609 81939 Apr 14 12:23  JS-HTMLinteraction.js
-rw-r--r-- 1 ar014493 197609   525 Jan 15 16:26 'TODO LIST Project.html'
-rw-r--r-- 1 ar014493 197609   630 Apr 13 14:55  test.js
-rw-r--r-- 1 ar014493 197609   984 Jan 20 16:14  todos.js */

//create new files
//touch index.html app.css app.js // files will be created on the directory

/* ar014493@DESKTOP-8DE8FET MINGW64 ~/onedrive/escritorio/vscode/javascript
$ touch --help
Usage: touch [OPTION]... FILE...
Update the access and modification times of each FILE to the current time.

A FILE argument that does not exist is created empty, unless -c or -h
is supplied.

A FILE argument string of - is handled specially and causes touch to
change the times of the file associated with standard output.

Mandatory arguments to long options are mandatory for short options too.
  -a                     change only the access time
  -c, --no-create        do not create any files
  -d, --date=STRING      parse STRING and use it instead of current time
  -f                     (ignored)
  -h, --no-dereference   affect each symbolic link instead of any referenced
                         file (useful only on systems that can change the
                         timestamps of a symlink)
  -m                     change only the modification time
  -r, --reference=FILE   use this file's times instead of current time
  -t STAMP               use [[CC]YY]MMDDhhmm[.ss] instead of current time
      --time=WORD        change the specified time:
                           WORD is access, atime, or use: equivalent to -a
                           WORD is modify or mtime: equivalent to -m
      --help     display this help and exit
      --version  output version information and exit

Note that the -d and -t options accept different time-date formats.
 */

//remove files or folders

//rm // permanently remove selected files
//rmdir //removes empty folders
//rm -rf //removes all

/* ar014493@DESKTOP-8DE8FET MINGW64 ~/onedrive/escritorio/vscode/javascript
$ rm --help
Usage: rm [OPTION]... [FILE]...
Remove (unlink) the FILE(s).

  -f, --force           ignore nonexistent files and arguments, never prompt
  -i                    prompt before every removal
  -I                    prompt once before removing more than three files, or
                          when removing recursively; less intrusive than -i,
                          while still giving protection against most mistakes
      --interactive[=WHEN]  prompt according to WHEN: never, once (-I), or
                          always (-i); without WHEN, prompt always
      --one-file-system  when removing a hierarchy recursively, skip any
                          directory that is on a file system different from
                          that of the corresponding command line argument
      --no-preserve-root  do not treat '/' specially
      --preserve-root[=all]  do not remove '/' (default);
                              with 'all', reject any command line argument
                              on a separate device from its parent
  -r, -R, --recursive   remove directories and their contents recursively
  -d, --dir             remove empty directories
  -v, --verbose         explain what is being done
      --help     display this help and exit
      --version  output version information and exit

By default, rm does not remove directories.  Use the --recursive (-r or -R)
option to remove each listed directory, too, along with all of its contents.

To remove a file whose name starts with a '-', for example '-foo',
use one of these commands:
  rm -- -foo

  rm ./-foo

Note that if you use rm to remove a file, it might be possible to recover
some of its contents, given sufficient expertise and/or time.  For greater
assurance that the contents are truly unrecoverable, consider using shred. */


//NODE JS
/* ar014493@DESKTOP-8DE8FET MINGW64 ~/onedrive/escritorio/vscode/javascript
$ node
Welcome to Node.js v14.17.6.
Type ".help" for more information. */

//REPL

/* ar014493@DESKTOP-8DE8FET MINGW64 ~/onedrive/escritorio/vscode/javascript
$ node
Welcome to Node.js v14.17.6.
Type ".help" for more information.
>  repl
<ref *1> {
  start: [Function: start],
  writer: [Function: writer] {
    options: {
      showHidden: false,
      depth: 2,
      colors: true,
      customInspect: true,
      showProxy: true,
      maxArrayLength: 100,
      maxStringLength: Infinity,
      breakLength: 80,
      compact: 3,
      sorted: false,
      getters: false
    }
  },
  REPLServer: [Function: REPLServer],
  REPL_MODE_SLOPPY: Symbol(repl-sloppy),
  REPL_MODE_STRICT: Symbol(repl-strict),
  Recoverable: [Function: Recoverable],
  builtinModules: [Getter/Setter],
  repl: REPLServer {
    allowBlockingCompletions: false,
    useColors: true,
    _domain: Domain {
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      members: [],
      [Symbol(kCapture)]: false,
      [Symbol(kWeak)]: WeakReference {}
    },
    useGlobal: true,
    ignoreUndefined: false,
    replMode: Symbol(repl-sloppy),
    underscoreAssigned: false,
    last: [Circular *1],
    underscoreErrAssigned: false,
    lastError: undefined,
    breakEvalOnSigint: true,
    editorMode: false,
    rli: [Getter/Setter],
    eval: [Function: runBound],
    bufferedCommand: [Getter/Setter],
    _sawReturnAt: 1649937521264,
    isCompletionEnabled: true,
    _sawKeyPress: true,
    _previousKey: {
      sequence: '\r',
      name: 'return',
      ctrl: false,
      meta: false,
      shift: false
    },
    escapeCodeTimeout: 500,
    tabSize: 8,
    _events: [Object: null prototype] {
      close: [Array],
      SIGINT: [Function: onSigInt],
      line: [Array],
      SIGCONT: [Function: onSigCont],
      exit: [Array]
    },
    _eventsCount: 5,
    _maxListeners: undefined,
    output: WriteStream {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      columns: 80,
      rows: 24,
      _type: 'tty',
      fd: 1,
      _isStdio: true,
      destroySoon: [Function: destroy],
      _destroy: [Function: dummyDestroy],
      [Symbol(async_id_symbol)]: 2,
      [Symbol(kHandle)]: [TTY],
      [Symbol(kSetNoDelay)]: false,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    input: ReadStream {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      isRaw: true,
      isTTY: true,
      fd: 0,
      [Symbol(async_id_symbol)]: 5,
      [Symbol(kHandle)]: [TTY],
      [Symbol(kSetNoDelay)]: false,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(keypress-decoder)]: [StringDecoder],
      [Symbol(escape-decoder)]: Object [Generator] {}
    },
    historySize: 1000,
    removeHistoryDuplicates: false,
    crlfDelay: 100,
    completer: [Function: completer],
    _initialPrompt: '> ',
    _prompt: '> ',
    terminal: true,
    cursor: 0,
    history: [
      ' repl',
      '.exit',
      '.help',
      'help',
      'exit',
      'ls',
      'setTimeout(() => console.log("Hello!"), 3000)',
      'setTimeout(() => console.log("Hello!"), 3000)#',
      'global',
      '"hello" + "world"',
      '"hello" "world"',
      'ŕepl'
    ],
    historyIndex: -1,
    line: '',
    context: <ref *2> Object [global] {
      global: [Circular *2],
      clearInterval: [Function: clearInterval],
      clearTimeout: [Function: clearTimeout],
      setInterval: [Function: setInterval],
      setTimeout: [Function],
      queueMicrotask: [Function: queueMicrotask],
      clearImmediate: [Function: clearImmediate],
      setImmediate: [Function]
    },
    lines: [ ' repl', level: [] ],
    commands: [Object: null prototype] {
      break: [Object],
      clear: [Object],
      exit: [Object],
      help: [Object],
      save: [Object],
      load: [Object],
      editor: [Object]
    },
    writer: [Function: writer] { options: [Object] },
    parseREPLKeyword: [Function: deprecated],
    _refreshLine: [Function (anonymous)],
    _moveCursor: [Function (anonymous)],
    clearLine: [Function (anonymous)],
    _ttyWrite: [Function (anonymous)],
    prevRows: 0,
    paused: false,
    _historyHandle: 3,
    _flushing: false,
    [Symbol(contextId)]: undefined,
    [Symbol(bufferedCommand)]: '',
    [Symbol(kCapture)]: false,
    [Symbol(kSubstringSearch)]: null,
    [Symbol(line object stream)]: undefined
  }
} */

/* ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs
$ touch args.js

ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs
$ ls
args.js
 */
console.log("hello from args file")
console.log(process.argv)

/* ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs
$ node args.js
hello from args file
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\equit\\OneDrive\\Escritorio\\VSCODE\\JAVASCRIPT\\nodejs\\args.js'
] */

/* ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs
$ touch greeter.js */

const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`hi there, ${arg}`)
}

/* ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs
$ node greeter.js colt rusty
hi there, colt
hi there, rusty */


//create folder  + 3 files

const fs = require('fs');
const folderName = process.argv[2] || "Project"

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`,"")
    fs.writeFileSync(`${folderName}/app.js`,"")
    fs.writeFileSync(`${folderName}/styles.css`,"")
} catch (e) {
    console.log("lpm");
    console.log(e);
}

/* ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs
$ node boilerplate.js asd

ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs
$ ls
args.js  asd/  boilerplate.js  greeter.js

ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs
$ cd asd

ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs/asd
$ ls
app.js  index.html  styles.css */


//module.exports
    //math.js
const add =  (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

    //app.js
const { PI, square} = require("./math");
console.log(PI)
console.log(square(9))

/* ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs/modulexports
$ node app.js
3.14159
81 */

//require directory
    
//shelter dir
    //index.js
    const blue = require("./blue")
    const sadie = require("./sadie")
    const janet = require("./janet")

    const allCats = [blue, sadie, janet]
    //console.log(allCats)
    module.exports = allCats;
    
    //janet.js
    module.exports = {
        name: "janet",
        color: "orange"
    }
    //blue.js
    module.exports = {
        name: "blue",
        color: "grey"
    }
    //sadie.js
    module.exports = {
        name: "sadie",
        color: "black"
    }

//importcats.js

const cats = require("./shelter")
console.log("Imported cats", cats)


/* ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs/modulexports
$ node importcats.js
Imported cats [
  { name: 'blue', color: 'grey' },
  { name: 'sadie', color: 'black' },
  { name: 'janet', color: 'orange' }
]
 */

//NPM: Node package manager
/* example:
https://www.npmjs.com/package/local-web-server */


//npm install 
 //jokes
/*  ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT
 $ npm i give-me-a-joke
  */
const jokes = require("give-me-a-joke")
/* console.dir(jokes)
 */
/*
ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs/npm
$ node index.js

{
    getRandomCNJoke: [Function (anonymous)],
    getCustomJoke: [Function (anonymous)],
    getRandomDadJoke: [Function (anonymous)],
    getRandomJokeOfTheDay: [Function (anonymous)]
  }
   */
jokes.getRandomDadJoke(function (joke) {
     console.log(joke);
}); //doesnt work


jokes.getRandomCNJoke (function(joke) {
    console.log(joke);
});

//colors
//ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs/npm
//$ npm i colors

const jokes = require("give-me-a-joke");
const colors = require("colors");
console.dir(jokes)
jokes.getRandomDadJoke(function(joke) {
     console.log(joke);
}); 

jokes.getRandomCNJoke (function(joke) {
     console.log(joke.rainbow);
});


//Package.json

//Create 

$ npm init


//Dependencies

"dependencies": {
    "ejs": "^2.6.1",
    "express": "^4.16.4",
    "socket.io": "^2.2.0"
  }

$ npm install //install all the modules defined on the dependencies of the package.json

//stop process git bash = ctrl + c
//git bash clear screen = ctrl + l /clr /clear

//Create server

//create package.json , index.js

//Express
//install express module

/* ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs/npm/firstapp
$ npm i express */


//index.js

//------------------

const express = require('express')
const app = express()
console.dir(app)


//------------
const express = require("express");
const app = express();

app.use(() => {
    console.log("we got a new request")
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})

//index.js //path params

const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

/* app.use((req, res) => {
    console.log("we got a new request")
    //res.send("hello, we got your request")
    //res.send({ color: "red"})
    res.send("<h1>WEB PAGE 1</h1>")
}) */
app.get ("/", (req, res) => {
    console.log("incoming connection")
    res.send("<h1>HOME PAGE</h1>")
})

app.post ("/cats", (req, res) => {
    console.log("cats:")
    res.send("PRRR")
})
app.get ("/cats", (req, res) => {
    console.log("cats:")
    res.send("miau")
})
app.get ("/dogs", (req, res) => {
    console.log("dogs:")
    res.send("woof")
})

app.get("/r/:subreddit", (req, res) => {
    /* console.log(req.params);
    res.send("this is a subreddit") */
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})
//will match anything equivalent to that pattern: /r/asdasd

app.get("/r/:subreddit/:postId", (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} the ${subreddit} subreddit</h1>`)
})

app.get ("/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("no input value")
    }
    console.log(req.query)
    res.send(`<h1>search results for ${q}</h1>`)
}) 
//http://localhost:3000/search?q=dogs&color=red

app.get ("*", (req, res) => {
    console.log("wrong request")
    res.send("wrong request")
}) 
// * matches all requests, so must be placed last avoid over running all others.




//query strings

//https://www.reddit.com/search/?q=chickens

//?q= <---- this is the query string

//NODEMON : restarts the server when changes on the document occur
//npm install -g nodemon (global install)
//Usage: run the app with "nodemon" instead of "node"

/* ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs/npm/firstapp
$ nodemon index.js
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Listening on port 3000 */

/* [nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Listening on port 3000 */


//templating
//ejs

/* 
ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs/npm/template_demo
$ npm i ejs

ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs/npm/template_demo
$ mkdir views

ar014493@DESKTOP-8DE8FET MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT/nodejs/npm/template_demo
$ touch views/home.ejs 
*/
//index.js
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
//allows to execute the index.js from other directory (without it wont load the content of Views folder)

app.get ("/", (req, res) => {
    res.render("home.ejs")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

//home.ejs
/* 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Home Page </h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perferendis fugiat obcaecati expedita error maiores ducimus odio consequuntur placeat. Esse harum aliquam id repudiandae. Soluta cum sint illum fuga nisi.</p>
    
</body>
</html> 
*/

//Tags
/* 
<% 'Scriptlet' tag, for control-flow, no output
<%_ 'Whitespace Slurping' Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%%> Outputs a literal '%>'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> 'Whitespace Slurping' ending tag, removes all whitespace after it */

//passing data to the templates

app.get ("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) +1;
    res.render("random", { num })
})
//random.ejs
<body>
    <h1>your random number is: <%= num %></h1>
</body>

// subreddit template

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render("subreddit", { subreddit });
})

<h1> browsing the <%= subreddit %> subreddit</h1>

//conditional ejs

/* 
<body>
    <h1>your random number is: <%= num %></h1>
    <% if(num % 2 === 0){ %>
    <h1> EVEN </h1>
    <% } else { %>
    <h1> ODD</h1>
    <% } %>
    <h1><%= num%2===0 ? "even" : "odd" %></h1>
</body> 
*/
//
//REST

//from 350 to 368 no comments, dinamic html with js embewed, will check on project or come back later when required.

//unique ID UUID Package
//creates unique Id´s
q   
npm install randomUUID



//MONGO DB


> 1+2
3
> "hello".toUpperCase()
HELLO
> db
test

/* 
> show dbs            
admin   0.000GB
config  0.000GB
local   0.000GB

> use animalShelter  //select a database(creates if doesnt exist)
switched to db animalShelter
> db                 //shows current db
animalShelter 

> db.dogs.insertOne({name: "Charlie", age: 3, breed: "corgi", catFriendly: true}) //insert 1 object
{
        "acknowledged" : true,
        "insertedId" : ObjectId("634d5a122ae8c022c2d1ea85")
}


> show collections
dogs

> db.dogs.find()
{ "_id" : ObjectId("634d5a122ae8c022c2d1ea85"), "name" : "Charlie", "age" : 3, "breed" : "corgi", "catFriendly" : true }

> db.dogs.insert([{name: "Wyatt", breed: "Golden", age: 14, catFriendly: false} , {name:"Tonya", breed: "Chihuahua", age: 17, catFriendly: true}] )
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 2,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})


> db.cats.insert({name: "Blue Steele", age: 6, dogFriendly: false, breed: "Scottish fold"})
WriteResult({ "nInserted" : 1 })


> db.cats.find()
{ "_id" : ObjectId("634d5c512ae8c022c2d1ea88"), "name" : "Blue Steele", "age" : 6, "dogFriendly" : false, "breed" : "Scottish fold" }


> db.dogs.find()
{ "_id" : ObjectId("634d5a122ae8c022c2d1ea85"), "name" : "Charlie", "age" : 3, "breed" : "corgi", "catFriendly" : true }
{ "_id" : ObjectId("634d5b8e2ae8c022c2d1ea86"), "name" : "Wyatt", "breed" : "Golden", "age" : 14, "catFriendly" : false }
{ "_id" : ObjectId("634d5b8e2ae8c022c2d1ea87"), "name" : "Tonya", "breed" : "Chihuahua", "age" : 17, "catFriendly" : true }


> show dbs
admin          0.000GB
animalShelter  0.000GB
config         0.000GB
local          0.000GB

> use animalShelter
switched to db animalShelter
> show collections
cats
dogs

db.dogs.find({catFriendly: true})
{ "_id" : ObjectId("634d5a122ae8c022c2d1ea85"), "name" : "Charlie", "age" : 3, "breed" : "corgi", "catFriendly" : true }
{ "_id" : ObjectId("634d5b8e2ae8c022c2d1ea87"), "name" : "Tonya", "breed" : "Chihuahua", "age" : 17, "catFriendly" : true }

> db.dogs.updateOne({name: "Charlie"}, {$set: {age: 4}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

> db.dogs.updateOne({name: "Charlie"}, {$set: {age: 5, breed: "Lab"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

> db.dogs.updateOne({name: "Charlie"}, {$set: {color: "chocolate"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

> db.dogs.find({name: "Charlie"})
{ "_id" : ObjectId("634d5a122ae8c022c2d1ea85"), "name" : "Charlie", "age" : 5, "breed" : "Lab", "catFriendly" : true, "color" : "chocolate" }

> db.dogs.updateMany({catFriendly: true}, {$set: {isAvailable: false}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }

> db.dogs.find()
{ "_id" : ObjectId("634d5a122ae8c022c2d1ea85"), "name" : "Charlie", "age" : 5, "breed" : "Lab", "catFriendly" : true, "color" : "chocolate", "isAvailable" : false }
{ "_id" : ObjectId("634d5b8e2ae8c022c2d1ea86"), "name" : "Wyatt", "breed" : "Golden", "age" : 14, "catFriendly" : false }
{ "_id" : ObjectId("634d5b8e2ae8c022c2d1ea87"), "name" : "Tonya", "breed" : "Chihuahua", "age" : 17, "catFriendly" : true, "isAvailable" : false }

> db.cats.updateOne({age: 6}, {$set: {age:7}, $currentDate: {lastChanged: true}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

> db.cats.find()
{ "_id" : ObjectId("634d5c512ae8c022c2d1ea88"), "name" : "Blue Steele", "age" : 7, "dogFriendly" : false, "breed" : "Scottish fold", "lastChanged" : ISODate("2022-10-17T14:29:38.668Z") }

> db.cats.findOne()
{
        "_id" : ObjectId("634d5c512ae8c022c2d1ea88"),
        "name" : "Blue Steele",
        "age" : 7,
        "dogFriendly" : false,
        "breed" : "Scottish fold",
        "lastChanged" : ISODate("2022-10-17T14:29:38.668Z")
}

> db.cats.deleteOne({name: "Blue Steele"})
{ "acknowledged" : true, "deletedCount" : 1 }

> db.dogs.deleteMany({isAvailable: false})
{ "acknowledged" : true, "deletedCount" : 2 }

> db.dogs.deleteMany({}) //will delete all the content from that collection


//handwritten
db.dogs.insert([
... { name: "Rusty", breed: "Mutt", age: 3, weight: 25, size: "M", personality: { catFriendly: true, childFriendly: true } },
... { name: "Chungus", breed: "Husky", age: 3, weight: 65, size: "L", personality: { catFriendly: false, childFriendly: true } },
... { name: "Bella", breed: "Chihuahua", age: 8, weight: 7, size: "S", personality: { catFriendly: false, childFriendly: false } },
... { name: "Malakai", breed: "Great Pyrenees", age: 2, weight: 110, size: "L", personality: { catFriendly: false, childFriendly: true } },
... { name: "Dodger", breed: "Corgi", age: 10, weight: 31, size: "M", personality: { catFriendly: true, childFriendly: true } },
... { name: "Mishka", breed: "Corgi", age: 12, weight: 27, size: "M", personality: { catFriendly: true, childFriendly: true } },
... ]);

> db.dogs.insert([
... ... { name: "Rusty", breed: "Mutt", age: 3, weight: 25, size: "M", personality: { catFriendly: true, childFriendly: true } },
... ... { name: "Chungus", breed: "Husky", age: 3, weight: 65, size: "L", personality: { catFriendly: false, childFriendly: true } },
... ... { name: "Bella", breed: "Chihuahua", age: 8, weight: 7, size: "S", personality: { catFriendly: false, childFriendly: false } },
... ... { name: "Malakai", breed: "Great Pyrenees", age: 2, weight: 110, size: "L", personality: { catFriendly: false, childFriendly: true } },
... ... { name: "Dodger", breed: "Corgi", age: 10, weight: 31, size: "M", personality: { catFriendly: true, childFriendly: true } },
... ... { name: "Mishka", breed: "Corgi", age: 12, weight: 27, size: "M", personality: { catFriendly: true, childFriendly: true } },
... ... ]);
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 6,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})

> db.dogs.find({"personality.childFriendly": true, size: "M"})
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea89"), "name" : "Rusty", "breed" : "Mutt", "age" : 3, "weight" : 25, "size" : "M", "personality" : { "catFriendly" : true, "childFriendly" : true } }
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea8d"), "name" : "Dodger", "breed" : "Corgi", "age" : 10, "weight" : 31, "size" : "M", "personality" : { "catFriendly" : true, "childFriendly" : true } }
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea8e"), "name" : "Mishka", "breed" : "Corgi", "age" : 12, "weight" : 27, "size" : "M", "personality" : { "catFriendly" : true, "childFriendly" : true } }


//Query and Projection Operators
https://www.mongodb.com/docs/v4.4/reference/operator/query/

//$gte stands for greater or equal
> db.dogs.find({age: {$gte: 10}})    

{ "_id" : ObjectId("634d5b8e2ae8c022c2d1ea86"), "name" : "Wyatt", "breed" : "Golden", "age" : 14, "catFriendly" : false }
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea8d"), "name" : "Dodger", "breed" : "Corgi", "age" : 10, "weight" : 31, "size" : "M", "personality" : { "catFriendly" : true, "childFriendly" : true } }
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea8e"), "name" : "Mishka", "breed" : "Corgi", "age" : 12, "weight" : 27, "size" : "M", "personality" : { "catFriendly" : true, "childFriendly" : true } }

//$lt stands for less than

>db.dogs.find({age: {$lt: 10}})
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea89"), "name" : "Rusty", "breed" : "Mutt", "age" : 3, "weight" : 25, "size" : "M", "personality" : { "catFriendly" : true, "childFriendly" : true } }
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea8a"), "name" : "Chungus", "breed" : "Husky", "age" : 3, "weight" : 65, "size" : "L", "personality" : { "catFriendly" : false, "childFriendly" : true } }
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea8b"), "name" : "Bella", "breed" : "Chihuahua", "age" : 8, "weight" : 7, "size" : "S", "personality" : { "catFriendly" : false, "childFriendly" : false } }
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea8c"), "name" : "Malakai", "breed" : "Great Pyrenees", "age" : 2, "weight" : 110, "size" : "L", "personality" : { "catFriendly" : false, "childFriendly" : true } }

//$in meaning, in the array

> db.dogs.find({breed: {$in: ["Mutt", "Corgi", "Chihuahua"]}, age: {$lt: 10}})
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea89"), "name" : "Rusty", "breed" : "Mutt", "age" : 3, "weight" : 25, "size" : "M", "personality" : { "catFriendly" : true, "childFriendly" : true } }
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea8b"), "name" : "Bella", "breed" : "Chihuahua", "age" : 8, "weight" : 7, "size" : "S", "personality" : { "catFriendly" : false, "childFriendly" : false } }

//$or stands for "or", meaning one of the conditions must be true

> db.dogs.find({$or: [{"personality.catFriendly": true}, {age: {$lte: 2}}]})
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea89"), "name" : "Rusty", "breed" : "Mutt", "age" : 3, "weight" : 25, "size" : "M", "personality" : { "catFriendly" : true, "childFriendly" : true } }
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea8c"), "name" : "Malakai", "breed" : "Great Pyrenees", "age" : 2, "weight" : 110, "size" : "L", "personality" : { "catFriendly" : false, "childFriendly" : true } }
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea8d"), "name" : "Dodger", "breed" : "Corgi", "age" : 10, "weight" : 31, "size" : "M", "personality" : { "catFriendly" : true, "childFriendly" : true } }
{ "_id" : ObjectId("634d6fa92ae8c022c2d1ea8e"), "name" : "Mishka", "breed" : "Corgi", "age" : 12, "weight" : 27, "size" : "M", "personality" : { "catFriendly" : true, "childFriendly" : true } }


*/

//MONGOOSE
https://mongoosejs.com/

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


npm init -y //create new repository(json file)
npm i mongoose


//CTRL + K + U  : removes // comment status
//CTRL + K + C  : creates // comment status 


//connect to the db

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true }) //mongod server must be running
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

//define a scheema     

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

//adding elements to the schema

const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });


//INSERT MANY
//automaticaly get saved into the mongod

Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
    })

//gitbash 

$ node

> .load index.js //execute the file

> amadeus   //variable is available but not loaded to the db
{
  _id: 634e50815dda212d88ca627b,
  title: 'Amadeus',
  year: 1986,
  score: 9.2,
  rating: 'R'
}
> amadeus.save()  //save it to the the db

Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 434,
  [Symbol(trigger_async_id_symbol)]: 5
}
> amadeus.score = 9.5
9.5
> amadeus.save()


//mongo shell

> show dbs
admin          0.000GB
animalShelter  0.000GB
config         0.000GB
local          0.000GB
movieApp       0.000GB

> use movieApp
switched to db movieApp

> show collections
movies

> db.movies.find({title: "Amadeus"})
{ "_id" : ObjectId("634e50815dda212d88ca627b"), "title" : "Amadeus", "year" : 1986, "score" : 9.5, "rating" : "R", "__v" : 0 }


//Mongoose on node console
$ node
Welcome to Node.js v16.18.0.
Type ".help" for more information.
> .load index.js

//finding

> Movie.find({}).then(data => console.log(data))

> Movie.find({_id:"634e50815dda212d88ca627b"}).then( m => console.log(m))

> Movie.findById("634e50815dda212d88ca627b").then(m => console.log(m))

//UPDATE

//updateOne

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/coltsteele/mongodb/mongoosebasics
$ node
Welcome to Node.js v16.18.0.
Type ".help" for more information.
> .load index.js

 
>Movie.updateOne({title:"Amadeus"}, {year: 1984}).thne(res=> console.log(res)

Promise {
    <pending>,
    [Symbol(async_id_symbol)]: 726,
    [Symbol(trigger_async_id_symbol)]: 724
  }
  > { n: 1, nModified: 1, ok: 1 }
  
//updateMany

> Movie.updateMany({title: {$in: ["Amadeus", "Stand By Me"]}}, {score: 10}).then
(res => console.log(res))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 1775,
  [Symbol(trigger_async_id_symbol)]: 1773
}
> { n: 4, nModified: 4, ok: 1 }

//findOneAndUpdate

> Movie.findOneAndUpdate({title: "The Iron Giant"}, {score: 7.8}, {new: true}).then(m => console.log(m))
 

Promise {
<pending>,
[Symbol(async_id_symbol)]: 4477,
[Symbol(trigger_async_id_symbol)]: 4475
}

{
    _id: 634e4ee0d2ca4d24dc2cd4a8,
    title: 'The Iron Giant',
    year: 1999,
    score: 7.8,
    rating: 'PG',
    __v: 0
}

//delete

Movie.remove({title: "Amelie"}).then(msg => console.log(msg))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 844,
  [Symbol(trigger_async_id_symbol)]: 842
}

> (node:8580) DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.

(Use `node --trace-deprecation ...` to show where the warning was created)
{ n: 3, ok: 1, deletedCount: 3 }


> Movie.deleteMany({year: {$gte: 1999}}).then(mgs => console.log(msg))



> Movie.findOneAndDelete({title:"Alien"}).then(m => console.log(m))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 743,
  [Symbol(trigger_async_id_symbol)]: 741
}
> {
  _id: 634e4ee0d2ca4d24dc2cd4a7,
  title: 'Alien',
  year: 1979,
  score: 8.1,
  rating: 'R',
  __v: 0
}

//SCHEMAS

https://mongoosejs.com/docs/schematypes.html

/* 
All Schema Types
required: boolean or function, if true adds a required validator for this property
default: Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
select: boolean, specifies default projections for queries
validate: function, adds a validator function for this property
get: function, defines a custom getter for this property using Object.defineProperty().
set: function, defines a custom setter for this property using Object.defineProperty().
alias: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets this path.
immutable: boolean, defines path as immutable. Mongoose prevents you from changing immutable paths unless the parent document has isNew: true.
transform: function, Mongoose calls this function when you call Document#toJSON() function, including when you JSON.stringify() a document.
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }

});

const Product = mongoose.model("Product", productSchema) 

const bike = new Product({name: "Tire Pump", price: 19.50, categories: ["Cycling", "Safety"]})
bike.save()
    .then( data => {
        console.log("it worked")
        console.log(data);
    })
    .catch(err => {
        console.log("ERROR")
        console.log(err)
    })


MongoDB server version: 4.4.17
show dbs

admin          0.000GB
animalShelter  0.000GB
config         0.000GB
local          0.000GB
movieApp       0.000GB
shopApp        0.000GB

use shopApp
switched to db shopApp

show collections
products

db.products.find()
{ "_id" : ObjectId("63564a381cc895029050a743"), "name" : "Mountain Bike", "pri" : 599, "__v" : 0 }
{ "_id" : ObjectId("63565e8d8f2f1b270c1b82cd"), "onSale" : false, "name" : "Bi Helmet", "price" : 29.5, "__v" : 0 }
{ "_id" : ObjectId("63578edb02dc9012145d8b0c"), "qty" : { "online" : 0, "inSto" : 0 }, "onSale" : false, "categories" : [ "Cycling", "Safety" ], "name" : "Te Pump", "price" : 19.5, "__v" : 0 }
    

//Validating Mongoose Updates


Product.findOneAndUpdate({ name: "Tire Pump"}, { price: 100} , {new: true})
    .then( data => {
        console.log("it worked")
        console.log(data);
    })
    .catch(err => {
        console.log("ERROR")
        console.log(err)
    })
    
   
/* 
equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/coltsteele/monngoosebasics
$ node product0.js
(node:6056) DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findO
neAndDelete()` without the `useFindAndModify` option set to false are dep
recated. See: https://mongoosejs.com/docs/5.x/docs/deprecations.html#find
andmodify
(Use `node --trace-deprecation ...` to show where the warning was created
)
CONNECTION OPEN!!!
it worked
{
    qty: { online: 0, inStore: 0 },
    onSale: false,
    categories: [ 'Cycling', 'Safety' ],
    _id: 63578edb02dc9012145d8b0c,
    name: 'Tire Pump',
    price: 100,
    __v: 0
}
*/

//FAIL VALIDATIONS

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L'] //only one of the options will be valid, anything else will give an error
        }
    }
});

Product.findOneAndUpdate({ name: "Tire Pump"}, { price: -19.99} , {new: true, runValidators: true})
    .then( data => {
        console.log("it worked")
        console.log(data);
    })
    .catch(err => {
        console.log("ERROR")
        console.log(err)
    })

/*
$ node product0.js
ERROR
Error: Validation failed: price: Path `price` (-19.99) is less than minimum allowed value (0).

at processTicksAndRejections (node:internal/process/task_queues:7
8:11) {
      properties: [Object],
      kind: 'min',
      path: 'price',
      value: -19.99,
      reason: undefined,
      [Symbol(mongoose:validatorError)]: true
    }
  },
  _message: 'Validation failed' */



//Model Instance Methods

https://mongoosejs.com/docs/guide.html#methods


productSchema.methods.greet = function () {
     console.log("HELLLO!!! HI!! HOWDY!!! ")
     console.log(`- from ${this.name}`)
}



//method to toggle on sale

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
}


//method to add new categories

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

findProduct();

//static methods

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

Product.fireSale().then(res => console.log(res))


//MONGOOSE VIRTUALS

https://mongoosejs.com/docs/guide.html#virtuals


const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person', personSchema);


//on node

const tammy = new Person({first: "Tammy", last: "Chow"})
tammy.save()

/* 
VirtualType {
path: 'fullName',
getters: [ [Function (anonymous)] ],
setters: [],
options: {}
}
> CONNECTION OPEN!!!

> const tammy = new Person({first: "Tammy", last: "Chow"})

Uncaught SyntaxError: Identifier 'tammy' has already been declared
> tammy
{ _id: 6357a84e8470d101ec266f72, first: 'Tammy', last: 'Chow' }

> tammy.save()

Promise {
<pending>,
[Symbol(async_id_symbol)]: 511,
[Symbol(trigger_async_id_symbol)]: 5
} 
  */

//on mongo

/* 
use shopApp
switched to db shopApp
show collections
people
products
db.people.find()
{ "_id" : ObjectId("6357a84e8470d101ec266f72"), "first" : "Tammy", "last" : "Chow", "__v" : 0 } 
*/


//MIDDLEWARE

https://mongoosejs.com/docs/middleware.html

personSchema.pre('save', async function () { //pre: runs code before something happens
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!!")
})
personSchema.post('save', async function () { //post: runs code after
    console.log("JUST SAVED!!!!")
})

//will print name: yo, last: mama , instead of the variables choosen
//on node
/* 
> const colt = new Person({first: "Colt", last: "Steele"})
undefined
> colt
{ _id: 6357ad167dbbbc18584d3863, first: 'Colt', last: 'Steele' }
> colt.save().then(p => console.log(p))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 966,
  [Symbol(trigger_async_id_symbol)]: 964
}
> ABOUT TO SAVE!!!!
JUST SAVED!!!!
{ _id: 6357ad167dbbbc18584d3863, first: 'YO', last: 'MAMA', __v: 0 }
 */



-----------------------------------------------------------------------------------------------------------------




//SECTION 38 

//MONGOOSE + EXPRESS APP

//BASIC SETUP

//gitbash
mkdir //create the main folder
npm init -y //create json file
npm i express ejs mongoose //install dependencies
touch index.js //create a js file
mkdir views    //create a folder


nodemon index.js //execute

//on vscode index.js connection configuration 

//requires all dependencies
const express = require('express');  
const app = express();
const path = require('path');
const mongoose = require("mongoose");

//connection to database

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

//connection to views folder where will be the ejs files for loading the webpage

app.set('views', path.join(__dirname, 'views'));

//load the template engine module

app.set('view engine', 'ejs');

//http://localhost:3000/dog 

app.get("/dog", (req,res) => {
    res.send("woof!")
})
//will return woof on the browser
//connection to the db established


//set port 

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})



//CREATING MODEL 

mkdir models
touch models/product.js

//on vscode product.js
//define the schema

const mongoose = require('mongoose');

//new schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

//calling model for mongoose
//https://mongoosejs.com/docs/models.html

const Product = mongoose.model('Product', productSchema);

//export to get it from index.js  
//https://www.sitepoint.com/understanding-module-exports-exports-node-js/
module.exports = Product;

//ON index.js
//declare new variable that requires product.js

const Product = require('./models/product');


//CREATE A seeds.js
touch seeds.js

//in seeds.js

//requiring dependencies
const mongoose = require('mongoose');
const Product = require('./models/product');

//connecting to database

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

//creates a new product using the model scheema from product.js
const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
})

//saves it into mongodb
p.save()
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    })
    

//on mongo shell
MongoDB server version: 4.4.17
show dbs
admin          0.000GB
animalShelter  0.000GB
config         0.000GB
farmStand      0.000GB
local          0.000GB
movieApp       0.000GB
shopApp        0.000GB
use farmStand
switched to db farmStand
show collections
products
db.products.find()
{ "_id" : ObjectId("6358ed37de3ab242a0971e29"), "name" : "Ruby Grapefruit", "price" : 1.99, "category" : "fruit", "__v" : 0 }


//ON seeds.js

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]



//save into database

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

//on mongo shell

db.products.find()
{ "_id" : ObjectId("6358ed37de3ab242a0971e29"), "name" : "Ruby Grapefruit", "price" : 1.99, "category" : "fruit", "__v" : 0 }
db.products.find()
{ "_id" : ObjectId("6358ed37de3ab242a0971e29"), "name" : "Ruby Grapefruit", "price" : 1.99, "category" : "fruit", "__v" : 0 }
{ "_id" : ObjectId("6358ee94bdf01a084c3cfb18"), "name" : "Fairy Eggplant", "price" : 1, "category" : "vegetable", "__v" : 0 }
{ "_id" : ObjectId("6358ee94bdf01a084c3cfb19"), "name" : "Organic Goddess Melon", "price" : 4.99, "category" : "fruit", "__v" : 0 }
{ "_id" : ObjectId("6358ee94bdf01a084c3cfb1a"), "name" : "Organic Mini Seedless Watermelon", "price" : 3.99, "category" : "fruit", "__v" : 0 }
{ "_id" : ObjectId("6358ee94bdf01a084c3cfb1b"), "name" : "Organic Celery", "price" : 1.5, "category" : "vegetable", "__v" : 0 }
{ "_id" : ObjectId("6358ee94bdf01a084c3cfb1c"), "name" : "Chocolate Whole Milk", "price" : 2.69, "category" : "dairy", "__v" : 0 }


//index.js, replaced the get"dog"
//prints all the products on gitbash console

app.get("/products", async (req,res) => {    //use async callback because the request may take time
    const products = await Product.find({})
    console.log(products)
    res.send("all products will be here")  //will be printed on the browser

})
//result on gitbash

[nodemon] starting `node index.js`
APP IS LISTENING ON PORT 3000!
MONGO CONNECTION OPEN!!!
[
  {
    _id: 6358ed37de3ab242a0971e29,
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit',
    __v: 0
  },
  {
    _id: 6358ee94bdf01a084c3cfb18,
    name: 'Fairy Eggplant',
    price: 1,
    category: 'vegetable',
    __v: 0
  },
etc...


//gitbash 
//on views/...
mkdir products
touch index.ejs 


//in index.ejs

<body>
    <h1>All Products</h1>
    

</body>

//in index.js (renders index.ejs , which display all products)

res.render("products/index", { products })

//index.ejs
<body>
    <h1>All Products</h1>
    <ul>
        <% for(let product of products) { %>
        <li><%= product.name %></a> </li>  //will be printed a list of the products from the db
        <% }%>
    </ul>
    
</body>


//index.js


app.get('/products/:id', async (req, res) => { 
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product);
    res.send("details page") //will be printed on the result page
})



//index.ejs (updated, now display names as links)

<h1>All Products</h1>
<ul>
    <% for(let product of products) { %>
    <li><a href="/products/<%=product._id%>"><%= product.name %></a> </li>
    <% }%>
</ul>

//show.ejs (it is displayed on products/:id)

<h1><%= product.name %></h1>
    <ul>
        <li>Price: $<%= product.price%></li>
        <li>Category: <%= product.category%></li>
    
</ul>
<a href="/products">All Products</a>

//index.js (updated to render show.ejs)

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product })
})








//index.ejs original
/* 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Products</title>
</head>

<body>
    <h1><%= category%> Products!</h1>
    <ul>
        <% for(let product of products) { %>
        <li><a href="/products/<%=product._id%>"><%= product.name %></a> </li>
        <% }%>
    </ul>
    <a href="/products/new">New Product</a>
    <%if(category !== 'All') {%>
    <a href="/products">All Products</a>
    <% } %>

</body>

</html>
 */


res.render("products/index")





//GIT
//https://git-scm.com/downloads
//https://www.atlassian.com/git/tutorials

/* equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git --help
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system. */

/* 
equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/JAVASCRIPT
$ git --version
git version 2.37.3.windows.1 
*/

//CONFIG NEW USER AND EMAIL

//git config --global user.name "name"
//git config --global user.email "user@email.com"


//INITIALIZE GIT REPOSITORY ON SPECIFIED LOCATION

/* 
equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment
$ git init
Initialized empty Git repository in C:/Users/equit/OneDrive/Escritorio/VSCODE/EXPERIMENT/.git/ 

//FIND .git on folder //-a, --all, do not ignore entries starting with .

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ ls -a   
./   .git/       node_modules/      package.json  test.js
../  index.html  package-lock.json  test.html


//git status

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
        node_modules/
        package-lock.json
        package.json
        test.html
        test.js

nothing added to commit but untracked files present (use "git add" to track)

//GIT ADD
equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git add index.html

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        node_modules/
        package-lock.json
        package.json
        test.html
        test.js

//COMMIT

//add a commit message
equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git commit -m "index.html added to repository"

[master (root-commit) 85cdb23] index.html added to repository
 1 file changed, 26 insertions(+)
 create mode 100644 index.html

//GIT LOG 
//history of commits

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git log
commit 85cdb23cb33896a0cdbbfcf2a6ea4fa320558019 (HEAD -> master)
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 11:49:49 2022 +0300

    index.html added to repository

//ADD 2 files to git

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   test.html
        new file:   test.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        node_modules/
        package-lock.json
        package.json
        styles.css

//git log 

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git commit -m "added test html and js"
[master 3a70fc3] added test html and js
 2 files changed, 21 insertions(+)
 create mode 100644 test.html
 create mode 100644 test.js

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git log
commit 3a70fc35d2ddcc4eff18136f17057bfb3716d30d (HEAD -> master)
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 12:01:26 2022 +0300

    added test html and js

commit 85cdb23cb33896a0cdbbfcf2a6ea4fa320558019
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 11:49:49 2022 +0300

    index.html added to repository

ADDED LINK FOR STYLES TO  TEST.HTML 
equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        node_modules/
        package-lock.json
        package.json
        styles.css

no changes added to commit (use "git add" and/or "git commit -a")

//add . will add all the files present on the folder

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git add .

$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    index.html
        new file:   styles.css
        modified:   test.html

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git commit -m "add basic styles, deleted modules and other files"

[master 55d61c0] add basic styles, deleted modules and other files
 3 files changed, 8 insertions(+), 27 deletions(-)
 delete mode 100644 index.html
 create mode 100644 styles.css

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git log
commit 55d61c091d45ae095d1a5356d419523f57715f3c (HEAD -> master)
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 12:09:16 2022 +0300

    add basic styles, deleted modules and other files

commit 3a70fc35d2ddcc4eff18136f17057bfb3716d30d
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 12:01:26 2022 +0300

    added test html and js

commit 85cdb23cb33896a0cdbbfcf2a6ea4fa320558019
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 11:49:49 2022 +0300

    index.html added to repository


equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   styles.css

no changes added to commit (use "git add" and/or "git commit -a")

//git add styles.css
//git commit -m "changed letter color to blue"

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git add styles.css

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git commit -m "changed letter color to blue"

[master a9b4bd4] changed letter color to blue
 1 file changed, 1 insertion(+)


equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git log
commit a9b4bd4a7e6bafe484bdbf23017ef639c084f406 (HEAD -> master)
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 12:13:38 2022 +0300

    changed letter color to blue

commit 55d61c091d45ae095d1a5356d419523f57715f3c
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 12:09:16 2022 +0300

    add basic styles, deleted modules and other files

commit 3a70fc35d2ddcc4eff18136f17057bfb3716d30d
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 12:01:26 2022 +0300

    added test html and js

commit 85cdb23cb33896a0cdbbfcf2a6ea4fa320558019
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 11:49:49 2022 +0300

    index.html added to repository

//GIT CHECKOUT, ALLOWS U TO ROLL BACK OR FORWARD INTO THE COMMITS , CHANGING THE STATUS OF THE PROJECT AND ALL ITS FILES

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git checkout a9b4bd4a7e6bafe484bdbf23017ef639c084f406
Note: switching to 'a9b4bd4a7e6bafe484bdbf23017ef639c084f406'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at a9b4bd4 changed letter color to blue

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment ((a9b4bd4...))
$ git checkout 55d61c091d45ae095d1a5356d419523f57715f3c
Previous HEAD position was a9b4bd4 changed letter color to blue
HEAD is now at 55d61c0 add basic styles, deleted modules and other files



equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment ((55d61c0...))
$ git checkout a9b4bd4a7e6bafe484bdbf23017ef639c084f406
Previous HEAD position was 55d61c0 add basic styles, deleted modules and other files
HEAD is now at a9b4bd4 changed letter color to blue

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment ((55d61c0...))
$ git status
HEAD detached at 55d61c0
nothing to commit, working tree clean

//BRANCH

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment ((55d61c0...))
$ git branch
* (HEAD detached at 55d61c0)
  master


//back to master branch

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment ((55d61c0...))
$ git checkout master
Previous HEAD position was 55d61c0 add basic styles, deleted modules and other files
Switched to branch 'master'

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git branch
* master

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git status
On branch master
nothing to commit, working tree clean
 

//GIT BRANCH

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git branch testBranch

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git branch
* master
  testBranch

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git status
On branch master
nothing to commit, working tree clean

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (master)
$ git checkout testBranch
Switched to branch 'testBranch'

equit@DESKTOP-S1MEITP MINGW64 ~/OneDrive/Escritorio/VSCODE/experiment (testBranch)
$ git status
On branch testBranch
nothing to commit, working tree clean

//git log hang out solution (press q)
https://stackoverflow.com/questions/9483757/how-to-exit-git-log-or-git-diff



//UPLOAD GIT TO GITHUB
https://www.youtube.com/watch?v=nhNq2kIvi9s by ColtSteele

//connect git with github project

equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git remote add origin https://github.com/sirkaronte/experiment.git


equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/sirkaronte/experiment.git'

//push project files from git to github

equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git push -u origin master
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 12 threads
Compressing objects: 100% (12/12), done.
Writing objects: 100% (14/14), 1.71 KiB | 874.00 KiB/s, done.
Total 14 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/sirkaronte/experiment.git
 * [new branch]      master -> master
branch 'master' set up to track 'origin/master'.


git fetch is a primary command used to download contents from a remote repository. 
git fetch is used in conjunction with git remote , git branch , git checkout , and git reset to update a local repository to the state of a remote. 
The git fetch command is a critical piece of collaborative git work flows.

equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git remote -v

origin  https://github.com/sirkaronte/experiment.git (fetch)
origin  https://github.com/sirkaronte/experiment.git (push)


//fetch 
equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git fetch -u origin master

remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 739 bytes | 92.00 KiB/s, done.
From https://github.com/sirkaronte/experiment
 * branch            master     -> FETCH_HEAD
   a9b4bd4..664f431  master     -> origin/master

//pull (get data from gitHub)

equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git pull origin master
From https://github.com/sirkaronte/experiment
 * branch            master     -> FETCH_HEAD
Updating a9b4bd4..664f431
Fast-forward
 README.md | 3 +++
 1 file changed, 3 insertions(+)
 create mode 100644 README.md

 //push new updates
 
 equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ touch test.txt

equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git add test.txt

equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git commit -m "test.txt added"
[master da54c47] test.txt added
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test.txt

equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git log
commit da54c47a8ddc26b13f8a0eb4c00ddaaa1a404995 (HEAD -> master)
Author: Agustin <equite.augusto@gmail.com>
Date:   Wed Nov 2 11:49:21 2022 +0300

    test.txt added

commit 664f431f27a0833975a89ee70bc2692008af5728 (origin/master)
Author: sirkaronte <54913507+sirkaronte@users.noreply.github.com>
Date:   Wed Nov 2 11:28:47 2022 +0300

    Create README.md

commit a9b4bd4a7e6bafe484bdbf23017ef639c084f406 (testBranch)
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 12:13:38 2022 +0300

    changed letter color to blue

commit 55d61c091d45ae095d1a5356d419523f57715f3c
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 12:09:16 2022 +0300

    add basic styles, deleted modules and other files

commit 3a70fc35d2ddcc4eff18136f17057bfb3716d30d
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 12:01:26 2022 +0300

    added test html and js

commit 85cdb23cb33896a0cdbbfcf2a6ea4fa320558019
Author: Agustin <equite.augusto@gmail.com>
Date:   Tue Nov 1 11:49:49 2022 +0300

    index.html added to repository

equit@DESKTOP-S1MEITP MINGW64 ~/onedrive/escritorio/vscode/experiment (master)
$ git push -u origin master
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 271 bytes | 271.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/sirkaronte/experiment.git
   664f431..da54c47  master -> master
branch 'master' set up to track 'origin/master'.

//updated on github both file and commit

//REMOVE node_modules

About how to create .gitignore
You can reference the .gitignore template: Node.gitignore
'node_modules/' is added in this '.gitignore'

About how to remove node_modules
git rm -r --cached node_modules
git commit -m 'Remove the now ignored directory node_modules'
git push origin master
Then check your repository.
*/











