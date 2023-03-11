// WHILE LOOP - guessing game

// const num1 = Math.floor(Math.random() * 10);
// let num2 = Math.floor(Math.random() * 10);

// while(num1 !== num2){
//     console.log(num1,num2)
//     num2 = Math.floor(Math.random() * 10);
// }

// console.log(`A Win! ${num1}:${num2}`)






// FUNCTIONS : EX DICE

// function rollDie(){
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled : ${roll}`)
// }

// function throwDice(){
//     for(let i = 0; i < 6; i++){
//         rollDie()
//     }
// }






// FUNCTIONS WITH ARGUMENTS

// function greet(name){
//     console.log(`Hi ${name}`)
// }

// function rollDie(){
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled : ${roll}`)
// }

// function throwDice(numRolls){
//     for(let i = 0; i < numRolls; i++){
//         rollDie()
//     }
// }






// // FUNCTIONS WITH MULTIPLE ARGUMENTS, num = parameter, actual number = argument

// function square(num){
//     console.log(num*num);
// }

// function sum(x,y){
//     console.log(x + y);
// }

// function divide(a,b){
//     console.log(a / b);
// }






// RETURN STATEMENT // return statements stop a function!!

// function add(x,y){
//     return x+y;
// }

// function isPurple(color){
//     if (color.toLowerCase() === 'purple'){
//         return true;
//     }
//     return false;
    
// }

// function isPurple(color){ // ALTERNATIVE SHORTER VERSION
//     return color.toLowerCase() === 'purple'
// }

// function containsPurple(arr){ 
//     for(let color of arr){
//         if(color === 'purple' || color === 'magenta'){
//             return true;
//         }
//     }
//     return false
// }






// FUNCTION PRACTICE

    //(1) Write a isValidPassword function
    //    It accepts 2 Arguments: password and username
    // Password must:
    // - be at least 8 characters 
    // - cannot contain spaces
    // - cannot contain the username
    // if all requirements are met, return true. 
    // Otherwise: false

// function isValidPassword(password, username){
//     if (password.length < 8 || 
//         password.indexOf !== -1 || 
//         password.indexOf(username) !== -1
//         ){
//         return false;
//     }
//     return true;
// }

    //(2) Write a function to find the average value in an array of numbers

// function avg(arr){
//     let sum = 0;
//     for(let num of arr){
//         sum += num;
//     }
//     return sum / arr.length
// }

    //(3) Write a function called isPangram, which checks to see if a 
    // given sentence contains every letter of the alphabet

// function isPangram(sentence){
//     // let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     abc = 'abcdefghijklmnopqrstuvwxyz'
//     for (let letter of abc){
//         if (!(sentence.toLowerCase().indexOf(letter) >= 0)) {
//             return false
//         }}
//     return true
// }

    //(4) Write a getCard() function which returns a random 
    // playing card object, 
    // 2,3,4,5,6,7,8,9,10,J,Q,K,A;
    // clubs, spades, hearts, diamonds

// function getCard(){
//     let val = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
//     let pickVal = val[Math.floor(Math.random() * val.length)];
//     let suit = ['clubs', 'spades', 'hearts', 'diamonds'];
//     let pickSuit = suit[Math.floor(Math.random() * suit.length)];

//     return {
//         value: pickVal,
//         suit: pickSuit
//     }
// }

    // outsourcing reused code in extra function

// function pick(arr){
//     // return random element of an array
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }

// function getCard(){
//     let values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
//     let suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//     return { value : pick(values), suit: pick(suits)};
// }






// //  FUNCTION EXPRESSIONS // functions are objects!

//  const square = function (num) {
//     return num * num;
//  }
//  square(7); // 49

// function add(x,y){
//     return x+y;
// }

// const sum = function(x,y) {
//     return x+y;
// }

// const product = function multiply(x,y){
//     return x*y;
// }






// // FUNCTIONS ARE OBJECTS / functions in an array
// function add(x,y){
//     return x + y;
// }

// const subtract = function(x,y){
//     return x - y;
// }

// function multiply(x,y){
//     return x * y;
// }

// const divide = function (x,y){
//     return x / y;
// }

// const operations = [add, subtract, multiply, divide]

// //operations[1]() ----- calling subtract

// //calling all functions in a loop
// for (let func of operations){
//     func(30,5)
// }

// //creating a Method! 
// const thing = {
//     doSomething: multiply
// }
// /thing.doSomething(50,2)






// // Higher Order Functions
// function callThreeTimes(func){
//     func();
//     func();
//     func();
// }

