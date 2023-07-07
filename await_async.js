// var DidPayment = true;
// async function UserPayment() {
//     try {
//         if (DidPayment) {
//             console.log("Payment Successful");
//         }
//     } catch (err) {
//         console.log("Payment cancel");
//     }
// }
// UserPayment();


function getData(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        },3000)
    })
}

async function start(){
    const result = await getData();
    console.log(result);

    // const result1 = await getData();
    // console.log(result1);
}

start();