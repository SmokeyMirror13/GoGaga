const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-profile', adminController.getAddProfiles);

// /admin/products => GET
router.get('/profiles', adminController.getProfiles);

// /admin/add-product => POST
router.post('/add-profile', adminController.postAddProfiles);

module.exports = router;
