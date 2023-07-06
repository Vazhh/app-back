import joi from 'joi-oid'

const schema = joi.object({
    author_id:joi.objectId(),
    title: joi.string()
    .min(1)
        .required()
        .messages({
            'any.required':'Title is obligatorio',

        }),
    category_id: joi.string()
        .required()
        .messages({
            
        }),
    description: joi.string().min(4)
        .required()
        .messages({

        }),
    cover_photo: joi.string()
        .min(10)
        .required()
        .messages({

        }),
    
})

export default schema