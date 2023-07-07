import joi from "joi-oid";

const schema = joi.object({ //validar si es un objeto
    name: joi.string().min(2).max(20).messages({
        'string':'It has to be text, no special characters',
        'string.min':'It has to have at least 2 characters',
        'string.max':'It has to be less than 20 characters',
    }),
    last_name:joi.string().min(2).max(20).messages({
        'string':'It has to be text, no special characters',
        'string.min':'It has to have at least 2 characters',
        'string.max':'It has to be less than 20 characters',
    }),
    city:joi.string().required().messages({
        'required':'city is required',
        'string':'It has to be text, no special characters',
        'string.empty':'you need to add a city',
    }),
    country:joi.string().required().messages({
        'string':'You must add country after the symbol "," ',
        'string':'It has to be text, no special characters',
        'string.empty':'you need to add a country',
    }),
    date:joi.date().max('now').messages({
        'date':'Debe introducir numeros separados por "-" ',
        'date.max':'date must not exceed current date'
    
    }),
    photo:joi.string().uri().required().messages({
        'uri':'you must add a url',
        'required':'photo is required',

    }),

    user_id: joi.objectId(),
    
}) 

export default schema