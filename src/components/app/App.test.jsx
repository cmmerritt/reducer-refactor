/* eslint-disable max-len */
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
    fireEvent.change(colorInput, { target: { value: '#0000FF' } });
    expect(screen.getByRole('colordiv')).toHaveStyle('backgroundColor: #0000ff');
  });

  // get undo button
  // fire click event on undo button
  // expect display to have backgroundColor === red
  it('fires undo button', () => {
    render(<App />);
    const colorInput = screen.getByTestId('input');
    fireEvent.change(colorInput, { target: { value: '#0000FF' } });
    const undoButton = screen.getByTestId('undo');
    fireEvent.click(undoButton);
    expect(screen.getByRole('colordiv')).toHaveStyle('backgroundColor: #ff0000');
  });

  // get redo button
  // fire click event on redo button
  // expect display to have backgroundColor === newColor
  it('fires redo button', () => {
    render(<App />);
    const colorInput = screen.getByTestId('input');
    fireEvent.change(colorInput, { target: { value: '#0000FF' } });
    const undoButton = screen.getByTestId('undo');
    fireEvent.click(undoButton);
    const redoButton = screen.getByTestId('redo');
    fireEvent.click(redoButton);
    expect(screen.getByRole('colordiv')).toHaveStyle('backgroundColor: #0000ff');
  });
});
