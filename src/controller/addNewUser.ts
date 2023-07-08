import { details } from "../models/schema";
import validator from 'validator';

const newUser = (new_data, req, res) => {
    try {
        if (Object.keys(new_data).length >= 2) {
            console.log(Object.keys(new_data).length);
            if (new_data.id != null && new_data.username != null && new_data.email != null && new_data.PhoneNo != null) {
                if (validator.isEmail(new_data.email)) {
                    details.push(new_data);
                    res.status(200).json({ statusCode: '200', status: "Success", details });
                }
                else {
                    res.status(406).json({statusCode: '406', status:"Please ender valid email"});
                }
            }
            else {
                res.status(406).json({ statusCode: '406', status: "Not Acceptable" });
            }
        }
        else {
            res.status(406).json({statusCode: '406', status:"Please ender valid email"});
        }
    }
    catch {
        res.status(400).json({ statusCode: '400', status: 'Bad Request' });
    }
}

export { newUser };