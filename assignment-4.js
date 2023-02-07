// Problem-1 is required to provide a number which will be responsively multiplied by 3, addition by 10, divided by 2 and then 2 will be subtracted. If the input is not valid will give an error otherwise subtraction will return as output.

function mindGame(numbers){
    const theMultiply = numbers*3;
    const additionToMultiply = theMultiply + 10;
    const divisionOfAddition = additionToMultiply / 2;
    const subtraction = divisionOfAddition - 5;
    if(typeof numbers != 'number'){
        return 'ERROR: please insert a number';
    }
    else{
        return subtraction;
    }
}
// let chosenNumber = mindGame(50);
// console.log(chosenNumber);
// let input1 = mindGame();
// console.log(input1);
// let input2 = mindGame();
// console.log(input2);
// let input3 = mindGame();
// console.log(input3);


// // problem-2 is said to put string as input so that the total number of character in the string can be find as even or odd Or if the input is not valid will give an error.

function evenOdd(words){
    let totalCharacter = words.length;
    const remainder = totalCharacter % 2;
    if(typeof words != 'string'){
        return 'ERROR: please insert only string';
    }
    else if(remainder === 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}
// const text = evenOdd('wow');
// console.log(text);

// In this problem-3, a number is subtracted by 7 and if the subtraction value less than 7 function will return the value, If it is greater or equals to 7 then function will return the input as doubled or if the input is not valid will give an error.

function isLGSeven(input){
    const value = input - 7;
    const double = input*2;
    if(typeof input != 'number'){
        return 'ERROR: please insert a number';
    }
    else if(value >= 7){
        return double;
    }
    else{
        return value;
    }
}
// const inputNumber = isLGSeven(20);
// console.log(inputNumber);


// // problem-4 is required only an array where will be many negative & positive values. Function will show how many negative values are there and will return it. If the input is not an array will give an error case.

function findingBadData(arrayOfNumbers){
    const badData = [];
    for(let i = 0; i < arrayOfNumbers.length; i++){
        const dataPosition = i;
        const  dataValues = arrayOfNumbers[dataPosition];
        if(Array.isArray(arrayOfNumbers) !== true){
            return 'ERROR: please insert an array';
        }
        else if (dataValues < 0){
            badData.push(dataValues);
        } 
    }return badData.length;
}
// const array = 'wow';
// const array2 = findingBadData(array);
// console.log(array2);



// problem-5 has some fixed quantity to multiply by inputs. Then all the multiplication will be added together and if the addition is < 1000*2 addition will be returned otherwise 1000*2 will be deducted from the addition.

function gemsToDiamond(quantity1, quantity2, quantity3){
    const firstFriendsGem = quantity1*21;
    const secondFriendsGem = quantity2*32;
    const thirdFriendsGem = quantity3*43;
    
    const totalDiamonds = firstFriendsGem + secondFriendsGem + thirdFriendsGem;
    const diamond = totalDiamonds - 2000;
    if(typeof quantity1 !== 'number' && typeof quantity2 !== 'number' && typeof quantity3 !== 'number'){
        return 'ERROR: please provide valid number'
    }
    else if(totalDiamonds < 1000*2 ){
         return totalDiamonds;
    }
    else(totalDiamonds >= 1000*2)
        return diamond;
}
// const gemsQuantity =gemsToDiamond();
// console.log(gemsQuantity);