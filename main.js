const express = require("express");
const calci = require("./calculator");
const app = express();
const port = 5000;


app.get("/calc/:type", (req,res) => {
    const a = 5
    const b = 6
    let result;
    if(req.params.type === "addition"){
        result = calci.sum(a,b);
    }
    else if(req.params.type === "substraction"){
        result = calci.sub(a,b);
    }
    else if(req.params.type === "multiply"){
        result = calci.mul(a,b);
    }
    else if(req.params.type === "power"){
        result = calci.pow(a,b);
    }
    else if(req.params.type === "sqrt"){
        result = calci.sqrt(a);
    }
    else if(req.params.type === "log"){
        result = calci.log(a);
    }
    else if(req.params.type == "percentage"){
        result = calci.percent(a,b);
    }
    res.send(`Ans is: ${result}`);
});



// app.get("/mul", (res,req) => {
//     let a = 5;
//     let b = 6;
//     let result = calci.mul(a,b);
//     req.send(`result is ${result}`);
// });

// app.get("/sub", (res,req) => {
//     let a = 5;
//     let b = 6;
//     let result = calci.sub(a,b);
//     req.send(`result is ${result}`);
// });

// app.get("/pow", (res,req) => {
//     let a = 5;
//     let b = 2;
//     let result = calci.pow(a,b);
//     req.send(`result is ${result}`);
// });

// app.get("/sqrt", (res,req) => {
//     let a = 5;
//     let result = calci.sqrt(a);
//     req.send(`result is ${result}`);
// });

// app.get("/log", (res,req) => {
//     let a = 5;
//     let result = calci.log(a);
//     req.send(`result is ${result}`);
// });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

