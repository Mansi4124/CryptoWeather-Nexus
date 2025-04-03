interface NewsCardProps {
   title: string;
    source: string;
    date: any;
    url: any;
   
  }
  
const NewsCard: React.FC<NewsCardProps> = ({ title, source, date, url }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{source} - {date}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read More</a>
      </div>
    );
  };
  
  export default NewsCard;
  