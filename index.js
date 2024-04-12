//first class citizens---how/why?
//functions can do the following
//1. Can be STORED as a VALUE in a variable
//2. Can be USED AS VALUES
//3. Can be used in EXPRESSIONS
//4. Can be RETURNED by another function
//5. Can be PASSED as a function's ARGUMENT
//6. Can be STORED in an array, stack, or queue
//7. Can have its OWN properties and methods
//8. Functions are OBJECTS - best description, special objects hence first class status
//9. FUNCTION DECLARATIONS are declared using the function keyword, they are not executed immediately, ather they are saved to be used later on when invoked. invoked - functionName()
//10. FUNCTION EXPRESSIONS - another way to define a function, they can be stored in variables and the variableca be used as a function, also do not need function names (anonymous), invoed using the varable name.
//11. FUNCTION HOISTING - JS default behaviour of moving DECLARATIONS to top of current scope, applies to variable declarations and function declarations. Functiones defined using an expression ARE NOT HOISTED

// function is anonymous because it it assigned to a variable, no function name.
//slice - index always starta at 0 for first element. this one extracts 0 & 1 BUT NOT 2. it means go up to but NOT INCLUDE second element
//['Antonia', 'Nuru', 'Amari', 'Mo'] //array
//array declared in global scope so it can be used later on
//I had a parameter but it was not being used - no argument for it(greyed out) so deleted it
//const driverArray = ['Antonia', 'Nuru', 'Amari', 'Mo']; //variable storing array as a value
const returnFirstTwoDrivers = function(driverArray) { //function expression, anonymous
    return driverArray.slice(0, 2); //return value, elements sliced out
};
//console.log(returnFirstTwoDrivers()); 

//slice - this starts from the 3rd last element up intil the end

const returnLastTwoDrivers = function(driverArray) { //similar to first function expression
    return driverArray.slice(-2);//slicing out last 2 drivers
};
//console.log(returnLastTwoDrivers());

//variable whose value is an array of functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


//function expression whose return value is another function. Param is multiplier, returned function param is price, final return value multiplies the 2 params
const createFareMultiplier = function (multiplier) {
    return function fare(price) {
        return multiplier * price;
    }
}
//console.log(createFareMultiplier(5));

//function createFareMultiplier (multiplier) {
    //return function fare(price) {
        //return multiplier = 4 * 6.25;
    ////}
//}

//variable that invokes a function expression by using variable name
// when invoking createFareMultiplier, using (2) sets the multiplier
const fareDoubler = createFareMultiplier(2)
console.log(fareDoubler(100));
//const fareDoubler = function(fare) {
    //return fare  * 2
//}
const fareTripler = createFareMultiplier(3)
console.log(fareTripler(100))
//const fareTripler = function(triple) {
    //return triple * 3
//}

//speak to Albert??? 
function selectDifferentDrivers(driverArray, callback) {
 
    return callback(driverArray);
}
//selectDifferentDrivers(driverArray, returnFirstTwoDrivers);


//console.log(driverArray, returnFirstTwoDrivers);
//selectDifferentDrivers(driverArray, returnLastTwoDrivers());
