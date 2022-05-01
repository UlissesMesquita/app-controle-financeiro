const express = require('express');
const router = express.Router();




//Controllers
const teste = require('../controllers/api/teste.controller.js');





/* Create */
router.get('/api/v1/index/:nome', teste.index);









module.exports = router;