import { describe, test, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('<App />', () => {
  test('App mounts properly with data 2 sample', () => {
    //Arrange
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    // Act
    const h1 = wrapper.container.querySelector('h1');
    //Assert
    expect(h1?.textContent).toBe('How did you like the app?');
    expect(screen.getByText(/How did you like the app/)).toBeInTheDocument();
  });
});
