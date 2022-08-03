//Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i =0; i < 7; i++) {
    let hastag = '';
    for (let j=0; j <= i; j++) {
        hastag += "#";
    }
    console.log(hastag);
}