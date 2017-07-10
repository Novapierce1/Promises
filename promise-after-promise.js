var firstp = firstp();
var secondp = firstp.then (function (value){
    return second(value);
});

secondp.then(console.log);