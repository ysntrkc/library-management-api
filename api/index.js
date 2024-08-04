import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import routes from './routes';

import './db/config/config';

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());

app.use((req, _res, next) => {
	req.headers.language = req.headers.language || 'en';
	next();
});

app.use('/', routes);

app.get('/health', (_req, res) => {
	return res.json({
		type: true,
		message: 'Server is up and running',
	});
});

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

export default app;
