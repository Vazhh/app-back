import joi from "joi-oid";

const schema = joi.object({ //validar si es un objeto
    name: joi.string().min(3).max(20).required().messages({
        'any.required':'Name must is required',
        'string.min':'Value min 3 characters',
        'string.max':'Valun max 20 characters',
    }),
    logo:joi.string().min(10).uri().required().messages({
        'any.required':'Logo must is required',
        'string.url':'Uri must is required',
        'string.min':'Logo is short',
    }),

    website:joi.string().min(5).uri().required().messages({
        'any.required':'WebSite must is required',
        'string.url':'Uri must is required',
        'string.min':'website is short',
}),
    description:joi.string().min(5).max(50).required().messages({
        'any.required':'Description must is required',
        'string.max':'Value max 50 characters',
        'string.min':'Description is short',
})
}) 

export default schema