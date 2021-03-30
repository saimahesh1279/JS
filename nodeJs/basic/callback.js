function mainFunction(callback) {
    var someData = 'hi mahesh';
    callback(someData);
}
mainFunction(function(a) {
    console.log(a);
})
mainFunction(function(b) {
    console.log(b);
})