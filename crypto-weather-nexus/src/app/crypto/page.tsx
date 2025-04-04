"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto } from "../../redux/cryptoSlice";
import { RootState, AppDispatch } from "../../redux/store";
import WebSocketComponent from "../../components/WebSocket";

export default function CryptoPage() {
  const dispatch = useDispatch<AppDispatch>(); // ✅ Use AppDispatch
  const { data, status, error } = useSelector((state: RootState) => state.crypto);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCrypto()); // ✅ No error now
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Crypto Currencies</h1>
      <WebSocketComponent />
      <ul className="space-y-2">
        {Object.entries(data).map(([id, details]) => (
          <li key={id} className="p-3 bg-gray-800 text-white rounded-lg">
            <p className="text-blue-400 font-bold">{id.charAt(0).toUpperCase() + id.slice(1)}</p>
            <p>💰 Price: ${details.usd}</p>
            <p>📊 Market Cap: ${details.usd_market_cap.toLocaleString()}</p>
            <p className={details.usd_24h_change > 0 ? "text-green-400" : "text-red-400"}>
              📈 24h Change: {details?.usd_24h_change.toFixed(2)}%
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
