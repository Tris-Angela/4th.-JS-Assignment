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