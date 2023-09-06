import { useEffect } from 'react';
import { ComponentState, useApp } from '../AppContext';

function Button(props: ComponentProp) {
  const { handleOpenEvent, addComponentToLookup, subscribers } = useApp();
  const { text, actionOnComponentKey } = props;

  useEffect(() => {
    if (actionOnComponentKey && !subscribers[actionOnComponentKey])
      addComponentToLookup(actionOnComponentKey, new ComponentState());
  }, []);

  const handleOnClick = () => {
    handleOpenEvent(actionOnComponentKey);
  };

  return <button onClick={handleOnClick}>{text}</button>;
}

export default Button