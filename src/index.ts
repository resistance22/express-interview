import express, { Express } from 'express';
import { controller } from '@/controller'

const app: Express = express();
const port = process.env.PORT || 5000;

app.get('/', controller);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})