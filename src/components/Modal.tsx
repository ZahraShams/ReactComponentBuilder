import React, { useEffect, useState } from 'react';
import { useApp } from '../AppContext';
import { ComponentProp } from './ComponentProp';

//Todo: I implemented modal as simple div element just like Box with the difference in the color ! for future uses it can be imporved and use an atual mdal instead
function Modal(props: ComponentProp) {
  const { isOpen, width, height, children, nodeKey } = props;
  const { triggeredComponent } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    if (triggeredComponent?.key === nodeKey)
      setIsModalOpen(triggeredComponent?.state?.isOpen);
  }, [nodeKey, triggeredComponent]);

  return isModalOpen ? (
    <div
      id={nodeKey}
      style={{ border: '1px solid yellow', width: width, height: height }}
    >
      {...children}
    </div>
  ) : undefined;
}
export default Modal;
