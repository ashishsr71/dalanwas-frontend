import React from "react";
import Toast from "./Toast";

const ToastManager = ({ toasts, removeToast }) => {
  if(toasts.length==0){
    return 
  }
  return (
    <div className="fixed bottom-5 right-5 space-y-4">
      
      {toasts?.length &&toasts.map((toast) => (
        <Toast 
          key={toast.toastId} 
          message={toast.toastValue} 
          onClose={() => removeToast(toast?.toastId)} 
        />
      ))}
    </div>
  );
};

export default ToastManager;