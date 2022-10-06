import Express from "express"
import { getCategories, getSubCategories } from "../Controllers/Word";

export const wordRouter = Express.Router();

wordRouter.get('/categories', getCategories);
wordRouter.get('/sub-categories/:categoryId', getSubCategories);

wordRouter.use((req, res) => res.status(404).end())