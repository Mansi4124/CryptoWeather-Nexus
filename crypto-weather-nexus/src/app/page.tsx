// src/app/page.tsx
import WeatherCard from "@/components/WeatherCard";
import CryptoCard from "@/components/CryptoCard";
import NewsCard from "@/components/NewsCard";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">CryptoWeather Nexus</h1>
      <div className="grid grid-cols-3 gap-4">
        <WeatherCard city={""} temp={undefined} condition={undefined} icon={undefined} />
       <CryptoCard id={""} name={""} price={0} change={0} marketCap={0}/>
       <NewsCard title={""} source={""} date={undefined} url={undefined} />
      </div>
    </div>
  );
}
