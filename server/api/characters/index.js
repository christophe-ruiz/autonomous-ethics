const { Router } = require('express')
const { Character } = require('../../models')
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

// router.get('/images', (req, res) => {
//     try {
//         res.status(200).sendFile(path.join(__dirname, '/images/', Character.get().image));
//     } catch (e) {
//         manageAllErrors(res, e)
//     }
// });

router.get('/:characterId', (req, res) => {
    try {
        res.status(200).json(Character.getById(req.params.characterId))
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get('/images/:name', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, '/images/', req.params.name));
    } catch (e) {
        manageAllErrors(res, e)
    }
});

module.exports = router
