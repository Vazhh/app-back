//controllers
import register from "../controllers/auth/register.js"
import read from "../controllers/auth/read.js"

//middlewares
import validator from "../middlewares/validator.js"
import accountExistsSignUp from "../middlewares/accountExistsSignUp.js"

//schemas
import register_schema from "../schemas/auth/register.js"

//router
import { Router } from "express"
let authRouter = Router()

authRouter.post('/register', validator(register_schema), accountExistsSignUp, register)
authRouter.get('/', read)

export default authRouter