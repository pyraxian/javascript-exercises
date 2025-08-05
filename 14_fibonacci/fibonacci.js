const fibonacci = function(num) {
    let fibCount = parseInt(num);
        
    if (fibCount < 0 ) return "OOPS";

    let previous1 = 0;
    let previous2 = 0;
    let next = 0;

    for (let i = 0; i < Number(num); i++) {
        next = previous1 + previous2;
        if (next == 0) next++;
        previous2 = previous1;
        previous1 = next;
        // console.log(`Current number is ${next}`);
    }

    return next;
};

// Do not edit below this line
module.exports = fibonacci;
