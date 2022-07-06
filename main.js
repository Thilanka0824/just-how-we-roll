/**********
 * DATA *
 **********/


let sixes = []; //[1,3,1]
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const getRanNumForDub = function() {
    const rand2 = (Math.random() * 11) + 1;
    const resultDouble = Math.ceil(rand2) 
    return resultDouble;
}


/*******************
 * YOUR CODE BELOW *
 *******************/

/*******************
 * QUERY SELECTORS *
 *******************/

//let button_d6 = document.querySelector('#d6-button');
//regular die
let image_d6 = document.querySelector('#d6-roll');
let mean_d6 = document.querySelector('#d6-rolls-mean')


//double die images
let image_double_1 = document.querySelector('#double-d6-roll-1') 
let image_double_2 = document.querySelector('#double-d6-roll-2') 
let mean_double = document.querySelector('#double-d6-rolls-mean')


//12 side die
let image_d12 = document.querySelector('#d12-roll')
let mean_d12 = document.querySelector('#d12-rolls-mean')

//20 side die
let image_d20 = document.querySelector('#d20-roll')
let mean_d20 = document.querySelector('#d20-rolls-mean')


//reset button
let resetButton = document.querySelector('#reset-button');


/*******************
 * EVENT LISTENERS *
 *******************/
//regular die
image_d6.addEventListener('click', d6RollFunction); 

//double die
image_double_1.addEventListener('click', doubleRollFunction); 
image_double_2.addEventListener('click', doubleRollFunction); 

//12 side die
image_d12.addEventListener('click', d12RollFunction);

//20 side die
image_d20.addEventListener('click', d20RollFunction);


//reset button
resetButton.addEventListener('click', resetFunction);

/******************
 * RESET FUNCTION *
 ******************/
resetFunction()
function resetFunction(){

    console.log('reset button clicked');
    //Empty all global roll arrays
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    //change dice buttons to starting images
    //single die
    image_d6.src = "./images/start/d6.png" //grab the images from local directory

    //double die
    image_double_1.src = "./images/start/d6.png" 
    image_double_2.src = "./images/start/d6.png" 
    
    //12 side die
    image_d12.src = "./images/start/d12.jpeg"
    
    //20 side die
    image_d20.src = "images/start/d20.jpg"

    //change text in our mean areas to N/A
    mean_d6.innerText = "N/A";
    mean_double.innerText = "N/A";
    mean_d12.innerText = "N/A";
    mean_d20.innerText = "N/A";



}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6RollFunction(){
    let result = getRandomNumber(6)
    // console.log(result);
    let howMany = 0
    
    
    if(result === 1){
        image_d6.src = './images/d6/1.png'
    } else if(result === 2){
        image_d6.src = './images/d6/2.png'
    } else if(result === 3){
        image_d6.src = './images/d6/3.png'
    } else if(result === 4){
        image_d6.src = './images/d6/4.png'
    } else if(result === 5){
        image_d6.src = './images/d6/5.png'
    } else if(result === 6){
        image_d6.src = './images/d6/6.png'
    }

    sixes.push(result);
    // console.log(sixes);

    const total = sixes.reduce((acc, curr) => {return acc + curr}); //adds all the accumilated(acc) numbers to the current(curr) number and returns the result
    
    howMany = sixes.length //checks the length of sixes array
    // console.log(`howMany: ${howMany}`); 
    // console.log(`total: ${total}`);
    // console.log(`mean: ${total / howMany}`); //divides the total by how many
    const meanRes_D6 = total / howMany
    mean_d6.innerText = meanRes_D6

}
//d6RollFunction()

////===============================================================
////doubleRoll

function doubleRollFunction(){
    let result2 = getRanNumForDub(12)
    //console.log(`result2: ${result2}`);
    
    let howMany2 = 0
    
    if(result2 === 2){
        image_double_1.src = './images/numbers/1.png'
        image_double_2.src = './images/numbers/1.png'
    } else if(result2 === 3){
        image_double_1.src = './images/numbers/1.png'
        image_double_2.src = './images/numbers/2.png'
    } else if(result2 === 4){
        image_double_1.src = './images/numbers/2.png'
        image_double_2.src = './images/numbers/2.png'
    } else if(result2 === 5){
        image_double_1.src = './images/numbers/2.png'
        image_double_2.src = './images/numbers/3.png'
    } else if(result2 === 6){
        image_double_1.src = './images/numbers/3.png'
        image_double_2.src = './images/numbers/3.png'
    } else if(result2 === 7){
        image_double_1.src = './images/numbers/3.png'
        image_double_2.src = './images/numbers/4.png'
    } else if(result2 === 8){
        image_double_1.src = './images/numbers/4.png'
        image_double_2.src = './images/numbers/4.png'
    } else if(result2 === 9){
        image_double_1.src = './images/numbers/4.png'
        image_double_2.src = './images/numbers/5.png'
    } else if(result2 === 10){
        image_double_1.src = './images/numbers/5.png'
        image_double_2.src = './images/numbers/5.png'
    } else if(result2 === 11){
        image_double_1.src = './images/numbers/5.png'
        image_double_2.src = './images/numbers/6.png'
    } else if(result2 === 12){
        image_double_1.src = './images/numbers/6.png'
        image_double_2.src = './images/numbers/6.png'
    } 
    

    doubleSixes.push(result2);
    // console.log(`doubleSixes: ${doubleSixes}`);

    const total2 = doubleSixes.reduce((acc, curr) => {return acc + curr});
    // return acc + curr; //adds all the accumilated(acc) numbers to the current(curr) number and returns the result
   
    
    howMany2 = doubleSixes.length //checks the length of sixes array
    // console.log(`howMany2: ${howMany2}`); 
    // console.log(`total2: ${total2}`);
    // console.log(`mean2: ${total2 / howMany2}`); //divides the total by how many
    const meanRes_double = total2 / howMany2
    mean_double.innerText = meanRes_double
}

