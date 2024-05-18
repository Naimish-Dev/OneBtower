import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const FromSubmit = ({ CloseSucessModelHandler, isModelsucess }) => {
  const model2 = useRef();

  useEffect(() => {
    const checkModelHandler = (e) => {
      if (!model2.current.contains(e.target)) {
        CloseSucessModelHandler();
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        CloseSucessModelHandler();
      }
    };

    const handleClickOutside = (e) => {
      checkModelHandler(e);
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [CloseSucessModelHandler]);

  return (
    <div
      ref={model2}
      className={` fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[99] px-8 ${
        isModelsucess
          ? "model-blur2 w-[350px] md:w-full lg:w-[350px]"
          : "model-blur w-[350px] sm:w-fit "
      }  rounded-md `}
    >
      <div className="mt-2 ml-2 ">
        <IoClose
          onClick={CloseSucessModelHandler}
          className="ml-auto  hover:scale-125  duration-300 text-2xl text-right text-white transition-all  cursor-pointer "
        />
      </div>
      <div className="py-4 pb-8">
        <h1 className=" text-white text-center text-3xl font-bold leading-[34px] tracking-[-0.15px] mb-3">
          Thank you for your interest.
        </h1>
        <p className="mb-5 text-lg font-medium text-center text-white ">
          Our sales executive will contact you shortly to provide all the
          necessary details.
        </p>

        <form className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col mt-3">
            <button
              type="button"
              onClick={CloseSucessModelHandler}
              className="uppercase px-6  py-3 bg-blue-800 hover:scale-105 transition-all duration-300 text-white text-sm font-medium leading-5 tracking-[0.21px]"
            >
              Go Back
            </button>
          </div>
          <div className="text-sm font-semibold text-center text-white sm:text-base">
            Call us if you have any questions:
            <Link
              className="mt-2 font-semibold text-center text-sm sm:text-base "
              href={`tel:+971 50 782 3283`}
            >
              &nbsp; +971 50 782 3283
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FromSubmit;
