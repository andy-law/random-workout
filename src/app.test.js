import React from 'react';
import { render } from '@testing-library/react';
import App from './app';


describe('app', () => {
  test('renders Generate workout link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Generate workout');
    expect(linkElement).toBeInTheDocument();
  });
});
