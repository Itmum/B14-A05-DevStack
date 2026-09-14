import React from "react";
import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full bg-black overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 flex flex-col text-center md:text-left items-center md:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white text-slate-900 tracking-tight leading-tight max-w-xl">
              Build Your Ideal{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent block sm:inline">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="mt-8 flex flex-row gap-4 w-full justify-center md:justify-start">
              <button className="px-6 py-3 font-semibold text-white rounded-xl shadow-md transition-transform active:scale-95 bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90">
                Explore Technologies
              </button>

              <button className="px-6 py-3 font-semibold text-slate-600 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-sm">
                Learn More
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center items-center w-full">
            <img
              src={bannerImg}
              alt="Development Stack Illustration"
              className="w-full max-w-[400px] md:max-w-none h-auto object-contain animate-pulse-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
