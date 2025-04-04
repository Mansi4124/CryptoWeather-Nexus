"use client";
interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const bgColor = type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500";

  return (
    <div className={`px-4 py-2 mt-4 rounded shadow-lg text-black bg-white animate-slide-in`}>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
