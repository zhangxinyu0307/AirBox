const express = require('express');
const router = express.Router();
const displayCtrl = require('../controllers/displayController');

// 绑定接口地址
router.get('/all', displayCtrl.getAllFiles);

module.exports = router;