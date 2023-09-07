
import { render, screen } from '@testing-library/react';
import { AppContext } from '../AppContext';
import { AppContextType } from '../AppContextType';
import { test } from 'vitest';

test('The App Context', () => {
  // Test the user context directly
  // changing the user value

  const value: AppContextType = {
  }
  
  render(
    <AppContext.Provider value={value}>
    </AppContext.Provider>
  )
  
});
