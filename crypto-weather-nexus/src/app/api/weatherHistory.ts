export async function fetchWeather(city: string) {
    const API_KEY = "769657d6f4ff4ae4bcf161638250304";
    const today = new Date();
    
    // Generate last 4 dates (YYYY-MM-DD format)
    const lastFourDays = Array.from({ length: 4 }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() - (i + 1));
      return date.toISOString().split("T")[0];
    });
  
    try {
      // Fetch data for last 4 days using Promise.all
      console.log(lastFourDays)
      const responses = await Promise.all(
        lastFourDays.map(async (date) => {
          const res = await fetch(
            `https://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${city}&dt=${date}`
          );
  
          if (!res.ok) {
            throw new Error(`Failed to fetch weather data for ${date}`);
          }
  
          return res.json();
        })
      );
  
      return responses;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  }
  