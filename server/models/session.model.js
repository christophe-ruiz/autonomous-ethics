const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');
const Scenario = require("./scenario.model.js");

module.exports = new BaseModel('Session', {
    choices: Joi.array().items(Joi.boolean()).required(),
    scenarios: Joi.array().items(Scenario.get_schema()).required()
})
