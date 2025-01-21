import React from "react";
import Image from "next/image";

const DontMiss = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 py-12 sm:py-16 bg-white">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 w-full max-w-7xl text-left">
        Don&apos;t Miss
      </h2>

      {/* Image Section */}
      <div className="w-full max-w-7xl">
        <Image
          src="/Dontmiss.png"
          alt="Don't Miss"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="text-center mt-12 sm:mt-16 max-w-5xl px-4">
        <h3 className="text-2xl sm:text-4xl font-semibold">
          FLIGHT ESSENTIALS
        </h3>
        <p className="text-black mt-4 sm:mt-6 text-base sm:text-lg">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
        <button className="mt-8 px-4 sm:px-6 py-2 bg-black text-white rounded-full text-sm sm:text-lg hover:bg-gray-800 transition-colors duration-300">
          Shop
        </button>
      </div>
    </section>
  );
};

export default DontMiss;
