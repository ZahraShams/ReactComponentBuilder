import { createContext, useContext } from 'react';
import data1 from '../../data.json';
import data2 from '../../data2.json';
import { ReactElementFactory } from './ReactElementFactory';
export const AppContext = createContext();
export function AppProvider({ children }) {
  const js = data1;
  const js2 = data2;
  let factory = new ReactElementFactory();
  factory.generateTree(js2);

  const modals = ['s', 's'];

  const handleOpenModal = function () {};

  return (
    <AppContext.Provider
      value={{
        modals: modals,
        onOpenModals: handleOpenModal,
        elementTree: factory.root.value,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const constext = useContext(AppContext);
  if (constext === undefined)
    throw new Error('App context was used out side of its provider');
  return constext;
}
