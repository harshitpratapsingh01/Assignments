const express = require('express');
const validator = require("validator");
const app = express();
const port = 2000;
const Joi = require('joi');
app.use(express.json());



let details = [
    {
        "id": 1,
        "username": "Jatin Sir",
        "email": "jatin.singh@appinventiv.com",
        "role": "Mentor"
    },
    {
        "id": 2,
        "username": "Harshit",
        "email": "harshit.singh@appinventiv.com",
        "role": "Trainee"
    },
    {
        "id": 3,
        "username": "Sagar",
        "email": "sagar.1@appinventiv.com",
        "role": "Trainee"
    },
    {
        "id": 4,
        "username": "Jai",
        "email": "jai.singh@gmail.com",
        "role": "nalla"
    }
];

const schema = Joi.object({
    
})

app.get('/:id', (req, res) => {
    try{
        const id = Number(req.params.id);
        const user = details.find((find_id) => find_id.id === id);
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(500).json("User Not Found");
        }
        // res.json(details);
        // console.log(req);
    }
    catch{
        res.status(500).send("Server error");
    }
});

app.post('/', (req, res) => {
    try{
        const new_data = req.body;
        if(Object.keys(new_data).length >=2){
            console.log(Object.keys(new_data).length);
            if(new_data.id != null && new_data.username  != null && new_data.email != null){
                if (validator.isEmail(new_data.email)) {
                    details.push(new_data);
                    res.status(200).json({ statusCode: '200', status: "Success", details });
                }
                else {
                    res.status(406).json({statusCode: '406', status:"Please ender valid email"});
                }
            }
            else{
                res.status(406).json({statusCode: '406', status: "Not Acceptable"});
            }
        }
        else{
            res.status(406).json({statusCode: '406', status:"Please ender valid email"});
        }
    }
    catch{
        res.status(400).send({ statusCode: '400', status: 'Bad Request' });
    }
});

app.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    
    const person = details.find((account) => account.id === id);
    const index = details.indexOf(person);

    console.log(person);
    console.log(index);
    const updatedAccount = {...person,...body };

    console.log(updatedAccount);
    details[index] = updatedAccount;

    res.send(details);

});

app.delete('/:id', (req,res) => {
    const id = Number(req.params.id);
    const newDetail = details.filter((find_id) => find_id.id != id);

    console.log(newDetail);

    if(!newDetail){
        res.json("error");
    }
    else{
        details = newDetail;
        res.json(details);
    }
});

app.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const person = details.find((account) => account.id === id);
    const index = details.indexOf(person);

    console.log(person);
    console.log(index);
    const updatedUser = {...person,...body};

    console.log(updatedUser);
    details[index] = updatedUser;

    res.send(details);

});
app.get('/new', (req,res) => {
    res.send()
})

app.listen(port, () => {
    console.log(`listening at: ${port}`);
});
