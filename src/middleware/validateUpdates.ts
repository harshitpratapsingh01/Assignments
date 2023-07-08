import Joi from 'joi';

const validateUpdateSchima = Joi.object({
    username: Joi.string().min(3).max(30),
    email: Joi.string().email(),
    id: Joi.number(),
    PhoneNo: Joi.number().min(5000000000).max(9999999999),
    role: Joi.string().min(3).max(50)

})

export {validateUpdateSchima};