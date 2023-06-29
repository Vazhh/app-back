import { Router } from 'express'
import create from '../controllers/companies/create.js'
import read from '../controllers/companies/read.js'
import validator from '../middlewares/validator.js'
import schema_create from '../schemas/companies/create.js'



let companiesRouter = Router()
companiesRouter.post('/',validator(schema_create),create)
companiesRouter.get('/',read)
export default companiesRouter