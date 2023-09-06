import React, { useEffect, useState } from 'react';
import { useApp } from '../AppContext';

function Modal(props) {
  const { isOpen, width, height, children, nodeKey } = props;
  const { addModal, modals, triggeredModal } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    addModal(nodeKey, { isOpen });
  }, []);

  useEffect(() => {
    if (triggeredModal?.key === nodeKey)
      setIsModalOpen(triggeredModal?.state?.isOpen);
  }, [triggeredModal]);
  return isModalOpen ? (
    <div style={{ border: '1px solid yellow', width: width, height: height }}>
      {...children}
    </div>
  ) : undefined;
}

export default Modal;
