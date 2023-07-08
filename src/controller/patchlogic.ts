import { details } from "../models/schema";

const changeUserData = (updateData ,id, req, res) => {
    const person = details.find((account) => account.id === id);
    const index = details.indexOf(person);

    console.log(person);
    console.log(index);

    if(!person){
        console.log("error");
        res.status(401).json({StatusCode: '401',status:"error"});
    }
    else{
        const updatedAccount = {...person,...updateData };
        console.log(updatedAccount);
        details[index] = updatedAccount;
        res.status(200).json({statusCode:'200', status: "Successs", details});
    }
}

export {changeUserData};