import React, { useContext } from 'react'
import { AppContext, useApp } from './AppContext';

function Modal({ isOpen, width, height, children }) {

  const {modals} = useApp();

  return isOpen ? (
    <div style={{ border: '1px solid yellow', width: width, height: height }}>
      {...children}
    </div>
  ) : undefined;
}

export default Modal