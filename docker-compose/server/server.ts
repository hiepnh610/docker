import express, {Application, Request, Response} from 'express';
import http, {Server} from 'http';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import rateLimit, {RateLimit} from 'express-rate-limit';
import compression from 'compression';
import mongoose from 'mongoose';
import {json, urlencoded} from 'body-parser';

import routers from './routers';

const app: Application = express();
const server: Server = new http.Server(app);

const environment = process.env.NODE_ENV || 'development';
const loggingType = environment === 'development' ? 'dev' : 'tiny';
const limiter: RateLimit = rateLimit({
  windowMs: 1000,
  max: 10,
});
const mongoUri = 'mongodb://mongo:27017/todo';

mongoose.connect(mongoUri, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan(loggingType));
app.use(cors());
app.use(compression());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(limiter);

app.get('/', (_req: Request, res: Response) => {
  res.render('index');
});

app.use('/api', routers);

server.listen(9000, () => {
  console.log('This app listen on port 9000.');
});
