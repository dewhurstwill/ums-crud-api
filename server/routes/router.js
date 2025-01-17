const express = require('express');
// instead of calling a const app and creating a new app
// call route method of express to import to server.js
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET /
 */

route.get('/', services.homeRoutes);

/**
 * @description add user
 * @method GET /add-user
 */
 
route.get('/add-user', services.add_user);

/**
 * @description update user
 * @method GET /update-user
 */
 
route.get('/update-user', services.update_user);

// API Route - Simple by all & by id
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


 // export the route
 module.exports = route;
