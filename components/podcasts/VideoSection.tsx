import VideoCard from "./VideoCard";

type Video = {
  title: string;
  date: string;
  category: string;
  videoId: string;
};

const videos: Video[] = [
  {
    title: "How to Build a Website Fast",
    date: "May 31, 2025",
    category: "Website",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Modern UI Design Tips",
    date: "June 2, 2025",
    category: "Design",
    videoId: "ysz5S6PUM-U",
  },
  {
    title: "Best Marketing Strategies 2025",
    date: "June 5, 2025",
    category: "Marketing",
    videoId: "ScMzIvxBSi4",
  },
  {
    title: "React JS Crash Course",
    date: "June 8, 2025",
    category: "Development",
    videoId: "Ke90Tje7VS0",
  },
  {
    title: "Next.js Full Tutorial",
    date: "June 10, 2025",
    category: "Development",
    videoId: "1WmNXEVia8I",
  },
  {
    title: "SEO Basics for Beginners",
    date: "June 12, 2025",
    category: "SEO",
    videoId: "xsVTqzratPs",
  },
  {
    title: "Freelancing Guide 2025",
    date: "June 15, 2025",
    category: "Business",
    videoId: "jNQXAC9IVRw",
  },
  {
    title: "How to Earn Online",
    date: "June 18, 2025",
    category: "Income",
    videoId: "aqz-KE-bpKQ",
  },
  {
    title: "Top Web Trends 2025",
    date: "June 20, 2025",
    category: "Trends",
    videoId: "ysz5S6PUM-U",
  },
  {
    title: "Landing Page Design Tips",
    date: "June 22, 2025",
    category: "Design",
    videoId: "ScMzIvxBSi4",
  },
  {
    title: "JavaScript Advanced Guide",
    date: "June 25, 2025",
    category: "Development",
    videoId: "PkZNo7MFNFg",
  },
  {
    title: "Startup Growth Hacks",
    date: "June 28, 2025",
    category: "Business",
    videoId: "dQw4w9WgXcQ",
  },
];

export default function VideoSection() {
  return (
    <section className="bg-[#F5F5F5] py-6 md:py-16">
      {/* ✅ MAX WIDTH */}
      <div className="max-w-[1320px] mx-auto px-4">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((item, i) => (
            <VideoCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
