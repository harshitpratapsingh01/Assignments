import fs from 'fs';
import { newfilepath } from '../routes/handlefiles';

const MergeData = (file1Path,file2Path,req,res) => {
    fs.readFile(file1Path, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fs.writeFile(newfilepath, data, (err) => {
                if (err) {
                    console.log(err);
                }
            });
            fs.readFile(file2Path, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    fs.appendFile(newfilepath, ` ${data}`, (err) => {
                        if (err) {
                            console.log(err);
                        }
                    });

                }
                console.log("new file created");
                res.send("new file created");
            })

        }
    })
}

export {MergeData};