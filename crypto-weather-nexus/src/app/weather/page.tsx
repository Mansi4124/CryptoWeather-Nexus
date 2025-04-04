  "use client";
  import React, { useEffect, useState } from "react";
  import Link from "next/link";
  import { useSelector } from "react-redux";
  import { fetchWeatherData } from "../../redux/weatherSlice"; 
  import { useAppDispatch } from "@/redux/store";
  import { toggleFavouriteCity } from "@/redux/favoritesSlice";
import Toast from "@/components/Toast";
import Card from "@/components/Card";
  //  import { useAppDispatch } from "../../redux/store"; // Import the typed dispatch

  export default function WeatherPage() {
    const dispatch = useAppDispatch();
  const { weatherData, loading, error } = useSelector((state: any) => state.weather);
  const { likedCities } = useSelector((state: any) => state.favorites);
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
      dispatch(toggleFavouriteCity(city));
    };

    if (loading) return <p>Loading weather...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
      {showToast && <Toast message="Weather updated" type="info" />}
      <h1 className="text-2xl font-bold mb-5">Weather</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.keys(weatherData).map((city) => (
          <Card
            key={city}
            id={city}
            title={city}
            icon={weatherData[city]?.current?.condition?.icon}
            liked={likedCities.includes(city)}
            onLikeClick={toggleFavouriteCity}
            link={`/weather/${city.toLowerCase()}`}
            details={[
              { label: "Temperature", value: `${weatherData[city]?.current?.temp_c}°C` },
              { label: "Condition", value: weatherData[city]?.current?.condition?.text },
              { label: "Humidity", value: `${weatherData[city]?.current?.humidity}%` },
            ]}
          />
        ))}
      </div>
    </div>
    );
  }
