/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
     return result;
};

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
};

/*******************
 * YOUR CODE BELOW *
 *******************/
 let OneDice = document.querySelector("#d6-roll");
 OneDice.src = 'images/start/d6.png';
 let DoubleDice1 = document.querySelector('#double-d6-roll-1');
 DoubleDice1.src = 'images/start/d6.png';

 let DoubleDice2= document.querySelector('#double-d6-roll-2');
 DoubleDice2.src = 'images/start/d6.png';
 let TwentyDice = document.querySelector('#d20-roll');
 TwentyDice.src = 'images/start/d20.jpg'
 let TwiveDice = document.querySelector('#d12-roll');
TwiveDice.src = 'images/start/d12.jpeg';
let ResetB = document.querySelector('#reset-button');
let Mean1 = document.querySelector("#d6-rolls-mean");
let Mean20 = document.querySelector('#d20-rolls-mean');
let MeanD6x2 = document.querySelector("#double-d6-rolls-mean");
let Mean12 = document.querySelector("#d12-rolls-mean");
let medianD6 = document.querySelector("#d6-rolls-median")
let sorted = sortByNumber(sixes);

let zero = '0';


/*******************
 * EVENT LISTENERS *
 *******************/
ResetB.addEventListener('click',reset);
OneDice.addEventListener('click',Dice1);
DoubleDice1.addEventListener('click',DoubleDiceOne);
TwiveDice.addEventListener('click',TwiveDice1);
TwentyDice.addEventListener('click',twenties1);



/******************
 * RESET FUNCTION *
 ******************/
function reset(){
OneDice.src = 'images/start/d6.png';
DoubleDice1.src = 'images/start/d6.png';
DoubleDice2.src = 'images/start/d6.png';
TwiveDice.src = 'images/start/d12.jpeg';
TwentyDice.src = 'images/start/d20.jpg';
 sixes = [];
 doubleSixes = [];
 twelves = [];
 twenties = [];
Mean1.innerText = '0';
Mean12.innerText = '0';
Mean20.innerText = '0';
MeanD6x2.innerText = '0';
};

function DoubleDiceOne(){
let roll1 = getRandomNumber(6);

if (roll1===1) {
  DoubleDice1.src = 'images/d6/1.png';
}else if (roll1 === 2){
  DoubleDice1.src = 'images/d6/2.png';
  
}else if(roll1===3){
  DoubleDice1.src = 'images/d6/3.png';  
}else if (roll1===4){
DoubleDice2.src = 'images/d6/4.png';
}else if(roll1===5){
  DoubleDice1.src = 'images/d6/5.png';
}else if (roll1===6){
  DoubleDice1.src = 'images/d6/6.png';
}let roll2 = getRandomNumber(6);
 if(roll2===1){
  DoubleDice2.src = 'images/d6/1.png';
}else if (roll2===2){
  DoubleDice2.src = 'images/d6/2.png';
}else if (roll2 ===3){
  DoubleDice2.src = 'images/d6/3.png';
}else if(roll2===4){
  DoubleDice2.src = 'images/d6/4.png';
}else if(roll2===5){
  DoubleDice2.src = 'images/d6/5.png';
}else if (roll2===6){
  DoubleDice2.src = 'images/d6/6.png';
}
let addup = roll1+roll2; 
doubleSixes.push(addup);
console.log(doubleSixes);
let average = getAverage(doubleSixes);
average;
console.log(average);
MeanD6x2.innerText = average;
}

function Dice1(){

  let roll = getRandomNumber(6);
  if (roll===1) {
    OneDice.src = 'images/d6/1.png';
  }else if (roll ===2){
    OneDice.src = 'images/d6/2.png';
  }else if(roll===3){
    OneDice.src = 'images/d6/3.png';
  }else if(roll===4){
    OneDice.src = 'images/d6/4.png';
  }else if(roll===5){
    OneDice.src = 'images/d6/5.png';
  }else if(roll===6){
    OneDice.src = 'images/d6/6.png';
  }   
    
  
  sixes.push(roll);
  console.log(sixes);
 
let average = getAverage(sixes);
average;
//console.log(average);
let median = getMedian(sixes);
let displayAverage = document.querySelector('#d6-rolls-mean');
displayAverage.innerHTML=average;
getMedian(sixes); 
medianD6.innerHTML=sorted;

console.log(median);



  }



