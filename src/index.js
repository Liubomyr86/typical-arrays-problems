
exports.min = function min (array) {
    if (array == 0 || array == null) {
        return 0;
        } else {
        return Math.min(...array);
        }
}

exports.max = function max (array) {
    if (array == 0 || array == null) {
        return 0;
        } else {
        return Math.max(...array);
        }
}

exports.avg = function avg (array) {
    if (array == 0 || array == null) {
        return 0;
        } else {return array.reduce(function(a,b){
            return a + b
          }, 0)/array.length;
    }
}
