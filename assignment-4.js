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
const value1 = isLGSeven(6);
console.log(value1)
const value2 = isLGSeven(-15);
console.log(value2)
const value3 = isLGSeven(15);
console.log(value3)


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
const array1 = findingBadData([ 1,2,5 ]);
console.log(array1);
const array2 = findingBadData([ 2, -5, -7, -13 ]);
console.log(array2);
const array3 = findingBadData([ -4, -9, -5, -33, -55 ]);
console.log(array3);

// problem-5 solving

function gemsToDiamond(quantity1, quantity2, quantity3){
    const firstFriendsGem = quantity1*21;
    const secondFriendsGem = quantity2*32;
    const thirdFriendsGem = quantity3*43;
    
    const totalDiamonds = firstFriendsGem + secondFriendsGem + thirdFriendsGem;
    const diamond = totalDiamonds - 2000;
    if(totalDiamonds < 1000*2){
        return totalDiamonds;
    }
    else(totalDiamonds >= 1000*2)
        
        return diamond;

}
const gemsQuantity1 = gemsToDiamond(1, 1, 1);
console.log(gemsQuantity1);
const gemsQuantity2 = gemsToDiamond(20, 200, 50);
console.log(gemsQuantity2);
const gemsQuantity3 = gemsToDiamond(100, 5, 1);
console.log(gemsQuantity3);
