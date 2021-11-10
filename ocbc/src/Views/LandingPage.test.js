import React from 'react';
import LandingPage from './LandingPage';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

test('on initial render, page loads with login button enabled', () => {
  render(<LandingPage />);
  screen.getByRole('button', { name: /login/i }).toBeEnabled();
});

// test('authentication triggers when wrong id/pw', () => {
//     render(<LandingPage username="ocbc" password="123456"/>)
//     screen.debug()
// });
