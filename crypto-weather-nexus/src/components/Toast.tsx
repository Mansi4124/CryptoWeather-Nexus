interface ToastProps {
    message: string;
    type: "success" | "error" | "info"; // <-- Add valid types
  }
  
  const Toast: React.FC<ToastProps> = ({ message, type }) => {
    return (
      <div className={`toast toast-${type}`}>
        <p>{message}</p>
      </div>
    );
  };
  
  export default Toast;
  