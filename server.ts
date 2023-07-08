import express from 'express';
import * as dotenv from "dotenv";
import multer from 'multer';
import router from './src/routes/handlefiles';
const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(express.urlencoded({extended:false}));

app.use('/', router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
