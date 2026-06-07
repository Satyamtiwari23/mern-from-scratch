// ======================================
// VARIABLE DECLARATIONS
// ======================================

// 1. var (old way)
var name = "Satyam";

// 2. let (can be reassigned)
let age = 21;

// 3. const (cannot be reassigned)
const country = "India";

console.log(name);
console.log(age);
console.log(country);

// Reassigning variables
name = "Rahul";
age = 22;
// country = "USA"; // Error (const cannot be reassigned)


// ======================================
// PRIMITIVE DATA TYPES
// ======================================

// 1. String
let fullName = "Satyam Tiwari";

// 2. Number
let marks = 95;
let price = 99.99;

// 3. BigInt
let largeNumber = 1234567890123456789012345678901234567890n;

// 4. Boolean
let isStudent = true;

// 5. Undefined
let city;

// 6. Null
let address = null;

// 7. Symbol
let uniqueId = Symbol("id");

// ======================================
// CHECKING DATA TYPES
// ======================================

console.log(typeof fullName);      // string
console.log(typeof marks);         // number
console.log(typeof largeNumber);   // bigint
console.log(typeof isStudent);     // boolean
console.log(typeof city);          // undefined
console.log(typeof address);       // object (JavaScript quirk)
console.log(typeof uniqueId);      // symbol