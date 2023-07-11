const express = require("express");
const calci = require("./calculator");
const app = express();
const port = 3001;

app.use(express.json());

app.post('/calci', (req,res) => {

    console.log(req.body);
    const{type,n1,n2} = req.body;

    let ans;
    switch (type)
    {
        case 'add':
            ans = calci.sum(n1,n2);
            break;

        case 'sub':
            ans = calci.sum(n1,n2);
            break;

        case 'mul':
            ans = calci.mul(n1,n2);
            break;

        case 'percent':
            ans = calci.percent(n1,n2);
            break;

        case 'pow':
            ans = calci.pow(n1,n2);
            break;

        case 'log':
            ans = calci.log(n1);
            break;

        case 'sqrt':
            ans = calci.sqrt(n1);
            break;

        default:
            ans = "Invalid";
    }

    res.send(`Result is : ${ans}`);
});
app.listen(port, () => {
    console.log(`Listening ${port}`);
});