// function cry(){
//     console.log('Boooooo');
// }

// function rage(){
//     console.log('I HATE EVERYTHING!')
// }

// //callThreeTimes(cry) / call function in function

// function repeatNTimes(func,num){
//     for(let i = 0; i < num; i++){
//         func()
//     }
// }

// //repeatNtimes(cry,5) / repeats cry 5x

// // pickOne takes two functions as arguments and calls a random one
// function pickOne (f1,f2){
//     let rand = Math.random();
//     if (rand < 0.5) {
//         f1();
//     }
//     else {
//         f2();
//     }
// }






// // FUNCTIONS AS RETURN STATEMENTS 'function factory'

// function multiplyBy(num){
//     return function(x){
//         return x * num;
//     }
// }

// const triple = multiplyBy(3);

// triple(6) // 18

// const double = multiplyBy(2);

// double(5) // 10

// const halve = multiplyBy(0.5);

// halve(9) // 4.5


// //Making a function, that creates 3 different function, same behaviour, different variables
// function makeBetweenFunc (x,y){
//     return function(num){
//         return num >= x && num <= y;
//      }
//     }

// const isChild = makeBetweenFunc(0,18); 
// isChild(17) // true
// isChild(99) // false

// const isInNineties = makeBetweenFunc(1990,1999);
// isInNineties(1989) // false
// isInNineties(1999) // true

// const isNiceWeather = makeBetweenFunc(65,80);
// isNiceWeather(45) // false
// isNiceWeather(75) // true

 




// // CALLBACK FUNCTIONS

// function grumpus(){
//     alert('GO AWAY!')
// }

// setTimeout(grumpus, 5000); // run grumpus after 5sec(5000msec)



// //callback with an anonymous function:
// setTimeout(function() {
//     alert('Welcome!')
// }, 5000);

// // callback when button is clicked:
// const btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//     alert('Why did you click me?')
// })






// // HOISTING  / let & const are not hoisted, var is

// howl(); ///// -> inverted order still works, functions declarations 
//         ///   are hoisted all the way to the beginning of the code

// function howl(){
//     console.log('awooooooo');
// }

// hoot() /////// -> doesnt work, function expressions are not hoisted! 
 
// var hoot = function(){
//     console.log('hoo hooo')
// }






// ///////////
// /// ARRAY CALLBACK METHODS
// ////////////







// //forEach  --- runs a function on every item in an array, also the index (optional)

// const numbers = [20,21,22,23,24,25,26];

// numbers.forEach(function (num, idx){
//     console.log(`number is ${num} and index is ${idx}`)
// })







// //map --- creates a new array from an existing one

// const doubles = numbers.map(function(num){
//     return num * 2;
// })

// const isEven = numbers.map(function(num){
//     return {
//         num: num,
//         isEven : num % 2 === 0 
//     }
// })

// const words = ['asap', 'byob', 'rsvp', 'diy']

// const reFormat = words.map(function(word){ //-- returns array ['A.S.A.P', etc]
//     return word.toUpperCase().split('').join('.');
// })









// // practice Sentence generator
// const abc = 'abcdefghijklmnopqrstuvwxyz'

// function pickLetter() {
//     return abc[Math.floor(Math.random()*abc.length)]
// }

// function pickNumber() {
//     return Math.floor(Math.random()*12)
// }

// let sentence = []

// sentenceLength = pickNumber()

// for(let i=0;i<=sentenceLength;i++){
//     let wordLength = pickNumber()
//     let word=''
//     for(let i=0;i<=wordLength;i++){
//         ltr = pickLetter()
//         word = word + ltr
//     }
//     console.log(word)
//     sentence.push(word)
// }






// ////ARROW FUNCTIONS - shortening use of callback functions

// const square = function(x){
//     return x*x
// }

// //is the same as :

// const anotherSquare = x => {
//     return x*x
// }







// IMPLICIT RETURN STATEMENT for single return expressions

// const square = n => n * n;


// // example, array of numbers, double and map into new array
// const nums = [1,2,3,4,5,6,7,8];
// const doubledNums = nums.map(num => num*2)



// // ex, same array, mapped into array stating even, odd etc
// const isEven = nums.map(function(n){
//     if (n % 2 === 0) return 'even';
//     return 'odd';
// })
// // same as one liner: (paranthesis instead of curly braces!)
// const isEven2 = nums.map(n => (
//     n % 2 === 0 ? 'even' : 'odd'
// ))








