// src/app/page.tsx
import WeatherCard from "@/components/WeatherCard";
import CryptoCard from "@/components/CryptoCard";
import NewsCard from "@/components/NewsCard";
// import Favourie from "../app/favorites/page";
export default function HomePage() {
  return (
    <div>
      <h1 className="text-xl font-bold pb-2">CryptoWeather Nexus</h1>
      <div className="grid grid-cols-1 gap-5">
        <WeatherCard />
       <CryptoCard id={""} name={""} price={0} change={0} marketCap={0}/>
       <NewsCard title={""} source={""} date={undefined} url={undefined} />
       {/* <Favourie/> */}
       
      </div>
    </div>
  );
}
