  "use client";
  import React, { useEffect, useState } from "react";
  import Link from "next/link";
  import { useSelector } from "react-redux";
  import { fetchWeatherData } from "../../redux/weatherSlice"; 
  import { useAppDispatch } from "@/redux/store";
  import { toggleFavourite } from "@/redux/favoritesSlice";
import Toast from "@/components/Toast";
  //  import { useAppDispatch } from "../../redux/store"; // Import the typed dispatch

  export default function WeatherPage() {
    const dispatch = useAppDispatch();
  const { weatherData, loading, error } = useSelector((state: any) => state.weather);
  const { favouriteCities } = useSelector((state: any) => state.favorites);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    dispatch(fetchWeatherData());
    
    const interval = setInterval(() => {
      dispatch(fetchWeatherData());
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); 
    }, 60000);

    return () => clearInterval(interval);
  }, [dispatch]);

    const handleFavouriteClick = (city: string) => {
      dispatch(toggleFavourite(city));
    };

    if (loading) return <p>Loading weather...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        {showToast && <Toast message="Weather updated" type="info" />}
        <h1 className="text-2xl font-bold">Weather</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(weatherData).map((city) => (
            <div key={city} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold flex items-center gap-3">{city} 
              <img
                    src={weatherData[city]?.current?.condition?.icon}
                    alt="Weather Icon"
                    className="w-12 h-12"
                  />
                  <button
                  onClick={() => handleFavouriteClick(city)}
                  className="ml-auto text-xl"
                >
                  {favouriteCities.includes(city) ? "❤️" : "🤍"}
                </button>
              </h2>
              {weatherData[city] ? (
                <>
                  <p>Temperature: {weatherData[city]?.current?.temp_c}°C
                    
                  </p>
                  <p>Condition: {weatherData[city]?.current?.condition?.text}</p>
                  <p>Humidity: {weatherData[city]?.current?.humidity}%</p>
                  <Link href={`/weather/${city.toLowerCase()}`} className="text-blue-500 hover:underline">
                    View More Details
                  </Link>
                </>
              ) : (
                <p>No data available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
