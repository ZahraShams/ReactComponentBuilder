import { useEffect } from 'react';
import { useApp } from '../AppContext';
import { ComponentState } from '../ComponentState';
import { AllowedEventsKeys } from '../AllowedEventsKeys';
import { ComponentProp } from './ComponentProp';

function Button(props: ComponentProp) {
  const { addComponentToLookup, subscribers, handleEvent, nodeKey } = useApp();
  const { text, actions } = props;

  //Todo : can be extracted to a separate hook and be
  useEffect(() => {
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

  const handleOnClick = () => {
    //Todo: should manage cases where multiple callback are configured for one action type eg: [onClick->openModal, onClick->alert] using filter instead of find and etc.
    handleEvent(actions.find((a) => a.type === AllowedEventsKeys.onClick));
  };

  return <button id={nodeKey} onClick={handleOnClick}>{text}</button>;
}

export default Button;
