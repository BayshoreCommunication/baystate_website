import { blogs } from "data/blogs";
import BlogCard from "./BlogCard";
import BlogHero from "./BlogHero";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <BlogCard key={i} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
