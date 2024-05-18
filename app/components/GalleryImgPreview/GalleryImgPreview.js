import React, { useRef, useEffect, useState } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

function GalleryImgPreview(props) {
  const containerRef = useRef(null);

  const [Gallery, setGallery] = useState([
    {
      img: "/assets/lifestyle/Offering Img 1.webp",
      title: "Outdoor Pool",
    },
    {
      img: "/assets/lifestyle/Offering Img 2.webp",
      title: "Elevating your Lifestyle Experience",
    },
    {
      img: "/assets/lifestyle/Offering Img 3.webp",
      title: "Living Space",
    },
    {
      img: "/assets/lifestyle/Offering Img 4.webp",
      title: "Dining Room",
    },
    {
      img: "/assets/lifestyle/Offering Img 5.webp",
      title: "Restocafe",
    },
    {
      img: "/assets/lifestyle/Offering Img 6.webp",
      title: "Kid's Playroom",
    },
    {
      img: "/assets/lifestyle/Offering Img 7.webp",
      title: "An Unparalleled World of Comfort",
    },
  ]);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, []);

  return (
    <div
      className="img-grid grid grid-cols-2 sm:grid-cols-4 sm:gap-4 gap-3 m-0 p-0 w-full "
      ref={containerRef}
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      {Gallery?.map((img, index) => {
        return (
          <div data-fancybox="gallery" href={img.img} key={index}>
            <div className="relative transition-all duration-300 hover:scale-105 cursor-pointer">
              <img
                src={img.img}
                alt="sq-sample"
                className="object-cover md:w-[300px] mx-auto h-auto  aspect-square "
              />
              <div className="absolute bottom-0 py-1 w-full flex justify-center bg-black  text-white ">
                {img.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GalleryImgPreview;
