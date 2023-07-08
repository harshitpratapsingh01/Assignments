import express from 'express';
import { deleteUserData } from '../controller/deleteA_User';
const router = express.Router();

router.delete('/:id', (req,res) => {
    const id = Number(req.params.id);
    deleteUserData(id,req,res);
})

export {router as deleteUser};