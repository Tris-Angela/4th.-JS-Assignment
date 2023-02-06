// Problem-1 solving

function mindGame(numbers){
    let theMultiply = numbers*3;
    let additionToMultiply = theMultiply + 10;
    let divisionOfAddition = additionToMultiply / 2;
    let subtraction = divisionOfAddition - 5;

    return subtraction;
}
let input = mindGame(33);
console.log(input);