import cors from 'cors';
import 'dotenv/config';
import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send({
    email: 'code.with.muyiwa@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/Ng1n3/about-me',
  });
});

app.get('/healthcheck', (req: Request, res: Response) => {
  res.send({ status: 'Server is up an running' });
});
app.get('*', (req: Request, res: Response) => {
  res.status(404).send({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is currently listening on port ${PORT}`);
});
