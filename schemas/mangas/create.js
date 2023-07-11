import joi from 'joi-oid'

const schema = joi.object({
    author_id:joi.objectId(),
    title: joi.string()
        .min(1)
        .max(50)
        .required()
        .messages({
            'any.required':'Title is required',
            'string.min':'Title must have at least one character',
            'string.max':'The title must not exceed 50 characters'
        }),
    category_id: joi.objectId()
        .required()
        .messages({
            'any.required':'Category is required'
            
        }),
    description: joi.string()
        .min(20)
        .max(400)
        .required()
        .messages({
            'any.required':'Title is required',
            'string.min':'Title must have at least 20 character',
            'string.max':'The title must not exceed 400 characters'
        }),
    cover_photo: joi.string()
        .min(10)
        .uri()
        .required()
        .messages({
            'any.required':'Cover photo is required',
            'string.uri':'Cover photo must be a url element',
            'string.min':'Cover must have at least 10 character'
        }),
    
})

export default schema