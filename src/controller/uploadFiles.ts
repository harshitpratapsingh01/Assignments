import express from 'express';
import multer from 'multer';

const uploading = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads');
        },
        filename: function (req, file, cb) {

            cb(null, `message${file.fieldname}.txt`);
        }
    })
}).any();

export {uploading};