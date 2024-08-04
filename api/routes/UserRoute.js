import UserController from '../controllers/UserController';
import express from 'express';

const app = express();

app.post('/', UserController.create);
app.get('/', UserController.getAll);
app.get('/:id', UserController.get);
app.post('/:user_id/borrow/:book_id', UserController.borrowBook);
app.post('/:user_id/return/:book_id', UserController.returnBook);

export default app;
