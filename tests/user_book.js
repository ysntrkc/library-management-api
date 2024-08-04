import request from 'supertest';
import app from '../api/index';

describe('User Book', () => {
	it('try to borrow a book with invalid user_id and book_id', async () => {
		const response = await request(app).post('/users/user_id/borrow/book_id');

		expect(response.body.type).toBe(false);
	});

	it('try to borrow a book with non-existing user_id', async () => {
		const response = await request(app).post('/users/0/borrow/1');

		expect(response.body.type).toBe(false);
	});

	it('try to borrow a book with non-existing book_id', async () => {
		const response = await request(app).post('/users/1/borrow/0');

		expect(response.body.type).toBe(false);
	});

	let allUsers;
	let allBooks;
	it('get all users and books', async () => {
		const responseUsers = await request(app).get('/users');
		const responseBooks = await request(app).get('/books');

		expect(responseUsers.body.type).toBe(true);
		expect(responseBooks.body.type).toBe(true);
		expect(responseUsers.body.data).toBeInstanceOf(Array);
		expect(responseBooks.body.data).toBeInstanceOf(Array);
		expect(responseUsers.body.data.length).toBeGreaterThan(0);
		expect(responseBooks.body.data.length).toBeGreaterThan(0);
		allUsers = responseUsers.body.data;
		allBooks = responseBooks.body.data;
	});

	it('borrow a book (1)', async () => {
		const response = await request(app).post(`/users/${allUsers[0].id}/borrow/${allBooks[0].id}`);

		expect(response.body.type).toBe(true);
	});

	it('try to borrow a book that is already borrowed', async () => {
		const response = await request(app).post(`/users/${allUsers[0].id}/borrow/${allBooks[0].id}`);

		expect(response.body.type).toBe(false);
	});

	it('return a book without sending score', async () => {
		const response = await request(app).post(`/users/${allUsers[0].id}/return/${allBooks[0].id}`);

		expect(response.body.type).toBe(true);
	});

	it('borrow a book (2)', async () => {
		const response = await request(app).post(`/users/${allUsers[0].id}/borrow/${allBooks[0].id}`);

		expect(response.body.type).toBe(true);
	});

	it('try to return a book with invalid score', async () => {
		const response = await request(app).post(`/users/${allUsers[0].id}/return/${allBooks[0].id}`).send({
			score: -5,
		});

		expect(response.body.type).toBe(false);
	});

	it('return a book with score (1)', async () => {
		const response = await request(app).post(`/users/${allUsers[0].id}/return/${allBooks[0].id}`).send({
			score: 5,
		});

		expect(response.body.type).toBe(true);
	});

	it('try to return a book that is not borrowed', async () => {
		const response = await request(app).post(`/users/${allUsers[0].id}/return/${allBooks[0].id}`);

		expect(response.body.type).toBe(false);
	});

	it('borrow a book (3)', async () => {
		const response = await request(app).post(`/users/${allUsers[0].id}/borrow/${allBooks[0].id}`);

		expect(response.body.type).toBe(true);
	});

	it('try to return a book with invalid user_id and book_id', async () => {
		const response = await request(app).post('/users/user_id/return/book_id');

		expect(response.body.type).toBe(false);
	});

	it('try to return a book with non-existing user_id', async () => {
		const response = await request(app).post('/users/0/return/1');

		expect(response.body.type).toBe(false);
	});

	it('try to return a book with non-existing book_id', async () => {
		const response = await request(app).post('/users/1/return/0');

		expect(response.body.type).toBe(false);
	});

	it('return a book with score (2)', async () => {
		const response = await request(app).post(`/users/${allUsers[0].id}/return/${allBooks[0].id}`).send({
			score: 9,
		});

		expect(response.body.type).toBe(true);
	});

	it('get book details', async () => {
		const response = await request(app).get(`/books/${allBooks[0].id}`);

		expect(response.body.type).toBe(true);
		expect(response.body.data.average_score).toBe('7.00');
	});

});