// //// .FIND - returns the value of the 1st element in the array that matches requirements
// //ex array of objects, find identifier 

// const obj = [{
//     name : 'abc',
//     id : 1
// },
// {
//     name : 'def',
//     id : 2
// }]

// const findTwo = obj.find(item => item.id === 2);
// const findAbc = obj.find(item => item.name === 'abc');









// //// .FILTER - Creates a new array with all the elements that pass the test 
// const nums = [9,8,7,6,5,4,3,2,1];
// const odds = nums.filter(n => {
//     return n % 2 === 1; // our callback returns true or false, 
//     //if it returns true, n is added to the filtered array
// })

// const smallNums = nums.filter(n => n<5);









// //// .EVERY -- tests whether ALL elements in the array pass the function. it returns a Boolean value
// //// .SOME - similar to .every, but returns true if ANY of the elemtents pass the test function

// const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// const allThreeLetters = words.every(word => word.length === 3)
// const someStartWithD = words.some(word => word.indexOf('d') === 0)









// //// .SORT - 
// const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

// // prices.sort() // sorts by the first character! 

// const ascendingSort = prices.slice().sort((a,b) => a - b); // slice to not alter the original array prices in place

// //    a        b
// // 400.50    3000  // 400.50 - 3000 = negative - -> sort a before b
// // 3000      99.99 // 3000 - 99.99 = positive -> sort b before a 
// // !!! a-b sorts ascending 

// const descendingSort = prices.slice().sort((a,b) => b - a);










// //// .REDUCE - Executes a reducer function on each element of the array, resulting in a single value
// // good to create Sums, find max or min

// // EX Sum
// [3,5,7,9,11].reduce((accumulator, currentValue) => { // accumulator starts as idx[0], currentValue starts as idx[1]
//     return accumulator + currentValue;
// })

// // EX findMax / findMin

// const findMax = [3,5,7,8,11,3,50,8].reduce((max,val) => {
//     if(val > max) return val; // returns val as the next max
//     return max;
// })

// // alternative using Math.max

// const findMax2 = [3,5,7,8,11,3,50,8].reduce((max,val) => {
//     return Math.max(max, val);
// })

// // find min

// const findMin = [3,5,7,8,11,3,50,8].reduce((min,val) => {
//     return Math.min(min,val);
// }, 0) // optional set initial value for Max! 



// // tallying with .reduce into an object
// const votes = ['y','n','y','y','y','n','n','y','n','n'];
// const results = votes.reduce((tally, val) =>{
//     if (tally[val]){
//         tally[val]++
//     }
//     else {
//         tally[val] = 1;
//     }
//     return tally;
//     }, {}) // initialization of tally as an empty object

// // alternative, same logic
// const results2 = votes.reduce((tally,val) => {
//     tally[val] = (tally[val] || 0) + 1;
//     return tally;
// }, {})










// ///// MISCEALLANEOUS JS FEATURES

// /// DEFAULT FUNCTION PARAMETER VALUES

// function multiply(x,y){
//     if (typeof y === 'undefined'){    //// setting a default parameter for y in case it is not entered
//         y = 1;
//     }
//     return x * y;
// }

// // alternatively using ternary operator
// function multiply2(x,y){
//     y = typeof y === 'undefined' ? 1 : y; // if true, use 1, else y stays y
//     return x * y;
// }

// // the new way
// function multiply3(x,y = 1) { // sets default for y as 1 
//     return x * y;
// }

// // ex default value is string
// const greet = (person, greeting = 'Hi') => {
//     console.log(`${greeting}, ${person}!`)
// }

// //ex default value is array
// const blah = (x,y=[1,2,3]) => {
//     console.log(x,y);
// }










// ////SPREAD
// const nums = [45,23,34,7,5]
// Math.max(nums) // -> NaN / function expects seperate arguments, not ONE array
// Math.max(...nums) // -> 45 / spread divides the array into seperate arguments

// //ex
// function giveMeFour(a,b,c,d){
//     console.log('a',a)
//     console.log('b',b)
//     console.log('c',c)
//     console.log('d',d)
// }

// const colors = ['red','orange','yellow','green']

// giveMeFour(colors) //   -> a (4) ['red', 'orange', 'yellow', 'green']0: "red"1: "orange"2: "yellow"3: "green"length: 4[[Prototype]]: Array(0)
//                         // b undefined
//                         // c undefined
//                         // d undefined

