import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { ApplicationModule } from './modules/app.module';
import * as express from 'express';
import * as path from 'path';

const instance = express();

instance.set('views', path.join(__dirname, 'views'));
instance.set('view engine', 'ejs');

const app: Promise<INestApplication> = NestFactory.create(ApplicationModule, instance);

app
.then(nestInstance =>
	nestInstance.listen(3000, () => {
		console.log('Application based on Express is listening on port 3000');
	}))
.catch((err) => {
	console.error('Application configured to listen on port 3000 failed to start', err);
});