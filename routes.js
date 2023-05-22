const express = require('express');
const router = express.Router();
const pokemonController = require('./pokemonController');
const authController = require('./controllers/authController');
const authenticateToken = require('./authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route accessed successfully' });
});  

router.get('/pokemon', pokemonController.getAll);
router.get('/pokemon/:id', pokemonController.getById);
router.post('/pokemon', pokemonController.create);
router.put('/pokemon/:id', pokemonController.update);
router.delete('/pokemon/:id', pokemonController.delete);

module.exports = router;