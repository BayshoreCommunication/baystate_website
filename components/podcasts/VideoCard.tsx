"use client";

import Image from "next/image";
import { useState } from "react";
import { CiClock2 } from "react-icons/ci";

type Video = {
  title: string;
  date: string;
  category: string;
  videoId: string;
};

export default function VideoCard({ item }: { item: Video }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer group"
      >
        {/* IMAGE */}
        <div className="relative">
          <Image
            src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
            alt={item.title}
            width={400}
            height={250}
            className="w-full h-[220px] object-cover"
          />

          {/* ▶ PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-6 h-6 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <p className="text-xs text-gray-400 mb-1">
            <div className="flex items-center">
              <span className="flex items-center text-[#AC5D50]">
                <CiClock2 className="w-3 h-3 mr-1" />
                {item.date}
              </span>
              • {item.category}
            </div>
          </p>
          <h3 className="text-sm font-medium text-gray-800">{item.title}</h3>
        </div>
      </div>

      {/* 🎬 MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[90%] max-w-3xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-white text-2xl z-10"
            >
              ✕
            </button>

            {/* VIDEO */}
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
