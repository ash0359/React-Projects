import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  
  
  useEffect(() => {
    const timer =  setTimeout(() => {
    onConfirm( );
}, 3000);

return () => {
  clearTimeout(timer);
}
  }, [onConfirm]);
  /**method dependencyies like onConfirm can cause infinite loops because each time app component executes,
  onConfirm is changed again and two object/methods are considered not equal even if they do the exact same thing
  to avoid this, use useCallBack in app*/
 

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={3000} />
    </div>
  );
}
