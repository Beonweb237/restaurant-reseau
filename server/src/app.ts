import express from 'express';
import cors from 'cors';
import restaurantsRouter from './routes/restaurants';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/restaurants', restaurantsRouter);

export default app;
