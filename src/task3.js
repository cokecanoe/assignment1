var f = function (g, a) {
    return function (b) {
        var y = g(a, b);
        return y;
    };
};
var result = f(function (c, d) {
    if (JSON.stringify(c) == d) {
        return true;
    }
    else
        return false;
}, 4);
console.log(result('gsdfsdfs'));
console.log(result('4'));
