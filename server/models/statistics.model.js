const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const Scenario = require('./scenario.model.js')
const {genders, education_levels, salary_brackets, countries} = require("../utils/constant-strings");

module.exports = new BaseModel('Statistics', {
    user: Joi.object({
        age: Joi.number().required(),
        gender: Joi.string().valid(...genders).required(),
        religious_level: Joi.number().integer().min(0).max(10).required(),
        education_level: Joi.array().items(Joi.string().valid(...education_levels)).required(),
        income_bracket: Joi.array().items(Joi.string().valid(...salary_brackets)
        ).required(),
        countries: Joi.array().items(Joi.string().valid(...countries)),
        sessions: Joi.array().items(Scenario.get_schema()).required()
    })
})
