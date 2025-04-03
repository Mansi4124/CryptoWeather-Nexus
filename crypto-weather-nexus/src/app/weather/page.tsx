// src/app/weather/page.tsx
"use client";
import Link from "next/link";

const cities = ["New York", "London", "Tokyo"];

export default function WeatherPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Weather</h1>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Link href={`/weather/${city.toLowerCase()}`} className="text-blue-500 hover:underline">
              {city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
