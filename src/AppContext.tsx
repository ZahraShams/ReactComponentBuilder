import React, { createContext, useContext, useState } from 'react';
import data1 from '../../data.json';
import data2 from '../../data2.json';
import NodeFactory from './utils/NodeFactory';
import { Actions } from './utils/Actions';
import { ComponentState } from './ComponentState';
import { AppContextType } from './AppContextType';
import { AllowedCallbacks } from './AllowedCallbacks';

export const AppContext = createContext<AppContextType | null>(null);
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

  const handleOpenEvent = function (action: Actions) {
    const componentKey = action?.params['componentKey'];
    console.log('raised with key', componentKey);
    subscribers[componentKey].state.isOpen =
      !subscribers[componentKey].state.isOpen;
    setSubscribers(subscribers);
    setTriggeredComponent({
      key: componentKey,
      state: subscribers[componentKey].state,
    });
  };
  const handleAlert = function (action: Actions) {
    const message = action?.params['message'];
    alert(message);
  };
  const eventLookup: { [K in AllowedCallbacks]: (action: Actions) => void } = {
    openModal: (action: Actions) => handleOpenEvent(action),
    alert: handleAlert,
  };
  const handleEvent: (action: Actions) => () => void = (action: Actions) => {
    const mappedEvent = eventLookup[action.callback];
    if (!mappedEvent) {
      new Error('not impleneted');
    }

    return eventLookup[action.callback](action);
  };
  return (
    <AppContext.Provider
      value={{
        subscribers: subscribers,
        elementTree: elementTree,
        addComponentToLookup: addComponentSubscribersDictionary,
        triggeredComponent: triggeredComponent,
        handleEvent: handleEvent,
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
