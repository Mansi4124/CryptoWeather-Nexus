// src/app/api/weather.ts
export async function fetchWeather(city: string) {
  const res = await fetch(
      
      `https://api.weatherapi.com/v1/current.json?key=769657d6f4ff4ae4bcf161638250304&q=${city}`
  );

  if (!res.ok) {
      throw new Error("Failed to fetch weather data");
  }

  return res.json();
}

  