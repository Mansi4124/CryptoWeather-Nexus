// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <nav className="p-4 text-l  text-white font-bold flex justify-center space-x-5">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/crypto" className="hover:underline">Crypto</Link>
      <Link href="/weather" className="hover:underline">Weather</Link>
      <Link href="/news" className="hover:underline">News</Link>
      <Link href="/favorites" className="hover:underline">Favourites</Link>
    </nav>
  );
}
