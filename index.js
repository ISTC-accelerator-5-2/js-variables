// 3 ways to make variables

// variable
var a = 5;

// let b be 1
let b = 1;

// constant
const c = 4;

// ERROR
// const x = 5;
// x = 7;

// const y;

// console.log(a, b, c);

// priorities
// 1. const
// 2. let
// 3. var

// JavaScript types
5 // number
'hello' // string

// not strictly typed
let t = 5;
t = 'barev';

// primitive
// 6 primitives

// 1. undefined
let foo;
console.log(foo);

// 2. boolean
let trueBool = true;
let falseBool = false;

// 3. number
let n = 78;
let n1 = 1.6;
let n2 = 0.1;
let n3 = Infinity;
let n4 = NaN; // Not a Number

// 4. string
let str = 'hi';
let str1 = "hi";
let str2 = `hi`;

// string interpolation
console.log('a 5+5 b');
console.log(`a ${5+5} b`);
// const name = prompt('Hi, please enter your name');
// const age = prompt('Please enter your age');
// alert('Hi ' + name + ', you are ' + age + ' years old');
// alert(`Hi ${name}, you are ${age} years old`);

// 5. bigint
// 6. symbol

console.log('----------------------------------------------------------');
console.log(typeof 6);
console.log(typeof '');
console.log(typeof(45));
console.log(typeof true);
console.log(typeof typeof 5);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof undefined);

console.log('----------------------------------------------------------');
// Not primitive
// null
let zoo = null;

console.log(zoo);
console.log(typeof null);

// Object
// 'anun azganun' -> 012345678
// 'anun azganun' <- 012345678
// bar -> definition

// [key]: value
const obj = {a: 5, b: 6};
const telNumbers = {
  narek: 12345,
  mika: 67890,
  foo: true,
  bar: 'string',
  zoo: {
    a: 2,
    b: 5
  }
};

const p = {
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  profession: 'driver',
  married: true,
  children: 2,
  car: null
};

p.address = {
  city: 'foo',
  planet: 'mars'
};

console.log(telNumbers);
console.log(telNumbers.mika);
console.log(telNumbers.zoo.a);

console.log(p);
console.log(`${p.firstName}, ${p.lastName}`);
console.log(p.car);
console.log(p.address);

const key = 'age';
console.log('age', p[key]);


// Arrays
console.log('//////////////////////////////////////////');
const arr = [5, 6, true, false, 'string', {}, []];
console.log(arr[3]);


// Everything is an object!
const variable = [1,2,3];
console.log(arr.length);

console.log('abc'.length);
console.log('abc'.toUpperCase());

const number6 = 44.4444;
console.log(number6.toFixed());

// num to string
`${4}`;
4 + '';

// string to num
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
'5';
console.log(parseInt('a5a5'));