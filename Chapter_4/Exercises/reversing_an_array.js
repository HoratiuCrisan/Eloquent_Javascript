/* write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
Neither may use the standard reverse method. */
function reverseArray(my_array) {
    let new_array = [];
    for (let i of my_array) {
        new_array.unshift(i);
    }
    return new_array;
}

function reverseArrayInPlace(my_array) {
  let i = my_array.length-1;
  while(i > (my_array.length / 2)-1) {
    let elem = my_array[i];
    my_array[i] = my_array[my_array.length-i-1];
    my_array[my_array.length-i-1] = elem;
    i--;
  }
  return my_array;
}

console.log(reverseArray([1,2,3,4]));
console.log(reverseArrayInPlace([1,2,3,4]));