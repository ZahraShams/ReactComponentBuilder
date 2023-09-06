import { useEffect } from 'react';
import { useApp } from '../AppContext';
import { ComponentState } from '../ComponentState';
import { AllowedEventsKeys } from '../AllowedEventsKeys';
import { ComponentProp } from './ComponentProp';

function Link(props:ComponentProp) {
  const { handleEvent, addComponentToLookup, subscribers } = useApp();
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
    handleEvent(actions.find((a) => a.type === AllowedEventsKeys.onClick));
  };

  return <a  onClick={handleOnClick}>{text}</a>;
}

export default Link;
