import experss from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import { User, Post } from './models/index.js';
import { up } from './migrations/20260512074229-create-users.js';

dotenv.config();

const app = experss();
const port = process.env.PORT || 3333;

app.get('/', (req, res) => {
  res.send('Hello, Sequelize with Express!');
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database established successfully.');
    console.log(`Server is runnning at http://127.0.0.1:${port}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
