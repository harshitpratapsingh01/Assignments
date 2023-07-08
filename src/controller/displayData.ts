import fs from 'fs';
import { newfilepath } from '../routes/handlefiles';


const MergedData = (req, res) => {
    fs.readFile(newfilepath, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    })
}

export {MergedData};