import request from 'supertest';
import app from '..';

describe('API Endpoints', () => {
  test('GET /api/add should add two numbers', async () => {
    const response = await request(app).get('/api/add?a=5&b=3');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(8);
  });

  test('GET /api/subtract should subtract two numbers', async () => {
    const response = await request(app).get('/api/subtract?a=5&b=3');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(2);
  });

  test('GET /api/multiply should multiply two numbers', async () => {
    const response = await request(app).get('/api/multiply?a=5&b=3');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(15);
  });

  test('GET /api/divide should divide two numbers', async () => {
    const response = await request(app).get('/api/divide?a=6&b=3');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(2);
  });

  test('GET /api/divide should handle divide by zero', async () => {
    const response = await request(app).get('/api/divide?a=6&b=0');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Cannot divide by zero');
  });
});
