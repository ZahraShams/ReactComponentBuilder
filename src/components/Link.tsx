import { useEffect } from 'react';
import { ComponentState, useApp } from '../AppContext';

function Link(props:ComponentProp) {
  const { handleOpenEvent, addComponentToLookup, subscribers } = useApp();
  const { text, actionOnComponentKey } = props;

  useEffect(() => {
    if (actionOnComponentKey && !subscribers[actionOnComponentKey])
      addComponentToLookup(actionOnComponentKey, new ComponentState());
  }, []);
  const handleOnClick = () => {
    handleOpenEvent(actionOnComponentKey);
  };
  return <a onClick={handleOnClick}>{text}</a>;
}

export default Link;
