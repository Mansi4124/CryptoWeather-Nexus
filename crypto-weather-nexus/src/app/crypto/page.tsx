// src/app/crypto/page.tsx
"use client";
import Link from "next/link";

const cryptos = [
  { id: "bitcoin", name: "Bitcoin" },
  { id: "ethereum", name: "Ethereum" },
  { id: "dogecoin", name: "Dogecoin" },
];

export default function CryptoPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Cryptocurrencies</h1>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id}>
            <Link href={`/crypto/${crypto.id}`} className="text-blue-500 hover:underline">
              {crypto.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
