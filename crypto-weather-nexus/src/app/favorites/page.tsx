"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function FavoritesPage() {
  const { likedCities, likedCryptos } = useSelector((state: any) => state.favorites);

  const isEmpty = likedCities.length === 0 && likedCryptos.length === 0;

  if (isEmpty) {
    return <p className="text-center text-gray-500 mt-4">No favorites yet.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">⭐ Favorite Items</h1>

      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6">
        {/* Favorite Cities Table */}
        {likedCities.length > 0 && (
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-2 text-blue-500 text-center">🏙️ Favorite Cities</h2>
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                {likedCities.map((city: string, index: number) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Favorite Cryptos Table */}
        {likedCryptos.length > 0 && (
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-2 text-green-500 text-center">💰 Favorite Cryptos</h2>
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                {likedCryptos.map((crypto: string, index: number) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{crypto.toUpperCase()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
