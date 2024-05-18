"use client";
import React, { Fragment, useState } from "react";
import FromSubmit from "./CustomModal/FromSubmit";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Location = () => {
  const [isloading, setIsloading] = useState(false);
  const [isModel, setIsModel] = useState(false);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && phone) {
      setIsloading(true);
      try {
        const response = await fetch("/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
          }),
        });
        const data = await response.json();
        if (data.status === 200) {
          sessionStorage.setItem("Token", "true");
          router.push("/thankyou");

          setName("");
          setEmail("");
          setPhone("");
        }
      } catch (error) {
      } finally {
        setIsloading(false);
      }
    } else {
      input.current.focus();
    }
  };
  const CloseSucessModelHandler = () => {
    setIsModel(false);
  };

  return (
    <Fragment>
      <div className=" py-14 px-2 " id="location">
        <h2 className="text-3xl text-black font-semibold text-center mb-6">
          Location
        </h2>
        <div className="flex flex-col w-full md:flex-row py-14">
          <div className="w-full h-[560px] mx-auto">
            <img
              src={"/assets/location/location.webp"}
              className="object-cover h-full mx-auto shadow-xl "
            />
          </div>
          <div className="w-full px-1 py-10 ">
            <h1 className="text-black text-center text-3xl font-bold leading-[34px] tracking-[-0.15px] mb-3">
              EXPRESS YOUR INTEREST
            </h1>
            <p className="mb-5 text-sm w-[80%]  mx-auto text-center">
              Register to download prices and payment plans.
            </p>

            <form className="relative flex flex-col items-center justify-center gap-2 ">
              {isModel && (
                <FromSubmit
                  CloseSucessModelHandler={CloseSucessModelHandler}
                ></FromSubmit>
              )}
              <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%]">
                <label
                  htmlFor="name"
                  className="text-black text-sm leading-[22px] tracking-[0.14px]"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border-[#E2E8F0] px-4 py-3  border-[1.5px] border-solid bg-white w-full outline-none placeholder:text-[#94A3B8] text-black text-sm leading-[22px] tracking-[0.14px] mt-[6px]"
                  placeholder="Enter Your Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  required={true}
                />
              </div>
              <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%]">
                <label
                  htmlFor="email"
                  className="text-black text-sm leading-[22px] tracking-[0.14px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-[#E2E8F0] px-4 py-3  border-[1.5px] border-solid bg-white w-full outline-none placeholder:text-[#94A3B8] text-black text-sm leading-[22px] tracking-[0.14px] mt-[6px]"
                  placeholder="Enter Your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  required={true}
                />
              </div>
              <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%]">
                <label
                  htmlFor="email"
                  className="text-black text-sm leading-[22px] tracking-[0.14px]"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="border-[#E2E8F0] px-4 py-3  border-[1.5px] border-solid bg-white w-full outline-none placeholder:text-[#94A3B8] text-black text-sm leading-[22px] tracking-[0.14px] mt-[6px]"
                  placeholder="Enter Your Mobile Number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                  required={true}
                />
              </div>
              <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%] mt-2">
                <button
                  disabled={isloading}
                  onClick={handleSubmit}
                  className=" px-3.5 py-3 bg-blue-800 text-white text-sm font-medium leading-5 tracking-[0.21px]"
                >
                  {isloading ? (
                    <div class="inline-block animate-spin rounded-full h-4 w-4 border-x-2 border-b-2 border-white"></div>
                  ) : (
                    "Submit"
                  )}
                </button>
                <Link
                  className="mt-2 font-semibold text-center text-black"
                  href="/Privacy-Policy"
                >
                  Privacy-Policy!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Location;
