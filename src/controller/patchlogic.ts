import { details } from "../models/schema";
import { validateUpdateSchima } from "../middleware/validateUpdates";

const changeUserData = async(updateData ,id, req, res) => {
    try{
        await validateUpdateSchima.validateAsync(updateData);
        const person = details.find((account) => account.id === id);
        const index = details.indexOf(person);
    
        console.log(person);
        console.log(index);
    
        if(!person){
            console.log("error");
            const message = "User Not Found"
            res.status(404).json({StatusCode: '404',status:message});
        }
        else{
            const updatedAccount = {...person,...updateData };
            console.log(updatedAccount);
            details[index] = updatedAccount;
            res.status(200).json({statusCode:'200', status: "Successs", details});
        }
    }
    catch(err){
        const message = "Please Enter Valid Details";
        console.log("error");
        res.status(422).json({ statusCode: '422', status: 'Unprocessable Entity', message});
    }
}

export {changeUserData};