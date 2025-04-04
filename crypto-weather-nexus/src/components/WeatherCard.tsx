 import Link from "next/link";
 
 
 const WeatherCard = () => {
   return (
     <div className="border p-4 rounded-lg shadow-md">
       {/* <h3 className="text-lg font-bold">{city}</h3>
       <p>{temp}°C - {condition}</p>
       <p>{humidity}</p> */}

       <h1 className="text-red-500 text-3xl">Wants to know about weather?</h1>
       {/* <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" /> */}
       <Link href={`/weather`} className="text-blue-500 text-center">View Details</Link>
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
  