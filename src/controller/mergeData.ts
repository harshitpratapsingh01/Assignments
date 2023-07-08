import fs from 'fs';
import { newfilepath } from '../routes/handlefiles';

const MergeData = (file1Path,file2Path,req,res) => {
    fs.readFile(file1Path, (err, data) => {
        if (err) throw err;
        fs.writeFile(newfilepath, data, (err) => {
            if (err) throw err;
        });
    });
    fs.readFile(file2Path, (err, data) => {
        if (err) throw err;
        fs.appendFile(newfilepath, ` ${data}`, (err) => {
            if (err) throw err;
        });
    });    
    console.log("new file created");
    res.send("new file created");
}

export {MergeData};