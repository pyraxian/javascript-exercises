const sumAll = function(a, b) {
    let total = 0;

    if (!typeof(a) == 'number' || !typeof(b) == 'number') {
        return "ERROR";
    } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    } else if ((a < 0) || (b < 0)) {
        return "ERROR"
    } else {
        if (a > b) {
            [a, b] = [b, a];
        }
        for (let i = a; i <= b; i++) {
                total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
