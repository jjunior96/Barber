import { Router } from 'express';
import mongoose from 'mongoose';

const routes = new Router();

mongoose.connect(
  'mongodb+srv://semana:semana@cluster0-0laro.mongodb.net/barber?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

routes.get('/', (req, res) => {
  return res.json({ ok: 'true' });
});

export default routes;
