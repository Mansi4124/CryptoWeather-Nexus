"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto } from "../../redux/cryptoSlice";
import { toggleFavouriteCrypto } from "../../redux/favoritesSlice"; // Import crypto toggle function
import { RootState, AppDispatch } from "../../redux/store";
import WebSocketComponent from "../../components/WebSocket";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "@/components/Card";

export default function CryptoPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.crypto);
  const likedCryptos = useSelector((state: RootState) => state.favorites.likedCryptos); // Get liked cryptos
  const router = useRouter();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCrypto());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p className="text-blue-500 text-lg">Loading...</p>;
  if (error) return <p className="text-red-500 text-lg">{error}</p>;

  return (
    <div className="p-6 bg-black-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">📈 Crypto Currencies</h1>

      <div className="mb-6">
        <WebSocketComponent />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(data).map(([id, details]) => (
          <Card
            key={id}
            id={id}
            title={id.charAt(0).toUpperCase() + id.slice(1)}
            liked={likedCryptos.includes(id)}
            icon={''}
            onLikeClick={() => dispatch(toggleFavouriteCrypto(id))}
            link={`/crypto/${id}`}
            details={[
              { label: "💰 Price", value: `$${details.usd}` },
              { label: "📊 Market Cap", value: `$${details.usd_market_cap.toLocaleString()}` },
              { 
                label: "📈 24h Change", 
                value: `${details?.usd_24h_change}%`, 
                className: details.usd_24h_change > 0 ? "text-green-400" : "text-red-400"
              },
            ]}
          />
        ))}
      </div>
    </div>
  );
}
