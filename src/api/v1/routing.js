/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const router = express.Router();

const machines = require('./machines/routes');
const users = require('./users/routes');
const maintenances = require('./maintenances/routes');

router.use('/machines', machines);
router.use('/users', users);
router.use('/maintenances', maintenances);

module.exports = router;
