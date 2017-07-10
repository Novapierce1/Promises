var promise = new Promise(function (fullfill, reject) {
    fullfill('I FIRED');
    var error = new Error('I DID NOT FIRE');
    reject(error);
});

function onRejected(error) {
    console.log(error.message)
}


promise.then(console.log,onRejected); 
