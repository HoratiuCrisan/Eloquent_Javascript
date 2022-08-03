/* Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties,
where the values of the properties are equal when compared with a recursive call to deepEqual.
To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. 
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/


function deepEqual(first, second) {
    if ((typeof first == 'object' && first != null) && (typeof second == 'object' && second != null)) {
        let count = [0, 0];
        for (let key in first) count[0]++;
        for (let key in second) count[1]++;

        if (count[0]-count[1] != 0) 
            return false;
        for (let key in first) {
            if (!(key in second) || !deepEqual(first[key], second[key]))
                return false;
        }
        for (let key in second)
            if (!(key in first) || !deepEqual(second[key],first[key])) {
                return false;
        }
        return true;
    }
    else 
        return first === second;
}

let obj = {here:2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here:1}));
console.log(deepEqual(obj, {here: 2}));
console.log(obj === {here: 2});