const httpStatus = require("http-status");
const Todo = require('../model/todo.model');

const todos = new Map();
let nextId = 0;


const getAll = () =>
{
    return Array.from(todos.values());
}

const getById = (id) =>
{
    const todo = todos.get(id);

    if(!todo) throw httpStatus.NOT_FOUND;

    return todo;
}

const add = (newTodo) =>
{
    let id = nextId;
    
    let todo = new Todo(id, newTodo.title, newTodo.description);
    todos.set(id, todo);

    nextId++;

    return todo;
}

const removeById = (id) =>
{
    todos.delete(id);
}

module.exports = {
    getAll,
    getById,
    add,
    removeById,
}