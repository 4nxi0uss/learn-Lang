import express from 'express';
import type { Express, Request, Response } from 'express';

import cookieParser from 'cookie-parser'

import cors from 'cors'

import dotenv from 'dotenv';

import { wordRouter } from './Routes/Word';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: true,
    credentials: true
}))

app.use('/api/cat', wordRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://${hostname}:${port}`);
});