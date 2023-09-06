import React, { createContext, useContext, useState } from 'react';
import data1 from '../../data.json';
import data2 from '../../data2.json';
import NodeFactory from './utils/NodeFactory';
export const AppContext = createContext();

export class ComponentState{
  isOpen:boolean=false
  isFocused:boolean=false
}
type AppSubsrcibersLookUp = { [key: string]: { state: ComponentState } };
interface AppContexValue {
  subscribers: AppSubsrcibersLookUp | undefined;
  onOpenModals: handleOpenModal;
  elementTree: JSX.Element;
  addComponentToSubscribers: (key: string, state:ComponentState) => AppSubsrcibersLookUp;
  triggeredComponent: triggeredComponent;
}

export function AppProvider({ children }) {
  const js = data1;
  const js2 = data2;
  const elementTree = NodeFactory.createTreeNode(js2).getElement();
  const [subscribers, setSubscribers] = useState({});
  const [triggeredComponent, setTriggeredComponent] = useState();

  const addComponentSubscribersDictionary: (
    key: string,
    state: ComponentState
  ) => any = function (key: string, state: ComponentState) {
    subscribers[key] = { state };
    setSubscribers(subscribers);
    return subscribers[key];
  };

  const handleOpenEvent = function (componentKey:string) {
    console.log('raised with key', componentKey);
    subscribers[componentKey].state.isOpen = !subscribers[componentKey].state.isOpen;
    setSubscribers(subscribers);
    setTriggeredComponent({ key: componentKey, state: subscribers[componentKey].state });
  };

  return (
    <AppContext.Provider
      value={{
        subscribers: subscribers,
        handleOpenEvent: handleOpenEvent,
        elementTree: elementTree,
        addComponentToLookup: addComponentSubscribersDictionary,
        triggeredComponent: triggeredComponent,
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
