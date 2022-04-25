const { Router } = require('express')
const { Character, Scenario, Statistics} = require('../../models')
const fs = require("fs");
const path = require("path");
const manageAllErrors = require("../../utils/errors/validation-error");

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
    try {
        res.status(200).json(Character.get())
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:characterId', (req, res) => {
    try {
        res.status(200).json(Character.getById(req.params.characterId))
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/',  (req, res) => {
    try {
        const stat = Statistics.create({ ...req.body })
        res.status(201).json(stat)
    } catch (err) {
        console.log(err)
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra)
        } else {
            res.status(500).json(err)
        }
    }
})

module.exports = router
