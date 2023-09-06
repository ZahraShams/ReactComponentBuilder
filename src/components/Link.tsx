import React from 'react'
import { useApp } from '../AppContext';

function Link(props) {
  const { onOpenModals } = useApp();
  const { text, actionOnComponentKey } = props;

  const handleOnClick= ()=>{
    onOpenModals(actionOnComponentKey);
  }
  return <a onClick={handleOnClick}>{text}</a>;
}

export default Link