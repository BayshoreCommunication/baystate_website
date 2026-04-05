import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }: any) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={250}
        className="w-full h-[220px] object-cover"
      />

      <div className="p-4">
        <p className="text-xs text-gray-400 mb-1">
          {blog.date} • {blog.category}
        </p>

        <h3 className="text-sm font-semibold mb-2">{blog.title}</h3>

        <p className="text-sm text-gray-600 line-clamp-2">{blog.description}</p>

        <Link
          href={`/blogs/${blog.slug}`}
          className="text-orange-500 text-sm mt-3 inline-block"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
