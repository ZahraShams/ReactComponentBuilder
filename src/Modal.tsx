import React from 'react'

function Modal({ isOpen, width, height, children }) {

  return isOpen ? (
    <div style={{ border: '1px solid yellow', width: width, height: height }}>
      {...children}
    </div>
  ) : undefined;
}

export default Modal