// let & const
let varialbe = "Test";
console.log(varialbe);
varialbe = "Another value";
console.log(varialbe);

const maxlevels = 100;
// maxlevels = 99; // It isn't working.

// Block scope
function reset(){
    // console.log(variable); // Undefined error
    let variable = null;
    console.log(variable);
}
reset();
console.log(varialbe);
