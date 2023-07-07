// Synchronous Program 
function print_message(){
    console.log("Welcome to my blog viewers ")
}
function Caller_function(callback){
    console.log("Before calling the callback function");
    callback();
    console.log("After calling the callback function")
}
Caller_function(print_message);

// Asynchronous

function print_message(){
    console.log("Welcome to my blog viewers ")
}
function Caller_function(callback){
    console.log("Before calling the callback function");
    setTimeout(callback, 3000);
    console.log("After calling the callback function")
}
Caller_function(print_message);