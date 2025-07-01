import { describe, it, expect } from 'vitest';
import { getSystemInstruction } from '../server';

describe('getSystemInstruction', () => {
  it('returns helpful assistant text when isVariation is false', () => {
    expect(getSystemInstruction(false)).toBe('You are a helpful assistant.');
  });

  it('returns red teamer instruction when isVariation is true', () => {
    const result = getSystemInstruction(true);
    expect(result).toMatch(/red teamer/);
    expect(result).toMatch(/rephrase/i);
  });
});
