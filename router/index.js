import { Router } from 'express'
import authorsRouter from './authors.js'
import mangasRouter from './mangas.js'
import chaptersRouter from './chapters.js'
import usersRouter from './auth.js'
import categoriesRouter from './categories.js'
import companiesRouter from './companies.js'

let indexRouter = Router()

indexRouter.use('/authors', authorsRouter)
indexRouter.use('/mangas', mangasRouter)
indexRouter.use('/chapters', chaptersRouter)
indexRouter.use('/auth', usersRouter)
indexRouter.use('/categories', categoriesRouter)
indexRouter.use('/companies', companiesRouter)

export default indexRouter