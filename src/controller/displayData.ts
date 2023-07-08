import { details } from "../models/schema";

const displayAllData = (req,res) => {
    try{
        res.status(200).json({statusCode : '200', status: "ok", details});
    }
    catch{
        res.status(500).send("Server error");
    }
}

const displayUserData = (id,req,res) => {
    try{
        const user = details.find((find_id) => find_id.id === id);
        if(user){
            res.status(200).json({statusCode : '200', status: "ok", user});
        }
        else{
            res.status(404).json({statusCode: '404', status :"User Not Found"});
        }
        // console.log(req);
    }
    catch{
        res.status(500).send("Server error");
    }
}

export {displayUserData,displayAllData};