////===========================================================================
//12 side die

function d12RollFunction(){
    let result3 = getRandomNumber(12)
    // console.log(result3);
    let howMany3 = 0
    
    
    if(result3 === 1){
        image_d12.src = './images/numbers/1.png'
    } else if(result3 === 2){
        image_d12.src = './images/numbers/2.png'
    } else if(result3 === 3){
        image_d12.src = './images/numbers/3.png'
    } else if(result3 === 4){
        image_d12.src = './images/numbers/4.png'
    } else if(result3 === 5){
        image_d12.src = './images/numbers/5.png'
    } else if(result3 === 6){
        image_d12.src = './images/numbers/6.png'
    } else if(result3 === 7){
        image_d12.src = './images/numbers/7.png'
    } else if(result3 === 8){
        image_d12.src = './images/numbers/8.png'
    } else if(result3 === 9){
        image_d12.src = './images/numbers/9.png'
    } else if(result3 === 10){
        image_d12.src = './images/numbers/10.png'
    } else if(result3 === 11){
        image_d12.src = './images/numbers/11.png'
    } else if(result3 === 12){
        image_d12.src = './images/numbers/12.png'
    }

    twelves.push(result3);
    // console.log(twelves);

    const total3 = twelves.reduce((acc, curr) => {return acc + curr}); //adds all the accumilated(acc) numbers to the current(curr) number and returns the result
    
    howMany3 = twelves.length //checks the length of sixes array
    // console.log(`howMany3: ${howMany3}`); 
    // console.log(`total3: ${total3}`);
    // console.log(`mean3: ${total3 / howMany3}`); //divides the total by how many
    const meanRes_D12 = total3 / howMany3
    mean_d12.innerText = meanRes_D12

}

////===========================================================================
//20 side die

function d20RollFunction(){
    let result4 = getRandomNumber(20)
    // console.log(result4);
    let howMany4 = 0
    
    
    if(result4 === 1){
        image_d20.src = './images/numbers/1.png'
    } else if(result4 === 2){
        image_d20.src = './images/numbers/2.png'
    } else if(result4 === 3){
        image_d20.src = './images/numbers/3.png'
    } else if(result4 === 4){
        image_d20.src = './images/numbers/4.png'
    } else if(result4 === 5){
        image_d20.src = './images/numbers/5.png'
    } else if(result4 === 6){
        image_d20.src = './images/numbers/6.png'
    } else if(result4 === 7){
        image_d20.src = './images/numbers/7.png'
    } else if(result4 === 8){
        image_d20.src = './images/numbers/8.png'
    } else if(result4 === 9){
        image_d20.src = './images/numbers/9.png'
    } else if(result4 === 10){
        image_d20.src = './images/numbers/10.png'
    } else if(result4 === 11){
        image_d20.src = './images/numbers/11.png'
    } else if(result4 === 12){
        image_d20.src = './images/numbers/12.png'
    } else if(result4 === 13){
        image_d20.src = './images/numbers/13.png'
    } else if(result4 === 14){
        image_d20.src = './images/numbers/14.png'
    } else if(result4 === 15){
        image_d20.src = './images/numbers/15.png'
    } else if(result4 === 16){
        image_d20.src = './images/numbers/16.png'
    } else if(result4 === 17){
        image_d20.src = './images/numbers/17.png'
    } else if(result4 === 18){
        image_d20.src = './images/numbers/18.png'
    } else if(result4 === 19){
        image_d20.src = './images/numbers/19.png'
    } else if(result4 === 20){
        image_d20.src = './images/numbers/20.png'
    }

    twenties.push(result4);
    // console.log(twenties);

    const total4 = twenties.reduce((acc, curr) => {return acc + curr}); //adds all the accumilated(acc) numbers to the current(curr) number and returns the result
    
    howMany4 = twenties.length //checks the length of sixes array
    // console.log(`howMany4: ${howMany4}`); 
    // console.log(`total4: ${total4}`);
    // console.log(`mean4: ${total4 / howMany4}`); //divides the total by how many
    const meanRes_D20 = total4 / howMany4
    mean_d20.innerText = meanRes_D20

}


/****************
 * MATH SECTION *
 ****************/
