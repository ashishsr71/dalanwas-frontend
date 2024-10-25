import { useState } from "react";
import { v4 as uuid4 } from "uuid";

export default function useToast() {
  const [toasts, setToasts] = useState([]);

  function toCallToast(toastValue) {
    const toastId = uuid4();
    setToasts((prev) => [...prev, { toastValue, toastId }]);

    // Automatically remove the toast after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.toastId !== toastId));
    }, 3000);
  }

  function removeToast(toastId) {
    setToasts((prev) => prev.filter((toast) => toast.toastId !== toastId));
  }

  return { toasts, toCallToast, removeToast };
}