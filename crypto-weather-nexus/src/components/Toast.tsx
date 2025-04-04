interface ToastProps {
  message: string;
  type: "success" | "error" | "info"; // Toast type
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  return (
    <div className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white bg-gray-500`}>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
