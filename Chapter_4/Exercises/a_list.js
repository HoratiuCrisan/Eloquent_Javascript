/* Write a function arrayToList that builds up a list.
Also write a listToArray fucntion that produces an array form a list.
Then add a helper function prepend, 
which takes an element and a list and creates a new list that adds the elem.
of the front of the input list, and nth, which takes a list and a number
and returns the element at the given position in the list or 
undefined when there is no such elem.
*/

function arrayToList(my_array) {
    let my_list = null;
    for (let i =0; i< my_array.length; i++) {
        my_list = {value: my_array[i], rest: my_list};
    }
    return my_list;
}

let my_list = arrayToList([5,2,3]);
console.log("Values in the list: ");
for (let node = my_list; node; node =node.rest) {
    console.log(node.value);
}

function listToArray(my_list) {
    let new_array = [];
    for (let node = my_list; node; node = node.rest) {
        new_array.push(node.value);
    }
    return new_array;
}

console.log("Values in the array: ");
let my_array = listToArray(my_list);
console.log(my_array);

function prepend(elem, list) {
    let my_last_list = {};
    my_last_list = {value: elem, rest : list};
    return my_last_list;
}

let prop_list = prepend(14, my_list);
console.log("Values in the new list: ");
for (let new_node = prop_list; new_node; new_node = new_node.rest) {
    console.log(new_node.value);
}

function nth(list, number) {
    let contor = 0;
    for (let temp = list; temp; temp = temp.rest) {
        if (contor === number) {
            return temp.value;
        }
        contor++;
    }
    //return undefined;
}

let number = nth(prop_list, 3);
console.log("Value at the given position: " + number);