/****************************************/
/*                                      */
/*       MIXED MESSAGES PROGRAM         */
/*                                      */
/****************************************/


/********** ARRAYS **********/ 

// Arrays containing the randomized CHARACTER properties dependant on style.
let charAnimal = ['cat','dog','penguin','bunny rabbit','bear','duck','squirrel'];
let charFruit = ['strawberry','banana','apple','pear','bunch of grapes','tomato','pineapple'];
let charShape = ['circle', 'square', 'rectangle','triangle','star','cloud','heart'];

// Arrays conatinined the randomized COLOR properties dependant on mood.
let colAngry = ['red','dark orange','flame coloured','maroon','crimson','purple','brown'];
let colHappy = ['pink','yellow','light blue','rainbow coloured','gold','silver','white'];
let colSad = ['blue','violet','grey','green','dark green','dark blue','purple'];

// Arrays containing the randomized ITEMS dependant on preference.
let itCloth = ['handbag','rucksack','baseball cap','top hat','monacle','watch','belt'];
let itToy = ['stuffed toy','water gun','toy car',' super hero figurine','gameboy','lego set','colouring book'];
let itSport = ['baseball bat','football','golf club','basketball','cricket bat','pool cue','lucky dart'];

//Arrays containing the above
let charArray =[charAnimal, charFruit, charShape];
let colArray = [colAngry, colHappy, colSad];
let itArray = [itCloth, itToy, itCloth];


/********** FUNCTIONS **********/

// Function to select random item from array
const selectRandom = (array) =>{
    let ranNum = (Math.floor(Math.random() * array.length));
    return array[ranNum];
};

const upToSeven = () => {
    let num = Math.floor(Math.random()* 7);
    return num;
};
//Below to test selectRandom()
//console.log(selectRandom(colSad))

let ranCharArray = selectRandom(charArray)[upToSeven()];
let ranColArray = selectRandom(colArray)[upToSeven()];
let ranItArray = selectRandom(itArray)[upToSeven()];

console.log("Your character is a " + ranColArray + " " + ranCharArray + " who likes to carry a " + ranItArray + ".");