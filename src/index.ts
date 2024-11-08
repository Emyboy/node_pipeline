import express from 'express';
import router from './router';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', router);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