// giveMeFour(...colors)    // ... turns color into 4 arguments!!
//                         // a red
//                         // b orange
//                         // c yellow
//                         // d green



// //// SPREAD IN ARRAY LITERALS
// const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamoyant cuttlefish'];
// const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
// const cnidaria = ['fire coral', 'moon jelly'];

// const mollusca = [...cephalopods, ...gastropods] //// create new array of all arguments of arrays 1 + 2



// //// SPREAD IN OBJECT LITERALS
// const feline = { legs: 4, family : 'Felidae'};
// const canine = { family: 'Caninae', furry : true} ;

// const dog = { ...canine, isPet: true};
// //{ family: 'Caninae', furry : true, isPet: true}

// const lion = { ...feline, genus: 'Panthera'};
// //{ legs: 4, family : 'Felidae', genus: 'Panthera'}

// const catDog = { ...feline, ...canine};
// //{ legs: 4, family: 'Caninae', furry : true} //// conflicting keys (family) overwrite, the order matters

// // spread is good to make copies with a new reference, but only 1 level deep, it wont clone nested objects/arrays
// const catDogClone = {...catDog};

// //objects are not iterable, you can only spread an object into another object
// const catDogArray = [...catDog] // doesnt work

// //you can spread an array into an object though EX:
// const numAsValues = {[4,5,6]}
// //-> {0: 4, 1: 5, 2: 6} creates an object with the indices as keys














// //// REST - looks like spread, but it collects things down into a single array, almost the opposite of spread
// //EX collecting x amount of arguments // THE ARGUMENTS OBJECT
// function sumAll() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++){ // the arguments-object is available inside every function
//         total += arguments[i];         // it contains all arguments passed to the function, not a real array
//     }                           // not available in arrow functions!!
//     return total;
// }

// //// REST
// function sumAll(...nums) { // Rest collects all remaining arguments into an actual array
//     let total = 0
//     for (let n of nums) total += n;
//     return total;
// }

// // EX collecting remaining arguments (the REST)
// function fullName(first, last, ...titles){ // rest collects all remaining arguments
//     console.log('first', first)
//     console.log('last', last)
//     console.log('titles', titles)
// }

// fullName('tom','jones','III','order of the phoenix')
// // first tom
// // last jones
// // titles ['III', 'order of the phoenix']

// // REST works in an arrow function
// const multiply = (...nums) => (
//     nums.reduce((total, currVal) => total * currVal)
// )













// //// DESTRUCTURING - A short, clean syntax to 'unpack': 
// //// - Values from arrays
// //// - Properties from objects
// //// into distinct variables

// ////DESTRUCTURING ARRAYS
// const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp', 'Ghirmay Ghebreslassie', 'Alphonce Simbu', 'Jared Ward' ];

// const [gold, silver, bronze] = raceResults; // set var gold to idx[0], silver to idx[1] etc
// gold; // 'Eliud Kipchoge'
// silver; // 'Feyisa Lelisa'
// bronze; // 'Galen Rupp'

// const [fastest, ...everyoneElse] = raceResults; // set fastest to idx[0], rest to ...rest
// fastest; // 'Eliud Kipchoge'
// everyoneElse; // ['Feyisa Lelisa', 'Galen Rupp']

// const [,second,,fourth] = raceResults; // commas skip indices 


// ////DESTRUCTURING OBJECTS - instead of the indices, we create the new variables based of the names of the properties (keys)
// const runner = {
//     first: 'Eliud',
//     last: 'Kipchoge',
//     country: 'Kenya',
//     title: 'Elder of the Order of the Golden Heart of Kenya'
// }

// const {first, last, country} = runner;
// first; // 'Eliud'
// last; // 'Kipchoge'
// country; //'Kenya'

// const {country: nation, title: honorific} = runner;
// nation; // 'Kenya'
// honorific; // 'Elder of the Order of the Golden Heart of Kenya'

// const {first, last, ...other} = runner;
// first; // 'Eliud'
// last; // 'Kipchoge'
// other; // {country: 'Kenya', title: 'Elder of the Order of the Golden Heart of Kenya'}




// //// NESTED DESTRUCTURING
// const results = [{
//     first: 'Eliud',
//     last: 'Kipchoge',
//     country: 'Kenya',
//     },
//     {
//     first: 'Feyisa',
//     last: 'Lilesa',
//     country: 'Ethiopia', 
//     }, 
//     {
//     first: 'Galen',
//     last: 'Rupp',
//     country: 'USA',
//     }
// ]
// const [{first: goldWinner},{country}] = results;
// goldWinner; // 'Eliud'
// country; // 'Ethiopia'


