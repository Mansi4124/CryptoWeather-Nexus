import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCryptoPrice } from "@/redux/cryptoSlice";

const WebSocketComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin,ethereum");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(updateCryptoPrice(data));
    };

    return () => socket.close();
  }, [dispatch]);

  return null; // No UI needed, just handling WebSocket.
};

export default WebSocketComponent;
