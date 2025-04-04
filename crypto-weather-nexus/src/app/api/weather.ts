export async function fetchWeather(city: string) {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
}
