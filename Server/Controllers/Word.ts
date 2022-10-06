import type { Request, Response } from 'express';

import { db } from '../Database/Database'

export const getCategories = (req: Request, res: Response) => {
    try {
        db.query("SELECT * FROM `LL_Categories`", (err, rows) => {
            if (err) throw err;

            res.status(200).json({
                data: rows,
                message: 'You get categories'
            })
        })


    } catch (error) {
        res.status(500).json({
            message: `Backend error with categories getting`
        })
    }
}

export const getSubCategories = (req: Request, res: Response) => {
    try {
        const categoryId = parseInt(req.params.categoryId)
        console.log(123, categoryId);

        if (!categoryId) return (res.status(301).json({ message: 'categoryId is not valid' }))

        db.query("SELECT LL_Sub_Categories.name FROM `LL_Sub_Categories` WHERE `Category_id` = ? ", [categoryId], (err, rows) => {
            if (err) throw err;

            res.status(200).json({
                data: rows,
                message: 'You get sub categories'
            })
        })

    } catch (error) {
        res.status(500).json({
            message: `Backend error with sub-categories getting`
        })
    }
}