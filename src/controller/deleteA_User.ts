import { details } from "../models/schema";

const deleteUserData = (id,req,res) => {
    const person = details.find((user) => user.id === id);
    const index = details.indexOf(person);

    if(!person){
        console.log("error");
        const message = "User Not Found"
        res.status(404).json({StatusCode: '401',status:message});
    }
    else{
        details.splice(index,1);
        res.status(200).json({statusCode: '200', status:'success', details});
    }
}

export {deleteUserData};