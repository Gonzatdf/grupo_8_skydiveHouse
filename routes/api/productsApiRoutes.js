const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/api/productsApiController');

router.get('/', productsApiController.productList);

router.get('/:id', productsApiController.productDetail);

module.exports = router;