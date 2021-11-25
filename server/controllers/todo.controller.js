const httpStatus = require('http-status');
const NewTodo = require('../model/new-todo.model');
const todoService = require('../services/todo.service');

const getAll = (req, res) =>
{
    const todos = todoService.getAll();

    res.status(httpStatus.OK).json(todos);
}

const getOne = (req, res) =>
{
    const id = parseInt(req.params.todoId);

    if(!id) throw httpStatus.BAD_REQUEST;

    const todo = todoService.getById(id);
    
    res.status(httpStatus.OK).json(todo);
}

const add = (req, res) =>
{
    // TODO: moving validation into middleware would be nice
    if(!req.body.title || req.body.title.trim().length === 0)
    {
        throw httpStatus.BAD_REQUEST;
    }
    if(!req.body.description || req.body.description.trim().length === 0)
    {
        throw httpStatus.BAD_REQUEST;
    }

    const newTodo = todoService.add(new NewTodo(req.body.title, req.body.description));

    res.status(httpStatus.OK).json(newTodo);
}

const remove = (req, res) =>
{
    const id = parseInt(req.params.todoId);

    if(isNaN(id)) throw httpStatus.BAD_REQUEST;

    todoService.removeById(id);

    res.status(httpStatus.OK).send();
}


module.exports = {
    getAll,
    getOne,
    add,
    remove,
}