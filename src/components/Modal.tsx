import React, { useEffect, useState } from 'react';
import { useApp } from '../AppContext';

function Modal(props:ComponentProp) {
  const { isOpen, width, height, children, nodeKey } = props;
  const { triggeredComponent } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    if (triggeredComponent?.key === nodeKey)
      setIsModalOpen(triggeredComponent?.state?.isOpen);
  }, [nodeKey, triggeredComponent]);

  return isModalOpen ? (
    <div style={{ border: '1px solid yellow', width: width, height: height }}>
      {...children}
    </div>
  ) : undefined;
}

export default Modal;
