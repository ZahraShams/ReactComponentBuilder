import React, { useEffect, useState } from 'react';
import { useApp } from '../AppContext';

function Modal({ isOpen, width, height, children, keyy }) {
  const { addModal, modals, triggeredModal } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    addModal(keyy, { isOpen });
  }, []);

  useEffect(() => {
    if (triggeredModal?.key === keyy)
      setIsModalOpen(triggeredModal?.state?.isOpen);
  }, [triggeredModal]);
  return isModalOpen ? (
    <div style={{ border: '1px solid yellow', width: width, height: height }}>
      {...children}
    </div>
  ) : undefined;
}

export default Modal;
