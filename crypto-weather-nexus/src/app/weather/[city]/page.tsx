// src/app/weather/[city]/page.tsx
export default function CityWeather({ params }: { params: { city: string } }) {
    return (
      <div>
        <h1 className="text-2xl">Weather in {params.city.toUpperCase()}</h1>
        {/* Fetch and display weather data here */}
      </div>
    );
  }
  