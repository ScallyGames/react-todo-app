const express = require('express');
const todoController = require('../controllers/todo.controller');

const router = express.Router();

router
    .route('/')
    .get(todoController.getAll);


module.exports = router;