const express = require('express');
const router = express.Router();
const { dispense } = require('../controllers/dispenseController');

// POST /api/dispense
router.post('/dispense', dispense);

module.exports = router;

