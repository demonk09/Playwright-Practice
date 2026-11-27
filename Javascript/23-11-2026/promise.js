//promise is a javascript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise resolved");
    }, 2000);
});

promise.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});