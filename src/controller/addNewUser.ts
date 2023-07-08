import { details } from "../models/schema";
import { validateSchima } from "../middleware/validation";

const newUser = async(new_data, req, res) => {
    try {
        await validateSchima.validateAsync(new_data);
        details.push(new_data);
        res.status(200).json({ statusCode: '200', status: "Success", details });
    }
    catch(error) {
        console.log("error");
        const err = "Please Enter Valid Details";
        res.status(422).json({ statusCode: '422', status: 'Unprocessable Entity', err});
    }
}

export { newUser };