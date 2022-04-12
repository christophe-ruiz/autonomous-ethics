const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Character', {
    image: Joi.string().regex(new RegExp('/^[0-9]+\.[a-zA-Z]{3, 4}$/')).required()
})
