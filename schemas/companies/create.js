import joi from "joi-oid";

const schema = joi.object({ //validar si es un objeto
    name: joi.string().min(3).max(20).messages({
        'string.min':'Tiene que tener al menos 3 caracteres',
        'string.max':'Tiene que tener menos de 20 caracteres',
    }),
    logo:joi.string(),
    website:joi.string(),
    description:joi.string()
}) 

export default schema