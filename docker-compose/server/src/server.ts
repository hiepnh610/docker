import express, {Application, Request, Response} from 'express';
import http, {Server} from 'http';

const app: Application = express();
const server: Server = new http.Server(app);

app.get('/', (req: Request, res: Response) => {
  console.log('req', req);
  res.send('Hello.');
});

server.listen(9000, () => {
  console.log('This app listen on port 9000.');
});
