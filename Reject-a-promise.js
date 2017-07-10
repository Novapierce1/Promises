var promise = new Promise(function (resolve, reject) {
    setTimeout (function(){
        var error = new Error('REJECTED!');
        reject(error);  
    }, 300);
});


function onReject(error) {
    console.log(error.message)
}
promise.then(null, onReject)