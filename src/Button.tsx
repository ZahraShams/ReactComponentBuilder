import React, { useContext } from 'react'
import { useApp } from './AppContext';

function Button({text}) {
  const { onOpenModals } = useApp();

    return <h1>{text}</h1>;
  }

export default Button