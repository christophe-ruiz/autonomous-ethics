const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Scenario', {
    lights: Joi.object({
        "left": Joi.boolean().required(),
        "right": Joi.boolean().required(),
    }),
    car_occupants: Joi.array().required(),
    leftside: Joi.array().required(),
    rightside: Joi.array().required(),
    description: Joi.object({
        "left": Joi.string().required(),
        "right": Joi.string().required()
    }).required()
})
