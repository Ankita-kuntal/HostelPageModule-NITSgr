const NewsAnnouncement = () => {
  return (
    <div className="relative overflow-hidden bg-[#1a1a40] text-white text-sm sm:text-base h-6 flex items-center">
      <div className="marquee whitespace-nowrap">
        <span className="mx-4 font-bold">News & Announcement:</span>
        <span className="mx-4 inline-block">
          There is no accommodation available for PG students and Ph.D. Scholars.
        </span>
      </div>
    </div>
  );
};

export default NewsAnnouncement;
