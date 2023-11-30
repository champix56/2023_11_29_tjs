import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexHGrow3 from './FlexHGrow3';

describe('<FlexHGrow3 />', () => {
  test('it should mount', () => {
    render(<FlexHGrow3 ></FlexHGrow3>);
    
    const FlexHGrow3 = screen.getByTestId('FlexHGrow3');

    expect(FlexHGrow3).toBeInTheDocument();
  });
});