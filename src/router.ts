import express, { Request, Response } from 'express';
import { add, divide, multiply, subtract } from './common/arithmetics';
import { sayHi } from './common/greeting';

const router = express.Router();

router.get('/add', (req: Request, res: Response) => {
  const { a, b } = req.query;
  const result = add(Number(a), Number(b));
  res.json({ result });
});

router.get('/subtract', (req: Request, res: Response) => {
  const { a, b } = req.query;
  const result = subtract(Number(a), Number(b));
  res.json({ result });
});

router.get('/multiply', (req: Request, res: Response) => {
  const { a, b } = req.query;
  const result = multiply(Number(a), Number(b));
  res.json({ result });
});

router.get('/divide', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    const result = divide(a, b);
    res.json({ result });
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/greeting', (req: Request, res: Response) => {
  const { name } = req.body;
  sayHi(name);
  res.json({ message: `Hello, ${name}!` });
});

export default router;
