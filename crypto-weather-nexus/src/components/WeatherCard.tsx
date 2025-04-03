 import Link from "next/link";
 interface CryptoCardProps {
    city: string;
    temp: any;
    condition: any;
    icon: any;
   
  }
 const WeatherCard: React.FC<CryptoCardProps> = ({ city, temp, condition, icon }) => {
   return (
     <div className="border p-4 rounded-lg shadow-md">
       <h3 className="text-lg font-bold">{city}</h3>
       <p>{temp}°C - {condition}</p>
       <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
       <Link href={`/weather/${city}`} className="text-blue-500">View Details</Link>
     </div>
   );
 };

export default WeatherCard;

// const WeatherCard = () => {
//     return (
//       <div className="border p-4 rounded-lg shadow-md">
//         {/* <h3 className="text-lg font-bold">{city}</h3>
//         <p>{temp}°C - {condition}</p>
//         <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
//         <Link href={`/weather/${city}`} className="text-blue-500">View Details</Link> */}
//       </div>
//     );
//   };
  
//   export default WeatherCard;
  