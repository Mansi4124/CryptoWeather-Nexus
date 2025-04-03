// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link href="/">Home</Link>
      <Link href="/crypto">Crypto</Link>
      <Link href="/weather">Weather</Link>
      <Link href="/news">News</Link>
    </nav>
  );
}
