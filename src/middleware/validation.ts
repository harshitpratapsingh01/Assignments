import joi from 'joi';

const validateSchima = joi.object({
    username: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    id: joi.number().required(),
    PhoneNo: joi.number().min(5000000000).max(9999999999).required(),
    role: joi.string().min(3).max(50)

})

export {validateSchima};