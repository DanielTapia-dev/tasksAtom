import express from 'express';
import taskRoutes from './app/routes/task.route';
import userRoutes from './app/routes/user.route';
import {errorHandler} from './middlewares/error-handler';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use('/task', taskRoutes);
app.use('/user', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