function TwiveDice1(){
  let roll = getRandomNumber(12);
  if (roll===1) {
    TwiveDice.src = 'images/numbers/1.png'
  }else if(roll===2){
    TwiveDice.src = 'images/numbers/2.png'
  }else if(roll===3){
    TwiveDice.src = 'images/numbers/3.png'
  }else if(roll===4){
    TwiveDice.src = 'images/numbers/4.png'
  }else if(roll===5){
    TwiveDice.src = 'images/numbers/5.png'
  }else if(roll===6){
    TwiveDice.src = 'images/numbers/6.png'
  }else if(roll===7){
    TwiveDice.src = 'images/numbers/7.png'
  }else if(roll===8){
    TwiveDice.src = 'images/numbers/8.png'
  }else if(roll===9){
    TwiveDice.src = 'images/numbers/9.png'
  }else if(roll===10){
    TwiveDice.src = 'images/numbers/10.png'
  }else if(roll===11){
    TwiveDice.src = 'images/numbers/11.png'
  }else if(roll===12){
    TwiveDice.src = 'images/numbers/12.png'
  }
  twelves.push(roll);
console.log(twelves);
let average = getAverage(twelves);
average;
console.log(average);
Mean12.innerText=average;

}

function twenties1(){
let roll = getRandomNumber(20);
if (roll===1) {
  TwentyDice.src = 'images/numbers/1.png'
}else if(roll===2){
  TwentyDice.src = 'images/numbers/2.png'
}else if(roll===3){
  TwentyDice.src = 'images/numbers/3.png'
}else if(roll===4){
  TwentyDice.src = 'images/numbers/4.png'
}else if(roll===5){
  TwentyDice.src = 'images/numbers/5.png'
}else if(roll===6){
  TwentyDice.src = 'images/numbers/6.png'
}else if(roll===7){
  TwentyDice.src = 'images/numbers/7.png'
}else if(roll===8){
  TwentyDice.src = 'images/numbers/8.png'
}else if(roll===9){
  TwentyDice.src = 'images/numbers/9.png'
}else if(roll===10){
  TwentyDice.src = 'images/numbers/10.png'
}else if(roll===11){
  TwentyDice.src = 'images/numbers/11.png'
}else if(roll===12){
  TwentyDice.src = 'images/numbers/12.png'
}else if(roll===13){
  TwentyDice.src = 'images/numbers/13.png'
}else if(roll===14){
  TwentyDice.src = 'images/numbers/14.png'
}else if(roll===15){
  TwentyDice.src = 'images/numbers/15.png'
}else if(roll===16){
  TwentyDice.src = 'images/numbers/16.png'
}else if(roll===17){
  TwentyDice.src = 'images/numbers/17.png'
}else if(roll===18){
  TwentyDice.src = 'images/numbers/18.png'
}else if(roll===19){
  TwentyDice.src = 'images/numbers/19.png'
}else if(roll===20){
  TwentyDice.src = 'images/numbers/20.png'
}
twenties.push(roll);
console.log(twenties);
let average = getAverage(twenties);
console.log(average);
let displayAverage = document.querySelector('#d20-rolls-mean');
displayAverage.innerHTML=average;
};
function getAverage2(array,ID){
let average = getAverage(array);
let displayAverage = document.querySelector(ID);
displayAverage.innerHTML=average;
};






/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
 function getAverage(arrays){
  let sum = 0;

  for(const array of arrays){
    sum += array;
  }

  return Math.ceil(sum/arrays.length);
}

function getMedian(array){
  if( array.length === 0){
    return 0;
  }
  //[ 0, 3, 7]
  //[10, 11, 12, 13, 14, 15, 16, 17 , 18]
 //[15, 17, 6, 5, 1005] middle is 6
 //[5, 6, 15, 17, 1005] middle is 15, which is the median
 //[1005, 17, 15, 6, 5]


  //[0, 2, 3, 7] 4/2 = 2    4/2-1= 1
 //[0, 1, 2, 3, 4, 5] 6/2 =3 
  let sorted = sortByNumber(array);
  console.log(sorted);
  if (sorted.length % 2 === 0){
    //Array is even, find two middle most numbers and average them
    let middleHigh = sorted.length/2; 
    let middleLow = (sorted.length/2) - 1;
    let trueMiddle = (sorted[middleHigh] + sorted[middleLow]) / 2;
    return trueMiddle;
  } else {
    //Array is odd
    let middleIndex = Math.floor(sorted.length/2); 
    return sorted[middleIndex];
  }

}


function getMode(array) {
  //[2, 3, 3, 4, 6]
  /*
  countObject = {
    2 : 1
    3 : 2
    4 : 1
    6 : 1
  }
  */

  let countObject = {};
  
  //create keys for each number in array

  for (let number of array){
    if (countObject[number] >= 1){
      countObject[number]++;
    } else {
      countObject[number] = 1;
    }
  }

  let highestUniqueNumber = 0;
  let highestCount = 0;
  let keys = Object.keys(countObject); //returns a string array of each key in the object that we passed in
  
  //Get number with highest count
  for(let number of keys){
    let value = countObject[number];
    if(value > highestCount){
      highestCount = value;
      highestUniqueNumber = number;
    }
  }

  return highestUniqueNumber;

}