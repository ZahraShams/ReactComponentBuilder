import { createContext, useContext, useState } from 'react';
import data1 from '../../data.json';
import data2 from '../../data2.json';
import { ReactElementFactory } from './utils/ReactElementFactory';
export const AppContext = createContext();
export function AppProvider({ children }) {
  const js = data1;
  const js2 = data2;
  let factory = new ReactElementFactory();
  factory.generateTree(js2);
  const [modals,setModals] = useState({})
  const [triggeredModal,setTriggeredModal] = useState()

  const addModal = function (key:String,state) {
    modals[key] = { state };
    setModals(modals);

    return modals[key];
  };





  const handleOpenModal = function (modalKey) {
    console.log('raised with key', modalKey);
      modals[modalKey].state.isOpen = !modals[modalKey].state.isOpen;
      setModals(modals);
      setTriggeredModal({ key: modalKey, state: modals[modalKey].state });

  };

  return (
    <AppContext.Provider
      value={{
        modals: modals,
        onOpenModals: handleOpenModal,
        elementTree: factory.root.value,
        addModal:addModal,
        triggeredModal:triggeredModal
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
