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

export const patchWordPLAndENG = (req: Request, res: Response) => {
    try {
        const { categoryId } = req.body

        if (!categoryId) return (res.status(301).json({ message: 'categoryId is not valid' }))


        db.query("SELECT LL_PL_word.id, LL_ENG_word.sub_category_id, LL_PL_word.word_pl, LL_ENG_word.word_eng FROM LL_PL_word, LL_ENG_word WHERE LL_PL_word.id = LL_ENG_word.id AND LL_PL_word.sub_category_id = ? ", [categoryId], (err, rows: any) => {
            if (err) throw err;

            const result = rows?.map(({ id, sub_category_id, word_pl, word_eng }: { id: number, sub_category_id: number, word_pl: string, word_eng: string }) => ({
                id,
                subCategoryId: sub_category_id,
                wordPl: word_pl,
                wordEng: word_eng
            })
            )

            res.status(200).json({
                data: result,
                message: 'You get word from pl and eng'
            })
        })

    } catch (error) {
        res.status(500).json({
            message: `Backend error with `
        })
    }
}

export const postWords = (req: Request, res: Response) => {
    try {
        const { wordobj } = req.body

        if (!wordobj) return (res.status(301).json({ message: 'wordobj is not valid' }))

        let firstLangStr = '';
        let secondLangStr = '';

        interface test { firstLang: string, secondLang: string }

        Object.values(wordobj).map(({ firstLang, secondLang }: test) => {
            firstLangStr = firstLangStr + `( 1 , "${firstLang ?? null}"), `
            secondLangStr = secondLangStr + `( 1 , "${secondLang ?? null}"), `
        })

        db.query("INSERT INTO LL_PL_word (sub_category_id, word_pl ) VALUES " + firstLangStr.slice(0, firstLangStr.lastIndexOf(', ')) + "; INSERT INTO LL_ENG_word ( sub_category_id, word_eng ) VALUES " + secondLangStr.slice(0, secondLangStr.lastIndexOf(',')) + ";", (err, rows) => {
            if (err) throw err;

            res.status(200).json({
                message: 'You put polish and english words'
            })
        })

    } catch (error) {
        res.status(500).json({
            message: `Backend error with `
        })
    }
}