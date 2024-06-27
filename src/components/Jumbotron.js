// components/Jumbotron.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/banner.png',
  '/images/banner.png',
  '/images/banner.png',
];

export default function Jumbotron() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="jumbotron-slide relative w-full h-96 overflow-hidden">
      {images.map((src, index) => (
        <div key={index} className={`slide ${index === activeIndex ? 'active' : ''} absolute w-full h-full`}>
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      ))}
    </div>
  );
}
