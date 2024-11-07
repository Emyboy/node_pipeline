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

router.get('/divide', (req: Request, res: Response) => {
  const { a, b } = req.query;
  try {
    const result = divide(Number(a), Number(b));
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post('/greeting', (req: Request, res: Response) => {
  const { name } = req.body;
  sayHi(name);
  res.json({ message: `Hello, ${name}!` });
});

export default router;
