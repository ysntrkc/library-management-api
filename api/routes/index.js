import path from 'path';
import express from 'express';
import FileHelper from '../helpers/FileHelper';

const app = express();
const basename = path.basename(__filename);

const folderRoute = path.join(__dirname, '../routes');
require('fs')
	.readdirSync(folderRoute)
	.filter(file => !file.startsWith('.') && file !== basename && file.endsWith('.js'))
	.forEach(file => {
		const routeName = FileHelper.getFileRoute(file);
		app.use(
			`/${routeName}`,
			require(`./${file}`).default,
		);
	});

export default app;
