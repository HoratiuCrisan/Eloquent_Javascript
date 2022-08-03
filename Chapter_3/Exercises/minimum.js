//Write a function min that takes two arguments and returns their minimum 

function min(first, second) {
    if (first < second)
        return first;
    else 
        return second;
}

console.log(min(0,10));
console.log(min(0,-10));