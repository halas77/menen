import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-auto w-full text-white">
      <div className="h-12 p-5 pl-10 sm:pl-16 md:pl-28 lg:pl-36 xl:pl-40">
        <h1 className="text-slate-950 font-extrabold text-3xl font-sans">
          MENEN
        </h1>
      </div>
      <div className="bg-sky-200 h-[580px] mt-8 rounded-md mx-5">
        <div className="flex flex-col-2">
          <div className="flex flex-col md:ml-20 px-24 pt-28 lg:w-1/2">
            <div className="text-slate-600 font-semibold mb-2">
              <p>UP TO 15% DISCOUNT</p>
            </div>
            <div className="text-slate-800 font-extrabold text-6xl font-sans">
              <h1>Explore the Finest Cultural and Fashion Trends.</h1>
            </div>
            <div className="my-8 lg:my-16">
              <button className="px-12 py-4 border-2 border-slate-900 rounded-full font-semibold text-slate-900">
                Shop Now
              </button>
            </div>
          </div>
          <div className="hidden lg:flex w-1/2">
            <Image
              className="flex mx-auto"
              src="/hero4.png"
              alt="Image"
              width={463}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
