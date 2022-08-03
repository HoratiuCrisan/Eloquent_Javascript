function every(array, test) {
    let count = 0;
    for (let elem of array) {
        if (test(elem))
            count++;
    }   
    if (count == array.length)
        return true;
    else 
        return false;
}

function every2(array, test) {
    return !array.some(elem => !test(elem));
}
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

  console.log(every2([1, 3, 5], n => n < 10));
  // → true
  console.log(every2([2, 4, 16], n => n < 10));
  // → false
  console.log(every2([], n => n < 10));
  // → true  