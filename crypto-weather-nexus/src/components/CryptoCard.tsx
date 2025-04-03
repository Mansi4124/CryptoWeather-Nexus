interface CryptoCardProps {
    id: string;
    name: string;
    price: number;
    change: number;
    marketCap: number;
  }
  
  const CryptoCard: React.FC<CryptoCardProps> = ({ id, name, price, change, marketCap }) => {
    return (
      <div className="crypto-card">
        <h3>{name} ({id})</h3>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Change: {change}%</p>
        <p>Market Cap: ${marketCap.toLocaleString()}</p>
      </div>
    );
  };
  
  export default CryptoCard;
  