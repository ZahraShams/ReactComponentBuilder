import { useEffect } from 'react';
import { useApp } from '../AppContext';
import { ComponentState } from '../ComponentState';
import { AllowedEventsKeys } from '../AllowedEventsKeys';
import { ComponentProp } from './ComponentProp';

function Button(props: ComponentProp) {
  const { addComponentToLookup, subscribers, handleEvent } = useApp();
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
    handleEvent(actions.find((a) => a.type === AllowedEventsKeys.onClick));
  };

  return <button onClick={handleOnClick}>{text}</button>;
}

export default Button;
