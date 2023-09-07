import { render } from '@testing-library/react';
import {  AppProvider } from '../AppContext';
import { describe, expect, test } from 'vitest';
import RenderResult from '../screens/RenderResult';
describe('Success_AppContext_New_Data', () => {
test('should be success with new data', () => {
  //Arrange
  const sampleData = {
    Content: {
      type: 'BoxComponent',
    },
    Children: {
      Headline: {
        Content: {
          type: 'H1Component',
          props: {
            text: 'register',
          },
        },
      },
    },
  };
  const wrapper = render(
    <AppProvider data={sampleData}>
      <RenderResult />
    </AppProvider>
  );
  //Act
  const h1 = wrapper.container.querySelector('h1');
  //Assert
  expect(h1?.textContent).toBe('register');
});
});
