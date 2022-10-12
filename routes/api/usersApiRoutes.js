const express = require('express');
const router = express.Router();
const usersApiController = require('../../controllers/api/usersApiController');

router.get('/', usersApiController.userList);

router.get('/:id', usersApiController.userDetail);

module.exports = router;