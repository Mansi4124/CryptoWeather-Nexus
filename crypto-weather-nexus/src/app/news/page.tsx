// src/app/news/page.tsx

interface NewsItem {
  title: string;
  link: string;
}

async function getCryptoNews(): Promise<NewsItem[]> {
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=crypto`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    console.error("Failed to fetch news");
    return [];
  }

  const data = await res.json();
  return data.results?.slice(0, 5) || [];
}


export default async function NewsPage() {
  const newsItems = await getCryptoNews();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Crypto News</h1>
      <ul className="space-y-2">
        {newsItems.length === 0 ? (
          <li>No news found.</li>
        ) : (
          newsItems.map((item, index) => (
            <li key={index} className="border-b pb-2">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {item.title}
              </a>
              {/* <div className="text-sm text-gray-500">{new Date(item.pubDate).toLocaleString()}</div> */}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
