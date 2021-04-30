import { Router } from 'express';

import UserController from './app/controllers/Usercontroller';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.post('/users', UserController.store);

export default routes;
