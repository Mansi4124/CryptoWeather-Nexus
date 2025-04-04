import Link from "next/link";

interface CryptoCardProps {
  id: string;
  name: string;
  price: number;
  change: number;
  marketCap: number;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ id, name, price, change, marketCap }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md  text-white">
      <h1 className="text-white-400 text-xl font-bold flex items-center gap-2 justify-center mt-2 h-20">
        🚀 Stay Ahead! Get Live {name} Price Updates 📈💰
      </h1>

      <div className="flex justify-center mt-2">
        <Link
          href={`/crypto/${id}`}
          className="text-blue-400 font-semibold hover:underline"
        >
          🔍 Check Price Updates
        </Link>
      </div>
    </div>
  );
};

export default CryptoCard;
