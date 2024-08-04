import BookController from '../controllers/BookController';
import express from 'express';

const app = express();

app.post('/', BookController.create);
app.get('/', BookController.getAll);
app.get('/:id', BookController.get);

export default app;
