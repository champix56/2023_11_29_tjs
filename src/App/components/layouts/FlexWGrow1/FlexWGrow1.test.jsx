import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexWGrow1 from './FlexWGrow1';

describe('<FlexWGrow1 />', () => {
  test('it should mount', () => {
    render(<FlexWGrow1 ></FlexWGrow1>);
    
    const FlexWGrow1 = screen.getByTestId('FlexWGrow1');

    expect(FlexWGrow1).toBeInTheDocument();
  });
});