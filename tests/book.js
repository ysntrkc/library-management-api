import request from 'supertest';
import app from '../api/index';

describe('Book', () => {
	it('try to create a book without sending body', async () => {
		const response = await request(app).post('/books');

		expect(response.body.type).toBe(false);
	});

	it('create a book (1)', async () => {
		const response = await request(app).post('/books').send({
			name: 'Test Book 1',
		});

		expect(response.body.type).toBe(true);
	});

	it('create a book (2)', async () => {
		const response = await request(app).post('/books').send({
			name: 'Test Book 1',
		});

		expect(response.body.type).toBe(true);
	});

	let allBooks;
	it('get all books', async () => {
		const response = await request(app).get('/books');

		expect(response.body.type).toBe(true);
		expect(response.body.data).toBeInstanceOf(Array);
		expect(response.body.data.length).toBeGreaterThan(0);
		allBooks = response.body.data;
	});

	it('get a book', async () => {
		const response = await request(app).get(`/books/${allBooks[0].id}`);

		expect(response.body.type).toBe(true);
	});

	it('try to get a book with invalid id', async () => {
		const response = await request(app).get('/books/invalid_id');

		expect(response.body.type).toBe(false);
	});

	it('try to get a book with non-existing id', async () => {
		const response = await request(app).get('/books/0');

		expect(response.body.type).toBe(false);
	});

});
