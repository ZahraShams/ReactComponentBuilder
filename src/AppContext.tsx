import React, { createContext, useContext, useState } from 'react';

import NodeFactory from './utils/NodeFactory';
import { Action } from './utils/Actions';
import { ComponentState } from './ComponentState';
import { AppContextType } from './AppContextType';
import { AllowedCallbacks } from './AllowedCallbacks';

export const AppContext = createContext<AppContextType | null>(null);
export function AppProvider({ children, data }) {
  
  const elementTree = NodeFactory.createTreeNode(data).getElement();
  //This is a lookup structure that maintains a mapping between events (e.g., specific component actions or behaviors) and the subscribers
  const [subscribers, setSubscribers] = useState({});
  //is one of the subscribers with the key which is triggered by and event .
  const [triggeredComponent, setTriggeredComponent] = useState();

  //these is called when ever a component in JSON file has `actions` object in its value which can effetct on the state of another component
  const addComponentSubscribersDictionary: (
    key: string,
    state: ComponentState
  ) => any = function (key: string, state: ComponentState) {
    subscribers[key] = { state };
    setSubscribers(subscribers);
    return subscribers[key];
  };

  // one sample callback implemented results in changing a modal state ba key in action param 
  const handleOpenEvent = function (action: Action) {
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

  // one sample callback implemented for actions which does not have any effect on the state 
  const handleAlert = function (action: Action) {
    const message = action?.params['message'];
    alert(message);
  };
// a lookup helps me map callback key by its impleneted behavior
  const eventLookup: { [K in AllowedCallbacks]: (action: Action) => void } = {
    openModal: (action: Action) => handleOpenEvent(action),
    alert: handleAlert,
  };

  // this is the generic function called by the compoents app for requesting a behavior which maps the request with implemented callback
  const handleEvent: (action: Action) => () => void = 
  (action: Action) => {
    const mappedEvent = eventLookup[action.callback as AllowedCallbacks];
    if (!mappedEvent) {
      new Error('not impleneted');
    }

    return eventLookup[action.callback as AllowedCallbacks](action);
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
