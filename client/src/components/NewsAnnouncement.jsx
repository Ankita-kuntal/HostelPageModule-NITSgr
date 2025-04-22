import React, { useEffect, useState } from "react";

const NewsAnnouncement = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news from the JSON file
    fetch("/data/news.json")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#1a1a40] text-white text-sm sm:text-base h-6 flex items-center">
      <div className="marquee whitespace-nowrap flex items-center">
        <span className="mx-4 font-bold">News & Announcement:</span>
        {news.map((item, index) => (
          <React.Fragment key={item.id}>
            <span className="mx-4 inline-block">
              {item.message}
            </span>
            {index < news.length - 1 && (
              <span className="w-4 h-4 bg-white rounded-full mx-4 inline-block"></span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NewsAnnouncement;
