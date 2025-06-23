// Iteration method
// const removeFromArray = function(arr, ...args) {
//     const newArray = [];

//     arr.forEach((item) => {
//         if (!args.includes(item)) {
//             newArray.push(item);
//         }
//     });

//     return newArray;
// };

// Filter method:
const removeFromArray = function(arr, ...args) {
    return arr.filter((val) => !args.includes(val));
}

// Do not edit below this line
module.exports = removeFromArray;
