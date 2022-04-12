import Joi from "joi";

const carValidator = Joi.object({
    model:Joi.string().min(2).max(20).required().messages({
        'string.empty':'Model не може бути пустим'
    }),
    price:Joi.number().min(0).max(10000000),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
});


export {
    carValidator
}
