// src/app/api/weather.ts
export async function fetchWeather(city: string) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`);
    return res.json();
  }
  