const express = require('express');

const searchController = require('../controller/search');

const router = express.Router();

router.get('/', searchController.getIndex)

// /admin/search => GET
router.get('/search1', searchController.getSearchPage);

// /admin/search => POST
router.post('/search1', searchController.postSearchPage);

module.exports = router;
