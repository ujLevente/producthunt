import React, { useState } from 'react';

const useDialog = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  return { isOpen, handleClose, handleOpen };
};

export default useDialog;
