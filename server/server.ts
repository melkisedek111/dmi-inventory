import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/test', (req: Request, res: Response) => {
    res.json({test: "qwe"});
  });

console.log(port)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3001`);
});