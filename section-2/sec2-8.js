// DATA TYPES
// JS is dynamically typed lang
// Types are associated w/values, not variables
// We do not need to specify types
// Most other programming langs are statically typed(Java,C#,C++)
// TypeScript is a superset of JS that allows for static typing

// PRIMITIVE

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// TYPEOF operator will identify data type

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();
console.log(today);
console.log(typeof today);