import { Router } from 'express'
import read from '../controllers/chapters/read.js'
import create from '../controllers/chapters/create.js'
import passport from 'passport'
import has_permition from '../middlewares/has_permition.js'
import is_active from '../middlewares/is_active.js'
import is_property_of from '../middlewares/is_property_of.js'
import exists_order from '../middlewares/exists_order.js'
import next_order from '../middlewares/next_order.js'
import validator from '../middlewares/validator.js'
import add_cover_photo from "../middlewares/add_cover_photo.js"
import create_schema from "../schemas/chapters/create.js"

let chaptersRouter = Router()

chaptersRouter.get('/',read)
chaptersRouter.post('/',
    passport.authenticate('jwt',{ session:false }),
    has_permition,
    is_active,
    is_property_of,
    validator(create_schema),
    exists_order,
    next_order,
    add_cover_photo,
create)

export default chaptersRouter