import joi from "joi-oid";

const schema = joi.object({ //validar si es un objeto
    name: joi.string().min(3).max(20).messages({
        'string.min':'Tiene que tener al menos 3 caracteres',
        'string.max':'Tiene que tener menos de 20 caracteres',
    }),
    last_name:joi.string(),
    city:joi.string(),
    country:joi.string(),
    date:joi.date(),
    photo:joi.string().uri(),
    user_id: joi.objectId(),
    active: joi.boolean()
}) 

export default schema