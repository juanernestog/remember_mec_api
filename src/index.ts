// main api file
import express from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
//import config from './config';

import mongoose from 'mongoose';

mongoose.connect(`${process.env.DATABASE_PROTOCOL}${process.env.DATABASE_URL}`);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.on('open', () => console.log('Conected to Database'));

//import { createServer } from 'http';

const app = express();

app.use(express.json()); // for parsing application/json

import api from './api/v1';

app.use('api/v1', api);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
