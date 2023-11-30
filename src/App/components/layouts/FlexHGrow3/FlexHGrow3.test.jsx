import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<FlexHGrow3 />', () => {
  test('it should mount', () => {
    render(<FlexHGrow3>tyuio</FlexHGrow3>);
    
    const FlexHGrow3 = screen.getByTestId('FlexHGrow3');

    expect(FlexHGrow3).toBeInTheDocument();
  });
});