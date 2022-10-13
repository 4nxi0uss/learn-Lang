import Express from "express"
import { getCategories, getSubCategories, patchWordPLAndENG, postWords } from "../Controllers/Word";

export const wordRouter = Express.Router();

wordRouter.get('/categories', getCategories);
wordRouter.get('/sub-categories/:categoryId', getSubCategories);
wordRouter.patch('/PL-ENG', patchWordPLAndENG);
wordRouter.post('/post-words', postWords);

wordRouter.use((req, res) => res.status(404).end())