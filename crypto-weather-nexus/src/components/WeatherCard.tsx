import Link from "next/link";

const WeatherCard = () => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      {/* <h3 className="text-lg font-bold">{city}</h3>
       <p>{temp}°C - {condition}</p>
       <p>{humidity}</p> */}

      <h1 className="text-white-500 text-xl font-bold flex items-center gap-2  justify-center mt-2 h-20">
        🌤️ Ready to Explore the Weather? Stay Updated with Live Forecasts!☀️🌇
      </h1>

      {/* <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" /> */}
      <div className="flex justify-center mt-2">
        <Link
          href={`/weather`}
          className="text-blue-500 font-semibold hover:underline"
        >
          View
        </Link>
      </div>
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
