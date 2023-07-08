import express from 'express';
import path from 'path';
import { details } from "../models/schema";
import { newUser } from '../controller/addNewUser';
const router = express.Router();

router.post('/', async(req, res) => {
    const new_data = req.body;
    newUser(new_data, req, res);
});


export { router as postRouter };