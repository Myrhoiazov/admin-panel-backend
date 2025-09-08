import express from "express";
import authinticationRouter from "./router.Auth";
import usersRouter from "./router.Users";
import profileRouter from './router.Profiles'
import clientsRouter from './router.Clients'
import appoimentsRouter from './router.Appoiments'
import procedureRouter from './router.Procedures'
import commentsRouter from './router.Comments'
import transactionsRouter from './router.Transactions'

const router = express.Router();

export default (): express.Router => {
    router.use('/auth', authinticationRouter)
    router.use('/users', usersRouter)
    router.use('/clients', clientsRouter)
    router.use('/appointments', appoimentsRouter)
    router.use('/procedures', procedureRouter)
    router.use('/profile', profileRouter)
    router.use('/comments', commentsRouter)
    router.use('/transactions', transactionsRouter)

    return router;
}