import React, { useEffect, useState } from "react";
import "./toastMessage.css";

const Toast = ({ message, duration = 3000, color, onclose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onclose();
      }, 300); // Match fade-out duration
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`toast-message ${visible ? "show" : "hide"}`}
      style={{ backgroundColor: color }}
    >
      {message}
    </div>
  );
};

export default Toast;
