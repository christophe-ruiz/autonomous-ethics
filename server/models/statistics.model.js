const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const Scenario = require('./scenario.model.js')
const {genders, education_levels, salary_brackets, countries, politics, religions} = require("../utils/constant-strings");

module.exports = new BaseModel('Statistics', {
    user: Joi.object({
        age: Joi.number().required(),
        gender: Joi.string().valid(...genders).required(),
        religious_level: Joi.string().valid(...religions).required(),
        politics: Joi.string().valid(...politics).required(),
        education_level: Joi.string().valid(...education_levels).required(),
        income_bracket: Joi.string().valid(...salary_brackets).required(),
        country: Joi.string().valid(...countries),
    }),
    sessions: Joi.object({
        choices: Joi.array().items(Joi.boolean()).required(),
        scenarios: Joi.array().items(Scenario.get_schema()).required()
    }).required(),
    date: Joi.date(),
})
