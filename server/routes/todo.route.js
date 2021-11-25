const express = require('express');
const todoController = require('../controllers/todo.controller');

const router = express.Router();

router
    .route('/')
    .get(todoController.getAll)
    .post(todoController.add)
    ;

router
    .route('/:todoId')
    .get(todoController.getOne)
    .delete(todoController.remove)
    ;


module.exports = router;