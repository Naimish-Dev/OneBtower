"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
export const Hero = ({ setIsModel }) => {
  const mainSidebar = useRef();
  const openSidebarButton = useRef();

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setIsSidebarActive(false);
      }
    };

    const handleOutsideClick = (e) => {
      if (
        !mainSidebar.current.contains(e.target) &&
        !openSidebarButton.current.contains(e.target)
      ) {
        setIsSidebarActive(false);
      }
    };

    const windoscroll = () => {
      setIsSidebarActive(false);
    };

    window.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", windoscroll);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", windoscroll);
    };
  }, []);

  const CloseSidebarActive = () => {
    setIsSidebarActive(false);
  };

  const handleDownload = () => {
    const pdfUrl = "/assets/Brocher/One Billion Tower Brochure.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "The-Gateway-Sewri-EBrochure.pdf";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      <div
        className={`fixed bg-[rgba(0,0,0,0.3)] z-20  min-h-screen w-full top-0 transition-transform transform ease-in-out duration-300 lg:hidden ${
          isSidebarActive ? `translate-x-0` : "-translate-x-full"
        }`}
        id="sidebar"
      >
        <div
          ref={mainSidebar}
          id="main-sidebar"
          className="bg-gray-300 text-white w-full min-h-screen h-full"
        >
          <div className="h-[calc(100vh_-_25px)]">
            <div className=" flex justify-between text-3xl bg-white p-2 py-4">
              <Link href={"/"} className="text-center">
                <img src="/assets/logo/logo.png" className="h-14" alt="logo" />
              </Link>
              <div className="mt-2">
                <IoCloseSharp
                  onClick={CloseSidebarActive}
                  className="cursor-pointer text-black"
                />
              </div>
            </div>
            <ul className=" text-center h-full w-full flex flex-col justify-center items-center">
              <Link
                className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]"
                href={"../#about"}
              >
                About
              </Link>

              <Link href="../#location">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]">
                  Location
                </li>
              </Link>
              <li
                onClick={() => setIsModel(true)}
                className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]"
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed z-10 top-0 left-0 w-screen text-white bg-white  py-4 px-2 bg-opacity-70">
        <div className="flex justify-between items-center ">
          <Link href={"/"} className="text-center">
            <img src="/assets/logo/logo.png" className="h-10" alt="logo" />
          </Link>
          <div className=" gap-3 font-medium hidden sm:flex mr-4 text-[#2b2b2b]">
            <Link
              className=" hover:font-bold font-semibold transition-all duration-300"
              href={"../#about"}
            >
              About
            </Link>

            <Link
              className=" hover:font-bold font-semibold transition-all duration-300"
              href={"../#location"}
            >
              Location
            </Link>
            <span
              onClick={() => setIsModel(true)}
              className=" hover:font-bold font-semibold transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </span>
          </div>

          <button
            ref={openSidebarButton}
            className="px-4 text-2xl font-bold sm:hidden "
            id="open-sidebar"
            onClick={() => setIsSidebarActive(true)}
          >
            <FaList />
          </button>
        </div>
      </div>

      <div>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          className="ctm_slider"
          pagination={true}
        >
          <SwiperSlide>
            <img
              src="assets/hero/One B Hero Banner Img 2.webp"
              className="w-screen h-screen object-cover"
            />

            <div className="fixed top-0 left-0 w-full h-full z-20  flex justify-center items-center gap-4 bg-black/30 ">
              <div className="text-center text-white font-bold mt-32 slg:mt-36 ">
                <div className="mx-2">
                  <h2 className="text-4xl mx-4">One B Tower</h2>
                  <p className="text-xl mx-4">
                    The 1 Billion Meals Endowment Initiative
                  </p>
                  <div>
                    <div className="flex  flex-wrap justify-center gap-x-3 sm:gap-5">
                      <button
                        onClick={() => {
                          const token = sessionStorage.getItem("Token");
                          if (token) {
                            handleDownload();
                          } else {
                            setIsModel(true);
                          }
                        }}
                        className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out   text-white bg-blue-800 text-sm font-extrabold leading-5 tracking-[0.21px]"
                      >
                        Download Broucher
                      </button>
                      <button
                        onClick={() => setIsModel(true)}
                        className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 bg-[#DBDFD7] text-sm font-extrabold leading-5 tracking-[0.21px]"
                      >
                        Show your Interest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="assets/hero/One B Hero Banner Img 3.webp"
              className="w-screen h-screen object-cover "
            />
            <div className="fixed top-0 left-0 w-full h-full z-20  flex justify-center items-center gap-4 bg-black/30 ">
              <div className="text-center text-white font-bold mt-32 slg:mt-36 ">
                <div className="mx-2">
                  <h2 className="text-4xl mx-4">One B Tower</h2>
                  <p className="text-xl mx-4">
                    The 1 Billion Meals Endowment Initiative{" "}
                  </p>
                  <div>
                    <div className="flex  flex-wrap justify-center gap-x-3 sm:gap-5">
                      <button
                        onClick={() => {
                          const token = sessionStorage.getItem("Token");
                          if (token) {
                            handleDownload();
                          } else {
                            setIsModel(true);
                          }
                        }}
                        className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out   text-white bg-blue-800 text-sm font-extrabold leading-5 tracking-[0.21px]"
                      >
                        Download Broucher
                      </button>
                      <button
                        onClick={() => setIsModel(true)}
                        className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 bg-[#DBDFD7] text-sm font-extrabold leading-5 tracking-[0.21px]"
                      >
                        Show your Interest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="assets/hero/One B Hero Banner Img 4.webp"
              className="w-screen h-screen object-cover "
            />
            <div className="fixed top-0 left-0 w-full h-full z-20  flex justify-center items-center gap-4 bg-black/30 ">
              <div className="text-center text-white font-bold mt-32 slg:mt-36 ">
                <div className="mx-2">
                  <h2 className="text-4xl mx-4">One B Tower</h2>
                  <p className="text-xl mx-4">The heart of luxury</p>
                  <div>
                    <div className="flex  flex-wrap justify-center gap-x-3 sm:gap-5">
                      <button
                        onClick={() => {
                          const token = sessionStorage.getItem("Token");
                          if (token) {
                            handleDownload();
                          } else {
                            setIsModel(true);
                          }
                        }}
                        className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out   text-white bg-blue-800 text-sm font-extrabold leading-5 tracking-[0.21px]"
                      >
                        Download Broucher
                      </button>
                      <button
                        onClick={() => setIsModel(true)}
                        className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 bg-[#DBDFD7] text-sm font-extrabold leading-5 tracking-[0.21px]"
                      >
                        Show your Interest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
