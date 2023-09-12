import { describe, test, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('<App />', () => {
  test('App mounts properly with data 2 sample', () => {
    //Arrange
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    // Act
    const a = wrapper.container.querySelector('a');
    //Assert
    expect(a?.textContent).toBe('I should alert.');
    expect(screen.getByText(/I should alert./)).toBeInTheDocument();
  });
});
