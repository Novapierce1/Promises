var promise = new Promise(function (resolve) {
    setTimeout (function(){
       resolve ('FULFILLED!')
    }, 300);
});

var print = function(){
    promise.then(function(fulfill){
        console.log(fulfill)
    })
} 
print();