// ////PARAMETER DESTRUCTURING
// const runner = {
//     first: 'Eliud',
//     last: 'Kipchoge',
//     country: 'Kenya',
//     title: 'Elder of the Order of the Golden Heart of Kenya'
// }

// function print({first,last,title}){
//     console.log(`${first} ${last}, ${title}`)
// }

// print(runner) // Eliud Kipchoge, Elder of the Order of the Golden Hear of Kenya

// //EX PARAMETER DESTRUCTURING IN ARRAY
// const response = [
//     'HTTP/1.1',
//     '200 OK',
//     'application/json',
// ]

// function parseResponse([protocol, statusCode, contentType]) { // function expects an array
//     console.log(`Status: ${statusCode}`)
// }
// //Status: 200 OK









// //// OBJECTS pt 2





// // SHORTHAND OBJECT PROPERTIES - create object with keys = variable, values = variable properties
// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     return {            // creates {
//         max,            // max: value of max,
//         min,            // min: value of min,
//         sum,            // sum: value of sum,
//         avg             // avg: value of avg }
//     }
// }

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
// const stats = getStats(reviews) // see above




// // COMPUTED PROPERTIES - creating an object with a dynamic key
// const role = 'host';
// const person = 'Jools Holland';
// const role2 = 'director'
// const person2 = 'james cameron'

// //the old way - initiating object before inserting dynamic keys
// const team = {};
// team[role] = person; // too avoid role being turned into 'role'
// team[role2] = person2;

// // the new way - We can use a variable as a key name in an object literal property using brackets
// const teamComputedProperties = {
//     [role] : person,
//     [role2] : person2
// }

// //EX make a function that accepts an object and will return a copy of that object with a new property added in
// // the old way
// function addProp(obj,k,v) {
//     const copy = {...obj};
//     copy[k] = v;
//     return copy
// }

// // the new way
// const addPropOP = (obj,k,v) => {
//     return {...obj,[k]:v}
// }







// //// METHODS - We can add functions as properties on objects.
// // group functions
// const math = {
//     add : function(x,y){return x + y},         //call as math.add(x,y)
//     multiply : function(x,y){return x * y},
//     divide : function(x,y){return x/y},
//     numbers : [1,2,3,4,5]                      //object can contain other properties too
// }

// // METHOD SHORTHAND SYNTAX - shortening the key value pair syntax
// const math = {
//     add(x,y){return x+y;},
//     multiply(x,y){return x*y}
// }












// //// THIS - gives us the ability to write an object or method, that is aware of the object it lives in
// function sayHi(){
//     console.log('Hi')
//     console.log(this); //-> refers to the window object/ the global scope of properties and methods
// }
// // EX : here THIS has the value of the object it lives in
// const person = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         console.log(this); // -> refers to the object person itself
//     }
// }
// //
// const personThis = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         const {
//             first, last, nickName
//         } = this;                // accessing the objects' properties with THIS
//         return `${first} ${last} AKA ${nickName}`;
//     },
//     printBio() {
//         const fullName = this.fullName();          // referencing the object 
//     console.log(`${fullName} is a person!`)    
//     },
//     laugh : () => {
//         console.log(this); // here THIS references the window, in arrow function THIS behaves different, it doesnt get its own THIS
//     }
// }

// // The value of THIS depends on the invocation context of the function it is used in.
// // The value will change depending on how the function is executed, not where its written
// const printBio = personThis.printBio; // creating a reference to printBio in the Method
// // it doesnt work, THIS references the Window here, calling it like this:
// personThis.printBio() // works, THIS references the parent object

// //EX annoyomatic - making use of THIS in arrow functions
// const annoyer = {
//     phrases : ['literally', 'cray cray', "I can't even", 'Totes!', 'YOLO', "Can't Stop, Won't Stop"],
//     // pick random Phrase out of phrases:
//     pickPhrase(){
//         const {phrases} = this;
//         const idx = Math.floor(Math.random() * phrases.length);
//         return phrases[idx]
//     },
//     start(){
//         // THIS would refernce the object here, but executed by setInterval it'd reference the window
//         setInterval(() => {                 // using an arrow function we get the object (arrow functions dont get their own THIS, it relies on the THIS we have in the parent function start())
//             console.log(this.pickPhrase())
//         }
//         , 3000)
//     }

// }
// // ergo THIS in an arrow function is good if you dont want a new reference
// // not good in Methods in an object, if you want to reference the object itself













