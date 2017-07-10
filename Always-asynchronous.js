var promise = new Promise(function (fullfill, reject) {
    fullfill('PROMISE VALUE');
});
var promise2 = new Promise(function (fullfill, reject) {
    fullfill('MAIN PROGRAM')
});
promise2.then(console.log) 
promise.then(console.log)
