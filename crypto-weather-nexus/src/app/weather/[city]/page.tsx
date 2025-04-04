"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchWeather } from "@/app/api/weatherHistory";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function CityWeather() {
  const params = useParams();
  const city = params?.city as string;

  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      const data = await fetchWeather(city);
      console.log("Fetched Weather Data:", data); // ✅ Debugging
      if (data) {
        setWeatherData(data);
      }
      setLoading(false);
    };

    if (city) {
      getWeather();
    }
  }, [city]);

  // Extract data for the chart
  const dates = weatherData?.map((entry: any) => entry.forecast.forecastday[0].date) || [];
  const avgTemps = weatherData?.map((entry: any) => entry.forecast.forecastday[0].day.avgtemp_c) || [];
  const humidity = weatherData?.map((entry: any) => entry.forecast.forecastday[0].day.avghumidity) || [];
  const windSpeed = weatherData?.map((entry: any) => entry.forecast.forecastday[0].day.maxwind_kph) || [];

  // Chart.js datasets
  const temperatureData = {
    labels: dates,
    datasets: [
      {
        label: "Avg Temperature (°C)",
        data: avgTemps,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const humidityData = {
    labels: dates,
    datasets: [
      {
        label: "Humidity (%)",
        data: humidity,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  const windSpeedData = {
    labels: dates,
    datasets: [
      {
        label: "Wind Speed (kph)",
        data: windSpeed,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Trends in {city.toUpperCase()}</h1>

      {loading ? (
        <p className="mt-4">Loading weather data...</p>
      ) : weatherData && weatherData.length > 0 ? (
        <>
          {/* Charts Section - Display in a grid with 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Temperature Chart */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold text-center">📈 Temperature Trend</h2>
              <Line data={temperatureData} />
            </div>

            {/* Humidity Chart */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold text-center">💧 Humidity Trend</h2>
              <Line data={humidityData} />
            </div>

            {/* Wind Speed Chart */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold text-center">💨 Wind Speed Trend</h2>
              <Line data={windSpeedData} />
            </div>
          </div>

          {/* Weather Data Table */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">📋 Weather Data Table</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full shadow-md rounded">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border">Date</th>
                    <th className="py-2 px-4 border">🌡 Temp (°C)</th>
                    <th className="py-2 px-4 border">💧 Humidity (%)</th>
                    <th className="py-2 px-4 border">💨 Wind Speed (kph)</th>
                    <th className="py-2 px-4 border">🌥 Condition</th>
                    <th className="py-2 px-4 border">🌅 Sunrise</th>
                    <th className="py-2 px-4 border">🌇 Sunset</th>
                  </tr>
                </thead>
                <tbody>
                  {weatherData.map((entry: any, index: number) => (
                    <tr key={index} className="text-center border-t">
                      <td className="py-2 px-4 border">{entry.forecast.forecastday[0].date}</td>
                      <td className="py-2 px-4 border">{entry.forecast.forecastday[0].day.avgtemp_c}°C</td>
                      <td className="py-2 px-4 border">{entry.forecast.forecastday[0].day.avghumidity}%</td>
                      <td className="py-2 px-4 border">{entry.forecast.forecastday[0].day.maxwind_kph} kph</td>
                      <td className="py-2 px-4 border">
                        {entry.forecast.forecastday[0].day.condition?.text}
                        <img
                          src={entry.forecast.forecastday[0].day.condition?.icon}
                          alt="Weather Icon"
                          className="inline-block w-6 h-6 ml-2"
                        />
                      </td>
                      <td className="py-2 px-4 border">{entry.forecast.forecastday[0].astro.sunrise}</td>
                      <td className="py-2 px-4 border">{entry.forecast.forecastday[0].astro.sunset}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <p className="mt-4">No weather data available.</p>
      )}
    </div>
  );
}
