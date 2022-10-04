import type { Request, Response } from 'express';
import { db } from '../Database/Database'

export const getTest = (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
}