import React from "react";
import GalleryImgPreview from "../GalleryImgPreview/GalleryImgPreview";

const Gallery = () => {
  return (
    <div
      className="flex justify-center items-center py-10 md:py-16 bg-gray-100"
      id="photos"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-4 font-semibold">
          A lifestyle destination for luxurious experiences
        </h2>
        <p className="mb-4 w-full sm:w-[50%] lg:w-[40%] text-base">
          The amenities at ONE B give residents the opportunity to relax, play,
          train, and commit to a wellness-first lifestyle. From state-of-the-art
          training equipment, gym areas and yoga spaces, a podium-level swimming
          pool, enticing retail spaces to the enchanting and vibrant kids’
          playroom, ONE B is a haven for balanced living.
        </p>
        <div className="flex gap-4 flex-wrap justify-between items-center">
          <GalleryImgPreview />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
