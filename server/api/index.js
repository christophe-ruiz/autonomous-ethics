const { Router } = require('express')
const CharactersRouter = require('./characters')
const ScenariosRouter = require('./scenarios')
const dotenv = require("dotenv");
dotenv.config();

const router = new Router({ mergeParams: true })
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/characters', CharactersRouter);
router.use('/scenarios', ScenariosRouter);

module.exports = router
