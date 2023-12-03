const express = require('express');
const router = express.Router();

const foodRoutes = require('./food');
const drinkRoutes = require('./drink');

router.use('/food', foodRoutes);
router.use('/drink', drinkRoutes);

module.exports = router;
