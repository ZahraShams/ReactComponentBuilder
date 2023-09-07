import { useEffect } from 'react';
import { useApp } from '../AppContext';
import { ComponentState } from '../ComponentState';
import { AllowedEventsKeys } from '../AllowedEventsKeys';
import { ComponentProp } from './ComponentProp';

function Button(props: ComponentProp) {
  const { addComponentToLookup, subscribers, handleEvent, nodeKey } = useApp();
  const { text, actions } = props;

  //Todo : can be extracted to a separate hook and be reusable
  useEffect(() => {
    /* if this component had an action object in its props having componentKey , it means it can have effect on another component state
    so by this rule I add those components by their key as subscibers that their state may be changed by an event
    */
    actions?.map((act) => {
      if (
        act?.params['componentKey'] &&
        !subscribers[act?.params['componentKey']]
      ) {
        addComponentToLookup(act?.params['componentKey'], new ComponentState());
      }
      return act;
    });
  }, []);

  //Todo: it can be extended to accept multiple actions eg. onClick:openModal, onClick:addLog
  // for button I implenented onClick event which used `handleEvent` from the AppContext to pass the event detail("type", "callback" and etc.)
  const handleOnClick = () => {
    //Todo: should manage cases where multiple callback are configured for one action type eg: [onClick->openModal, onClick->alert] using filter instead of find and etc.
    handleEvent(actions.find((a) => a.type === AllowedEventsKeys.onClick));
  };

  return (
    <button id={nodeKey} onClick={handleOnClick}>
      {text}
    </button>
  );
}

export default Button;
