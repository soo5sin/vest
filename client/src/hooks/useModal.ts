import { useEffect, useState } from 'react';

export default function useModal() {
  const [isOpenModal, setisOpenModal] = useState(false);

  const openModalHandler = () => {
    setisOpenModal(true);
  };

  const closeModalHandler = () => {
    setisOpenModal(false);
  };

  const toggleModalHandler = () => {
    setisOpenModal((prev) => !prev);
  };

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpenModal]);

  return {
    closeModalHandler,
    toggleModalHandler,
    openModalHandler,
    isOpenModal,
  };
}
