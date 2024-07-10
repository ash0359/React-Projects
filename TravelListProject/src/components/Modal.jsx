import {  useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if(open)
    {
      dialog.current.showModal();
    }
    else{
      dialog.current.close();
    }
  }, [open])
  //the [open] dependency tells us open is used in the useEffect method as a dependency (if open is changed the useEffect will execute)

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
