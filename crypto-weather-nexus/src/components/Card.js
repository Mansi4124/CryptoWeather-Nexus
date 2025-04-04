"use client";
import Link from "next/link";

export default function Card({ 
  id, 
  title, 
  icon, 
  details, 
  liked, 
  onLikeClick, 
  link 
}) {
  return (
    <div className="border p-4 rounded-lg shadow-md transition hover:scale-105">
      <h2 className="text-xl font-bold flex items-center gap-3">
        {title} 
        {icon && <img src={icon} alt="Icon" className="w-12 h-12" />}
        <button onClick={() => onLikeClick(id)} className="ml-auto text-xl">
          {liked ? "❤️" : "🤍"}
        </button>
      </h2>

      {details.map(({ label, value }) => (
        <p key={label} className="text-gray-300">
          {label}: <span className="font-semibold">{value}</span>
        </p>
      ))}

      <div className="mt-4">
        <Link href={link} className="block text-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
          View More Details
        </Link>
      </div>
    </div>
  );
}
