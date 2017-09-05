console.log("It works!");

//// string error
// let myName = 'Len';
// myName = 28;

// boolean error
// let hasHobbies = false;
// hasHobbies = 0;

// Good writing style
let myName: string = 'Len';
let myAge: number = 27;
let hasHobbies: boolean = false;

// array
let hobbies = ["Cooking", "Sports"];
// hobbies = 100;

// tuples
// order is important.
let address: [string, boolean, number] = ["Superstreet", false, 99, 88, 0];

// enum
enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue // 101
}

let myColor: Color = Color.Green;
console.log(myColor);
console.log(Color.Blue);

// any
let car: any = "BMW";
console.log(car);
console.log(typeof(car));

car = { brand: "BMW", series: 3};
console.log(car);
console.log(typeof(car));

// functions
function returnMyName(): string{
    return myName;
    // return myAge;
}
console.log(returnMyName());

// void: doesn't return anything.
function sayHello(): void{
    console.log("Hello!");
    // return myName;
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(2, 10));

// function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();

myMultiply = multiply;
console.log(myMultiply(3, 4));

// objects
let userData: {name: string, age: number} = {
    name: "Max",
    age: 27
};
// userData = {
//     name: "hi",
//     b: 22
// }

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [1, 2, 3],

    output: function (all: boolean): number[] {
        if (all === true) {
            return this.data;
        } else {
            return [];
        }
    }
}
// complex = {};

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [1, 2, 3],

    output: function (all: boolean): number[] {
        if (all === true) {
            return this.data;
        } else {
            return [];
        }
    }
}

// union types
let myRealRealAge: number | string | boolean = 27;
myRealRealAge = "27";
myRealRealAge = true;
// myRealRealAge = [1, 2, 3];

// check types
let finalValue = "A string";
if (typeof finalValue == "string"){
    console.log("Final value is a string");
}

// never
function neverReturns(): never {
    throw new Error('An error!');
}

// Nullable Types -- strictNullChecks
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
// canThisBeAny = 12;