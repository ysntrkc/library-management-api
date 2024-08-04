import request from 'supertest';
import app from '../api/index';

describe('User', () => {
	it('try to create a user without sending body', async () => {
		const response = await request(app).post('/users');

		expect(response.body.type).toBe(false);
	});

	it('create a user (1)', async () => {
		const response = await request(app).post('/users').send({
			name: 'Test User 1',
		});

		expect(response.body.type).toBe(true);
	});

	it('create a user (2)', async () => {
		const response = await request(app).post('/users').send({
			name: 'Test User 2',
		});

		expect(response.body.type).toBe(true);
	});

	let allUsers;
	it('get all users', async () => {
		const response = await request(app).get('/users');

		expect(response.body.type).toBe(true);
		expect(response.body.data).toBeInstanceOf(Array);
		expect(response.body.data.length).toBeGreaterThan(0);
		allUsers = response.body.data;
	});

	it('get a user', async () => {
		const response = await request(app).get(`/users/${allUsers[0].id}`);

		expect(response.body.type).toBe(true);
	});

	it('try to get a user with invalid id', async () => {
		const response = await request(app).get('/users/invalid_id');

		expect(response.body.type).toBe(false);
	});

	it('try to get a user with non-existing id', async () => {
		const response = await request(app).get('/users/0');

		expect(response.body.type).toBe(false);
	});

});
