/* Write a function countBs that takes a string as its only argument
and returns a number taht indicates how many uppercase "B" characters there are in the string.
Next, write a function called count CHar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase "B" characters).
Rewrite countBs to make use of this new function. */

function countBs(first) {
    let char = 'a';
    return countChar(first, char);
}

function countChar(first, second) {
    let count = 0;
    for (let i =0; i<first.length; i++) {
        if (first[i] === second)
            count++;
    }
    return count;
}

console.log(countBs("Banana"));

