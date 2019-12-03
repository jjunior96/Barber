import { Router } from 'express';
import mongoose from 'mongoose';

// import mongoConnection from './database/index';

import UserController from './app/controllers/UserController';

const routes = new Router();

mongoose.connect(
  'mongodb+srv://semana:semana@cluster0-0laro.mongodb.net/barber?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

routes.post('/users', UserController.store);

export default routes;
