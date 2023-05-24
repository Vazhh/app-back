import { Router } from 'express'
import read from '../controllers/users/read.js'

let usersRouter = Router()


usersRouter.get('/',read)

export default usersRouter