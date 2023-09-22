const express = require('express');
const { createUser, loginUser } = require('../controller/Auth.js');

const router = express.Router();
//  /brands is already added in base path
router.post('/signup', createUser)
    .post('/login', loginUser)

exports.router = router;