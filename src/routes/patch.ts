import express from 'express';
import { changeUserData } from '../controller/patchlogic';
const router = express.Router();


router.patch('/:id', (req,res) => {
    const id = Number(req.params.id);
    const update_data = req.body;
    changeUserData(update_data,id,req,res);
})


export {router as patchRouter};