import express from 'express';
import path from 'path';
import { details} from "../models/schema";
import { displayUserData } from '../controller/displayData';
const router = express.Router();


router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    displayUserData(id,req,res);
});


export default router;