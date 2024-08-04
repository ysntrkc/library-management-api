import UserController from '../controllers/UserController';
import express from 'express';

const app = express();

app.post('/', UserController.create);
app.get('/', UserController.getAll);
app.get('/:id', UserController.get);

export default app;
