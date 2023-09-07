
import { describe, test, expect, it } from 'vitest'
import { render, screen, fireEvent, getByText } from '@testing-library/react'

import App from '../App';

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(<App />)
    expect(wrapper).toBeTruthy()

    // Get by h1
    const h1 = wrapper.container.querySelector('h1')
    expect(h1?.textContent).toBe('How did you like the app?')
      expect(
    screen.getByText(
      /How did you like the app/
    )
  ).toBeInTheDocument()
    
  })
  
});
