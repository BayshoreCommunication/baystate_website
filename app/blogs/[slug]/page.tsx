import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogDetailsHero from "../BlogDetailsHero";
import { blogs } from "data/blogs";

export default function BlogDetails({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <>
      <BlogDetailsHero />

      <section className="py-6 md:py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 grid md:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl">
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-[350px] object-cover rounded-lg mb-6"
            />

            <p className="text-xs text-gray-400 mb-2">{blog.date}</p>

            <h1 className="text-2xl font-semibold mb-4">{blog.title}</h1>

            <p className="text-gray-600 whitespace-pre-line">{blog.content}</p>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-white p-5 rounded-xl">
            <h3 className="font-semibold mb-4">Recent Blogs</h3>

            {/* ✅ ONLY LAST 5 BLOGS */}
            {blogs.slice(-5).map((item, i) => {
              const isActive = item.slug === params.slug;

              return (
                <Link key={i} href={`/blogs/${item.slug}`}>
                  <div
                    className={`flex gap-3 mb-4 p-2 rounded-lg transition cursor-pointer
                    ${
                      isActive
                        ? "bg-orange-50 border border-orange-200"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={60}
                      className="rounded-md object-cover"
                    />

                    <div>
                      <p className="text-xs text-gray-400">{item.date}</p>
                      <p className="text-sm line-clamp-2">{item.title}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