// //PRACTICE  

// function makeDeck() {
//     const deck = [];
//     const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//     for (let value of values.split(',')){
//         for (let suit of suits){
//             deck.push({
//                 value,          // shorthand value: value etc
//                 suit
//             })
//         }
//     }
//     return deck;
// }

// function drawCard(deck){
//     return deck.pop()
// }

// const myDeck = makeDeck()
// const card1 = drawCard(myDeck)  
// // like this we have to push myDeck around for every draw

// //instead we group the methods with the values in an object:

// const myDeck = {
//     deck: [],
//     drawnCards: [],
//     suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//     values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//     initializeDeck(){
//         const {suits, values, deck } = this; // destructuring this.suits into variable suits etc
//         for (let value of values.split(',')){
//             for (let suit of suits){
//                 deck.push({
//                     value,
//                     suit
//                 })
//             }
//         }  
//         // return deck; optional here, because we actually change the property of deck inside the object, it is saved         
//     },
//     drawCard(){
//         const card = this.deck.pop(); // with the method and THIS we dont have to pass the argument myDeck around
//         this.drawnCards.push(card);
//         return card;
//     }, 
//     drawMultiple(numCards){                 //draw multiple cards using drawCard, return drawn cards
//         const cards = [];
//         for(let i=0; i<numCards; i++){
//             cards.push(this.drawCard());
//         }
//         return cards;
//     },
//     shuffle() {
//         const {deck} = this;
//         for (let i = deck.length - 1; i>0 ; i--){
//             let j = Math.floor(Math.random() * (i +1));
//             [deck[i], deck[j]] = [deck[j], deck[i]];
//         }
//     }
//    }

//// THE FISHER YATES SHUFFLE
// function shuffle(arr) {                          
//     // loop over array backwards
//     for (let i = arr.length - 1; i>0; i--){
//     // pick random index before current element 
//         let j = Math.floor(Math.random() * (i + 1));
//     //swap using destructuring
//         [arr[i], arr[j]] = [arr[j], arr[i]];     
//     }
// }



// PRACTICE //
// CREATING NEW DECKS - make a function that returns an object 

// const makeDeck = () => {
//     return {
//         deck: [],
//         drawnCards: [],
//         suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//         values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//         initializeDeck(){
//             const {suits, values, deck } = this; // destructuring this.suits into variable suits etc
//             for (let value of values.split(',')){
//                 for (let suit of suits){
//                     deck.push({
//                         value,
//                         suit
//                     })
//                 }
//             }  
//             // return deck; optional here, because we actually change the property of deck inside the object, it is saved         
//         },
//         drawCard(){
//             const card = this.deck.pop(); // with the method and THIS we dont have to pass the argument myDeck around
//             this.drawnCards.push(card);
//             return card;
//         }, 
//         drawMultiple(numCards){                 //draw multiple cards using drawCard, return drawn cards
//             const cards = [];
//             for(let i=0; i<numCards; i++){
//                 cards.push(this.drawCard());
//             }
//             return cards;
//         },
//         shuffle() {
//             const {deck} = this;
//             for (let i = deck.length - 1; i>0 ; i--){
//                 let j = Math.floor(Math.random() * (i +1));
//                 [deck[i], deck[j]] = [deck[j], deck[i]];
//             }
//         }
//        }
// }











// // INTRODUCTION TO DOM




//// document.methods:
////  getElementById - returns dom-object

////  getElementsByTagName - returns list of dom-objects/ empty collection if nothing is found
    // returned HTMLCollection is an array like object
    // input[0] selecting by indices works
    // .length works
    // most Array methods won't
    // Collection is iterable (loops):
    // for (let input of inputs)
    // you can spread objects in collection into an array:
    // const arr = [...inputs]

////  getElementsByClassName
    // returns HTMLCollection

//// search within other objects to narrow down search:
    // const ul = document.getElementsByTagName('ul')[0]
    // ul.getElementsByClassName('special')

//// doesn't work with ID, because ID is supposed to be unique to a single object!!




//// querySelector
// A newer, all-in-one method to select a single element.
// pass in a CSS selector:
    // document.querySelector('#byid')
    // document.querySelector('h1')
    // document.querySelector('.byClass')

    // returns a single object (at most), selects the first match!

//// querySelectorAll
    // returns a collection of all matching elements, but not a HTMLCollection, it's a NodeList
    // NodeLists are also array-like objects
    // difference to HTMLcollection is that we have the forEach function
    




