//const http = require('http');

//const app = require('./api/v1');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import app from './api/v1';
import mongoose from 'mongoose';

mongoose.connect(`${process.env.DATABASE_PROTOCOL}${process.env.DATABASE_URL}`);
const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', (error) => console.error(error));
// eslint-disable-next-line no-console
db.on('open', () => console.log('Conected to Database'));

//const app = express();

//app.use(express.json()); // for parsing application/json

app.use('api/v1', app);

const PORT = process.env.PORT || 3002;

// Web Server
// const server = http.createServer(app);

// server.listen(PORT, function () {
//   console.log(`Server running at ${PORT}`);
// });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
