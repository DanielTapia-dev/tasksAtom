import express from 'express';
import taskRoutes from './app/routes/task.route';
import userRoutes from './app/routes/user.route';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON

app.use('/task', taskRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
