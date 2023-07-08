import express from 'express';
import * as dotenv from "dotenv";
import router from './src/routes/get';
import { postRouter } from './src/routes/post';
import { putRouter } from './src/routes/put';
import { patchRouter } from './src/routes/patch';
import { deleteUser } from './src/routes/delete';

dotenv.config();
const app = express();

app.use(express.json());

const port = process.env.PORT;
const sk = process.env.secret_key;

app.use('/', router);
app.use('/post',postRouter);
app.use('/put/', putRouter);
app.use('/patch/', patchRouter);
app.use('/delete', deleteUser);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
