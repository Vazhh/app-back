//controllers
import register from "../controllers/auth/register.js"
import signin from "../controllers/auth/signin.js"
import signout from "../controllers/auth/signout.js"
import read from "../controllers/auth/read.js"

//middlewares
import validator from "../middlewares/validator.js"
import accountExistsSignUp from "../middlewares/accountExistsSignUp.js"
import accountExistsSignIn from "../middlewares/accountExistsSignIn.js"

//schemas
import register_schema from "../schemas/auth/register.js"
import signin_schema from "../schemas/auth/signin.js"
import isValidPassword from "../middlewares/isValidPassword.js"

//router
import { Router } from "express"
let authRouter = Router()

authRouter.post('/register', validator(register_schema), accountExistsSignUp, register)
authRouter.post('/signin', validator(signin_schema), accountExistsSignIn, isValidPassword, signin)
authRouter.post('/signout', accountExistsSignIn, signout)
authRouter.get('/', read)

export default authRouter