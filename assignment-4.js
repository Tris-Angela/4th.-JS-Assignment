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


// problem-2 solving

function evenOdd(words){
    let totalCharacter = words.length;
    const remainder = totalCharacter % 2;
    if(typeof words != 'string'){
        console.log('error: please insert only string');
    }
    else if(remainder === 0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
    return;
}
evenOdd(45);

// problem-3 solving
function isLGSeven(input){
    const value = input - 7;
    const double = input*2;
    if(typeof input != 'number'){
        console.log('error: please insert a number');
    }
    else if(value >= 7){
        return double;
    }
    else{
        return value;
    }
}
console.log(isLGSeven(6));


// problem-4 solving

function findingBadData(arrayOfNumbers){
    const badData = [];
    for(let i = 0; i < arrayOfNumbers.length; i++){
        const dataPosition = i;
        const  dataValues = arrayOfNumbers[dataPosition];
        if(dataValues < 0){
            badData.push(dataValues);
        } 
    }return badData.length;
}
let arrayInputs =  [ 90, -9, -5, -33, -55 ];
console.log(findingBadData(arrayInputs));


