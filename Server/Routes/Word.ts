import Express from "express"

export const wordRouter = Express.Router();

wordRouter.use((req, res) => res.status(404).end())