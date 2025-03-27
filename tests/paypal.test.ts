import { generateAccessToken } from '../lib/paypal';

// Mock the generateAccessToken function
// jest.mock('../lib/paypal', () => ({
//   generateAccessToken: jest.fn(() => Promise.resolve('mocked-access-token')),
// }));

// Test to generate access token from PayPal
// test('generates token from PayPal', async () => {
//   const tokenResponse = await generateAccessToken();
//   expect(typeof tokenResponse).toBe('string');
//   expect(tokenResponse).toBe('mocked-access-token');
// });


test('generates token from paypal', async () => {
  const tokenResponse = await generateAccessToken();
  console.log(tokenResponse);
  expect(typeof tokenResponse).toBe('string');
  expect(tokenResponse.length).toBeGreaterThan(0);
});