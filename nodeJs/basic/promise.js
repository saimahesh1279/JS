cal = function(x, y) {
    console.log("x= " + x, " y=" + y);
    positiveSum(x, y).then(function(result) {
        console.log("Sum = " + result)
    })
    console.log("end function");

}
positiveSum = function(x, y) {
    return new Promise(function(resolve, reject) {
        if (x + y > 0) {
            resolve(x + y);

        } else {
            reject("sum is lessthan zero")
        }
    })
}
cal(2, 9)