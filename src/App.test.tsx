import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nutritional calendar app', () => {
  render(<App />);
  const titleElement = screen.getByText(/calendario nutricional/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders weekly plan section', () => {
  render(<App />);
  const weeklyPlanElement = screen.getByText('📅 Plan Semanal');
  expect(weeklyPlanElement).toBeInTheDocument();
});

test('renders health tips section', () => {
  render(<App />);
  const healthTipsElement = screen.getByText(/consejo saludable/i);
  expect(healthTipsElement).toBeInTheDocument();
});
