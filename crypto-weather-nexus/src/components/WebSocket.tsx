"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCryptoPrice } from "../redux/cryptoSlice";
import { AppDispatch } from "../redux/store";
import Toast from "./Toast"; // Import the Toast component

export default function WebSocketComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const [notifications, setNotifications] = useState<{ id: string; price: number }[]>([]);

  useEffect(() => {
    const socket = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin,ethereum,dogecoin,solana");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("WebSocket Data Received:", data); 

      for (const id in data) {
        const newPrice = data[id];

        // Dispatch Redux action
        dispatch(updateCryptoPrice({ id, price: newPrice }));

      
        setNotifications((prev) => {
          const updatedNotifications = [{ id, price: newPrice }, ...prev];
          return updatedNotifications;
        });

        
        setTimeout(() => {
          setNotifications((prev) => prev.slice(0, -1));
        }, 3000);
      }
    };

    return () => {
      socket.close();
    };
  }, [dispatch]);

  return (
    <div className="fixed top-5 right-5 space-y-2 z-50">
      {notifications.map((notification, index) => (
        <Toast key={index} message={`${notification.id.toUpperCase()} updated: $${notification.price}`} type="info" />
      ))}
    </div>
  );
}
