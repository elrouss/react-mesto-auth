import { useEffect } from "react";

export default function useClosePopupsOnKeyPressEsc(isOpened, handleClose) {
  useEffect(() => {
    if (!isOpened) {
      return;
    };

    function handleEscBtn(evt) {
      if (evt.key === 'Escape') {
        handleClose();
      };
    };

    document.addEventListener('keydown', handleEscBtn);

    return () => {
      document.removeEventListener('keydown', handleEscBtn);
    };
  }, [isOpened, handleClose]);
};
