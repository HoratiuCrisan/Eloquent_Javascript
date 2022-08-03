/* Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character.
The characters should form a chessboard.
Passing this string to console.log should show something like this: 

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

let height = 8;
let width = 4;

for (let i =0; i<height; i++) {
    let my_string = '';
    for (let j=0; j< width; j++) {
        if (i % 2 == 0)
            my_string += ' #';
        else if (i % 2 != 0)
            my_string += '# ';
    }
    console.log(my_string);
}