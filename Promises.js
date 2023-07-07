// var DidPayment = false;

// function message(){
//     console.log("Payment Successful");
// }

// function UserPayment(DidPayment, callback){
  
//     if(DidPayment){
//         callback();
//     }else{
//         UserPayment();
//         if(DidPayment){
//             callback();
//         }else{
//             UserPayment();
//             if(Didpayment){
//                 callback();
//             }else{
//                 UserPayment();

//             }
//         }
//     }
// }

// UserPayment(DidPayment, message);


// to overcome this problem we can use, promises in place of Callbacks for asynchronous tasks. \

var DidPayment = true;

function user(DidPayment){

    return new Promise( (resolve, reject) =>{
        if(DidPayment){
            setTimeout(()=>{
                resolve(100);
            },3000)
        }else{
            reject();
      }
    });
}


user(DidPayment).then ( (data) =>{
    console.log("User Payment Successful!");
}).catch(()=>{
    console.log("User Payment Canceled");
})


// 