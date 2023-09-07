import { render, screen } from '@testing-library/react';
import { AppContext } from '../AppContext';
import { AppContextType } from '../AppContextType';
import { expect, test } from 'vitest';
import data from '../../../data2.json';
import NodeFactory from '../utils/NodeFactory';
import App from '../App';

test('The App Context', () => {
  const sampleData = data;
  const elementTree = NodeFactory.createTreeNode(sampleData).getElement();

  const value: AppContextType = {
    elementTree: elementTree,
  };
  const wrapper = render(
    <AppContext.Provider value={value}>
      <App />
    </AppContext.Provider>
  );
  const h1 = wrapper.container.querySelector('#headline');
  expect(h1?.textContent).toBe('How did you like the app?');
});
