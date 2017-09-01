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