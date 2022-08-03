/* Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number)
and return a Boolean. */

function isEven(number) {
    if (number < 0)
        return "Number less than 0!";
    else if (number == 1)
        return "One is odd.";
    else if (number == 0)
        return "Zero is even.";
    else
        return isEven(number-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));