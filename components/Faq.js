'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import './Card.css';

export default function Faq() {
  const cover = ["land.png", "news.png"];
  const [currentImage, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % cover.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <h1 className="px-12 text-2xl font-semibold relative mb-12">Announcements and Blogs</h1>
      </div>

      <div className="ml-10 mr-10 sm:ml-8 lg:ml-3 sm:mr-4 lg:mr-3 bg-dro_yellow rounded shadow-lg">
        <div className="flex lg:flex-row sm:flex-row justify-end">
          <div className="flex flex-col justify-center px-80">
            <div className="font-bold sm:mt-3 text-xl sm:text-lg">DROGA RESEARCH GRANT</div>
            <div className="text-md sm:text-sm font-medium">12, AUG, 2023</div>
            <div className="sm:mb-3">
              <button className="rectangle-button float bg-dro_black inline-block px-4 py-2 mt-10 right-5 sm:mt-6 sm:py-2 text-dro_white rounded">
                Visit Us
              </button>
            </div>
          </div>

          <div className="w-full h-72 relative">
            <div className="relative w-full h-full perspective-3d">
              <div className="relative w-full h-full transform transition-all duration-500 hover:scale-105 hover:opacity-50">
                {cover.map((image, index) => (
                  <div
                    key={index}
                    className={`image-container ${index === currentImage ? 'active' : ''}`}
                  >
                    <Image
                      src={`/image/${image}`}
                      alt="Image"
                      layout="fill"
                      objectFit="cover"
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}