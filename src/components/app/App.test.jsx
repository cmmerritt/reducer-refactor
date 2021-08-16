import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());

  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  // get color input
  // fire change event on color input with newColor
  // expect display to have background color === newColor
  it('gets color input', () => {
    render(<App />);
    const colorInput = screen.getByTestId('input');
    console.log(colorInput);
    fireEvent.change(colorInput, { target: { value: '#0000FF' } });
    expect(colorInput.value).toBe('#0000ff');
  });
});
