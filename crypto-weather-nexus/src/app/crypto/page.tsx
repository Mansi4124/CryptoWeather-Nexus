"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto } from "../../redux/cryptoSlice";
import { RootState, AppDispatch } from "../../redux/store";
import WebSocketComponent from "../../components/WebSocket";
import { useRouter } from "next/navigation"; // ✅ Import Next.js router
import Link from "next/link";

export default function CryptoPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.crypto);
  const router = useRouter(); // ✅ Use router for navigation

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCrypto());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p className="text-blue-500 text-lg">Loading...</p>;
  if (error) return <p className="text-red-500 text-lg">{error}</p>;

  return (
    <div className="p-6 bg-black-900 min-h-screen">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-white mb-6 text-center">📈 Crypto Currencies</h1>

      {/* Live Updates Component */}
      <div className="mb-6">
        <WebSocketComponent />
      </div>

      {/* Crypto List Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(data).map(([id, details]) => (
          <div
            key={id}
            className=" p-5 rounded-lg shadow-lg transition hover:scale-105 border p-4 rounded-lg shadow-md"
          >
            {/* Crypto Name */}
            <h2 className="text-xl font-bold text-blue-400 mb-2">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </h2>

            {/* Price & Market Cap */}
            <p className="text-gray-300">💰 Price: <span className="font-semibold">${details.usd}</span></p>
            <p className="text-gray-300">📊 Market Cap: <span className="font-semibold">${details.usd_market_cap.toLocaleString()}</span></p>

            {/* 24h Price Change */}
            <p className={details.usd_24h_change > 0 ? "text-green-400" : "text-red-400"}>
              📈 24h Change: <span className="font-semibold">{details?.usd_24h_change}%</span>
            </p>

            {/* View Details Button */}
            <div className="mt-4">
              <Link
                href={`/crypto/${id}`}
                className="block text-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
              >
                View Past Prices
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
