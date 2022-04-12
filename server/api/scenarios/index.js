const { Router } = require('express')
const { Scenario } = require('../../models')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
    try {
        res.status(200).json(Scenario.get())
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:scenarioId', (req, res) => {
    try {
        res.status(200).json(Scenario.getById(req.params.scenarioId))
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', (req, res) => {
    try {
        const scenario = Scenario.create({ ...req.body })
        res.status(201).json(scenario)
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
