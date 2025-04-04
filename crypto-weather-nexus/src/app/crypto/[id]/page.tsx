"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

export default function CryptoDetailsPage() {

  const params = useParams();
  const id = params?.id as string; 
  const [cryptoData, setCryptoData] = useState<any>(null);
  const [historicalPrices, setHistoricalPrices] = useState<{ date: string; price: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
  
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error state before fetching
  
        const [cryptoResponse, historyResponse] = await Promise.all([
          fetch(`https://api.coingecko.com/api/v3/coins/${id}`),
          fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`),
        ]);
  
        if (!cryptoResponse.ok || !historyResponse.ok) {
          throw new Error("API response not OK");
        }
  
        const cryptoData = await cryptoResponse.json();
        const historyData = await historyResponse.json();
  
        if (!historyData.prices) {
          throw new Error("Invalid historical data");
        }
  
        const formattedHistory = historyData.prices.map((entry: [number, number]) => ({
          date: new Date(entry[0]).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
          price: entry[1],
        }));
  
        setCryptoData(cryptoData);
        setHistoricalPrices(formattedHistory);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch cryptocurrency data.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchCryptoData();
  }, [id]);
  
  if (loading) return <p className="text-blue-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">
        {cryptoData?.name} ({cryptoData?.symbol?.toUpperCase()})
      </h1>
      <p className="text-lg">
        💰 Current Price: ${cryptoData?.market_data?.current_price?.usd?.toLocaleString() ?? "N/A"}
      </p>
      <p>
        📊 Market Cap: $
        {cryptoData?.market_data?.market_cap?.usd
          ? cryptoData.market_data.market_cap.usd.toLocaleString()
          : "N/A"}
      </p>
      <p
        className={
          cryptoData?.market_data?.price_change_percentage_24h > 0
            ? "text-green-400"
            : "text-red-400"
        }
      >
        📈 24h Change:{" "}
        {cryptoData?.market_data?.price_change_percentage_24h
          ? cryptoData.market_data.price_change_percentage_24h
          : "N/A"}
        %
      </p>

      {/* ✅ Historical Prices Table */}
      <h2 className="text-2xl font-semibold mt-5">📉 Historical Prices (Last 7 Days)</h2>
      <div className="overflow-x-auto mt-2">
        <table className="w-full border-collapse border  border p-4 rounded-lg shadow-md">
          <thead>
            <tr className=" text-white">
              <th className="border p-2">📅 Date</th>
              <th className="border p-2">💲 Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            {historicalPrices.length > 0 ? (
              historicalPrices.map((entry, index) => (
                <tr key={index} className="text-center text-gray-300">
                  <td className="border  p-2">{entry.date}</td>
                  <td className="border p-2 font-bold">${entry.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="p-3 text-center text-gray-500">
                  No historical data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
