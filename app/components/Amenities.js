import React from "react";
const Amenities = () => {
  return (
    <div className=" py-14 px-2 " id="amenities">
      <h2 className="text-3xl text-black font-semibold text-center">
        Amenities steeped in luxury
      </h2>

      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 gap-3 m-0 p-0 w-full ">
          <div className="shadow-lg">
            <div className="flex gap-4 p-4">
              <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                <img src="assets/amenities/spa.webp" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Luxurious spa & vitality pools
                </h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg">
            <div className="flex gap-4 p-4">
              <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                <img src="assets/amenities/parking.webp" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Parking spaces</h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg">
            <div className="flex gap-4 p-4">
              <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                <img src="assets/amenities/dining.webp" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Exceptional dining destinations
                </h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg">
            <div className="flex gap-4 p-4">
              <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                <img src="assets/amenities/wellness.webp" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Premium fitness & wellness centres
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-[url('/assets/logo/One3.webp')]  bg-auto	py-16 text-white">
          <div className="w-full md:w-[60%] lg:w-[50%] p-2">
            <h3 className="text-4xl mb-4">
              Elevating your Lifestyle <br /> Experience
            </h3>
            <p className="mb-4">
              The amenities at ONE B give residents the opportunity to relax,
              play, train, and commit to a wellness-first lifestyle. From
              state-of-the-art training equipment, gym areas and yoga spaces, a
              podium-level swimming pool, enticing retail spaces to the
              enchanting and vibrant kids’ playroom, ONE B is a haven for
              balanced living.
            </p>
            <p>
              The exceptional design and craftsmanship are evident in even the
              smallest detail of the tower. Welcoming you to a universe of
              grandeur is the striking podium with its elevated ceiling and
              towering column structures. Leaving you in awe the moment you step
              in, the podium stands as a testament to the opulence you
              experience inside the tower.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
