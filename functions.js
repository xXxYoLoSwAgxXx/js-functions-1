/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 **/

 function numberToString (n){
    let num = n.toString();
    return num;
 }
 convertToNumber();

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase (n){
    let num = n + 1;
    return num;
}
increase(3);
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease (n){
    let num = n - 1;
    return num;
}
decrease(3);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x, y){
    let add = x+y;
    return add;
}
add(3,4);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x, y){
    let sub = x - y;
    return sub;
}
subtract()

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(x, y){
    return x * y;
 }



/**
 * Divides the first number by the second.
 * @param {number} x 
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x, y){
    let div = x/y;
    return div;
}
divide();

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x){
    let mult = x*x;
    return mult;
}
mult();

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate (operation, x, y){
    if (operation === "add"){
        console.log(x + ' + ' + y + ' = ' + (x+y));
        return x+y;
    } else if (operation === "subtract"){
        console.log(x + ' - ' + y + ' = ' + (x-y))
        return x-y;
    } else if (operation === "divide"){
        console.log(x + ' / ' + y + ' = ' + (x/y));
        return x/y;
    } else if (operation === "multiply") {
        console.log(x + ' * ' + y + ' = ' + (x*y));
        return x*y;
    }
}
calculate();
/** 
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan (a, b){
    if (a>b){
        return true;
    } else {
        return false;
    }
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan (a, b){
    if (a<b){
        return true;
    } else {
        return false;
    }
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual (a, b){
    if (a===b){
        return true;
    } else {
        return false;
    }
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(x, y){
    return Math.min(x, y);
}
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(x, y){
    return Math.max(x, y);
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven (n){
    if (n%2 ===0){
    } return true;
}
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd (n){
    if (n%2 === 1){
    } return true;
}
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade (score, total){
    var percent = (score / total) * 100
    if (percent >= 90){
        return "A";
    } else if(percent >= 80){
        return "B";
    } else if (percent >= 70){
        return "C";
    } else if (percent >= 60){
        return "D"
    } else {
        return "F";
    }
}
letterGrade()

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews (restaurant){
    if (Object.keys(restaurant).includes('reviews')){
        restaurant.reviews = restaurant.reviews + 1;
    } else {
        restaurant.reviews = 1;
    }
    return restaurant;
}
incrementReviews()
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine (word1, word2){
    var join = word1 + ' ' + word2;
    return join;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle (radius){
    let circle = {};
    circle.circumference = 2 * Math.PI * radius;
    circle.area = Math.PI * Math.pow(radius, 2);
    return circle;
}
createCircle()