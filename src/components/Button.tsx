import { useEffect } from 'react';
import { AllowedEventsKeys, ComponentState, useApp } from '../AppContext';
import { ComponentProp } from './ComponentProp';

function Button(props: ComponentProp) {
  const { addComponentToLookup, subscribers, handleEvent } = useApp();
  const { text, actions } = props;

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
    // handleOpenEvent(actionOnComponentKey);
    handleEvent(actions.find((a) => a.type === AllowedEventsKeys.onClick));
  };

  return <button onClick={handleOnClick}>{text}</button>;
}

export default Button;
