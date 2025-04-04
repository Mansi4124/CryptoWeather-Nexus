"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function FavoritesPage() {
  const { favouriteCities } = useSelector((state: any) => state.favorites);

  if (favouriteCities.length === 0)
    return <p className="text-center text-gray-500 mt-4">No favorite cities yet.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Favorite Cities</h1>

      <table className="w-full border-collapse border border-gray-300">
        <tbody>
          {favouriteCities.map((city: string, index: number) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
