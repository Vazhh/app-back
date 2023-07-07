import joi from "joi-oid";

const schema = joi.object({ //validar si es un objeto
    name: joi.string().min(2).max(20).messages({
        'string':'Tiene que ser texto, sin caracteres especiales como chinos XD',
        'string.min':'Tiene que tener al menos 2 caracteres',
        'string.max':'Tiene que tener menos de 20 caracteres',
    }),
    last_name:joi.string().min(2).max(20).messages({
        'string':'Tiene que ser texto, sin caracteres especiales como chinos XD',
        'string.min':'Tiene que tener al menos 2 caracteres',
        'string.max':'Tiene que tener menos de 20 caracteres',
    }),
    city:joi.string(),
    country:joi.string().required().messages({'string':'Debe agregar  pais'}),
    date:joi.date().messages({
        'date':'Debe introducir numeros separados por "-" ',
        'required':'Es requerido agregar un país'
        

    }),
    photo:joi.string().uri(),
    user_id: joi.objectId(),
    
}) 

export default schema