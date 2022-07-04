var hello = function (a) {
    return function (b, c) {
        return a + " " + b + " " + c;
    };
};
var world = hello("hello");
var helloWorld = world("world", ":)");
console.log(helloWorld);
