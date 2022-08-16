// main api file
import express from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

//import { createServer } from 'http';

const app = express();

app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
