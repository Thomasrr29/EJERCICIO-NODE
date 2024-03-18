const express = require('express');
const router = express.Router();
const userControllers = require('../controllerss/userControllers');

router.post('/api/notas', userControllers.postNotes)
router.get('/api/notas_all', userControllers.getAllNotes)

module.exports = router;