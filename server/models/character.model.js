const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Character', {
    image: Joi.string().regex(new RegExp('/^[0-9]+\.[a-zA-Z]{3, 4}$/')).required(),
    name: Joi.string().required(),
    sex: Joi.boolean().required().default(0),
    special: Joi.object({
        "isYoung": Joi.boolean().required().default(0),
        "isOld": Joi.boolean().required().default(0),
        "isFat": Joi.boolean().required().default(0),
        "isFit": Joi.boolean().required().default(0),
        "isExecutive": Joi.boolean().required().default(0),
        "isCelebrity": Joi.boolean().required().default(0),
        "isMedic": Joi.boolean().required().default(0),
        "isHomeless": Joi.boolean().required().default(0),
        "isPregnant": Joi.boolean().required().default(0),
        "isCriminal": Joi.boolean().required().default(0),
        "isAnimal": Joi.boolean().required().default(0),
    })
})
