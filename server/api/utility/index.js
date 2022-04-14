const { Router } = require('express')
const {countries, salary_brackets, genders, education_levels} = require("../../utils/constant-strings");

const router = new Router({ mergeParams: true })

router.get('/countries', (req, res) => {
    try {
        res.status(200).json(countries)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/salary_brackets', (req, res) => {
    try {
        res.status(200).json(salary_brackets)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/genders', (req, res) => {
    try {
        res.status(200).json(genders)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/education_levels', (req, res) => {
    try {
        res.status(200).json(education_levels)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
