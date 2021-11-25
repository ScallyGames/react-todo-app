const express = require('express');
const todoRoute = require('./todo.route');
const config = require('../config/config');

const router = express.Router();

const api = express.Router();

router.use('/api', api);

const defaultRoutes = [
  {
    path: '/todos',
    route: todoRoute,
  },
];


defaultRoutes.forEach((route) => {
  api.use(route.path, route.route);
});


module.exports = router;
