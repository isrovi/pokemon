const express = require('express');
const router = express.Router();
const pokemonController = require('./pokemonController');

router.get('/pokemon', pokemonController.getAll);
router.get('/pokemon/:id', pokemonController.getById);
router.post('/pokemon', pokemonController.create);
router.put('/pokemon/:id', pokemonController.update);
router.delete('/pokemon/:id', pokemonController.delete);

module.exports = router;