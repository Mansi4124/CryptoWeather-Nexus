interface NewsCardProps {
   title: string;
    source: string;
    date: any;
    url: any;
   
  }
  
const NewsCard: React.FC<NewsCardProps> = ({ title, source, date, url }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
         <h1 className="text-white-400 text-xl font-bold flex items-center gap-2 justify-center mt-2 h-20">
        📰 Stay Informed! Latest News Updates 📢🌍
      </h1>
      </div>
     
    );
  };
  
  export default NewsCard;
  