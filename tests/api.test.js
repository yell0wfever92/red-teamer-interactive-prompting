import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../server';

describe('POST /API/GEMINI', () => {
  it('returns 500 if API key is missing', async () => {
    const prev = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;
    const res = await request(app).post('/API/GEMINI').send({ prompt: 'hello' });
    expect(res.status).toBe(500);
    process.env.GEMINI_API_KEY = prev;
  });
});
