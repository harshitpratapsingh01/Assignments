import express from 'express';
import fs from 'fs';
import multer from 'multer';
import { uploading } from '../controller/uploadFiles';
import { MergedData } from '../controller/displayData';
import { MergeData } from '../controller/mergeData';
import { delete_Files } from '../controller/deleteFiles';
const newfilepath=`./backup/MergedData_${Date.now()}.txt`;
const router = express.Router();

router.get("/display", (req, res) => {
    MergedData(req,res);
})

router.post("/merge/:n1/:n2", (req, res) => {
    const file1Path = `./uploads/message${req.params.n1}.txt`;
    const file2Path = `./uploads/message${req.params.n2}.txt`;

    MergeData(file1Path,file2Path,req,res);
});

router.post("/upload", uploading, (req, res) => {
    res.send("uploaded");
});

router.delete("/delete/:n1/:n2", (req, res) => {
    const file1 = req.params.n1;
    const file2 = req.params.n2;
    delete_Files(file1,file2,req,res);
});

export default router;
export {newfilepath};