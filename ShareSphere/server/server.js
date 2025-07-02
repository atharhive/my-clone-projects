import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import import connectDatabase from './utils/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 8000;

connectDatabase();

app.listen(PORT, () => {});