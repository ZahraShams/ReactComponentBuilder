import { render, screen } from '@testing-library/react';
import {  AppProvider, useApp } from '../AppContext';
import { describe, expect, test, vi } from 'vitest';
import RenderResult from '../screens/RenderResult';
import userEvent  from '@testing-library/user-event'

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

test('should be success with new data and modal should apear on fist button click and close on second',async () => {
  //Arrange
  const sampleData = {
    Content: {
      type: 'BoxComponent',
    },
    Children: {
      Button: {
        Content: {
          type: 'ButtonComponent',
          props: {
            text: 'open',
            actions: [
              {
                type: 'onClick',
                callback: 'openModal',
                params: {
                  componentKey: 'Modal',
                },
              },
            ],
          },
        },
      },
      Modal: {
        Content: {
          type: 'ModalComponent',
          props: {
            isOpen: false,
            width: '500px',
            height: '400px',
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
  const user = userEvent.setup()
  const spyAnchorTag = vi.spyOn(user, 'click') 


  //Act
  const button = wrapper.container.querySelector('button');
  await user.click(button)

  const modal = wrapper.container.querySelector('#Modal');
  //Assert
  expect(modal).toBeInTheDocument();

});
});
