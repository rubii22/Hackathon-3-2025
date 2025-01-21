import React from "react";
import Image from "next/image";

const GearUp = () => {
  return (
    <section className="px-4 py-6 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 w-full max-w-6xl text-left">
        Gear Up
      </h2>

      {/* Shop Men's and Women's Section */}
      <div className="flex flex-wrap justify-between items-center w-full max-w-6xl mb-4">
        {/* Shop Men's */}
        <div className="flex items-center space-x-2">
          <h3 className="text-lg md:text-xl font-medium">Shop Men&#39;s</h3>
          <button aria-label="Previous product">
            <Image src="/leftarrow.png" alt="Left Arrow" width={30} height={30} />
          </button>
          <button aria-label="Next product">
            <Image src="/rightarrow.png" alt="Right Arrow" width={30} height={30} />
          </button>
        </div>

        {/* Shop Women's */}
        <div className="flex items-center space-x-2">
          <h3 className="text-lg md:text-xl font-medium">Shop Women&#39;s</h3>
          <button aria-label="Previous product">
            <Image src="/leftarrow.png" alt="Left Arrow" width={30} height={30} />
          </button>
          <button aria-label="Next product">
            <Image src="/rightarrow.png" alt="Right Arrow" width={30} height={30} />
          </button>
        </div>
      </div>

      {/* Combined Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {/* Men's Product 1 */}
        <div className="text-left">
          <Image
            src="/Gearup1.png"
            alt="Nike Dri-FIT ADV Techknit Ultra - Men's Short-Sleeve Running Top"
            width={250}
            height={350}
            className="w-full h-[200px] sm:h-[300px] object-cover"
          />
          <h3 className="font-medium mt-4 text-lg md:text-xl">Nike Dri-FIT ADV Techknit Ultra</h3>
          <p className="text-sm md:text-md text-gray-500">Men&#39;s Short-Sleeve Running Top</p>
          <p className="font-bold text-lg mt-2">₹ 3,895</p>
        </div>

        {/* Men's Product 2 */}
        <div className="text-left">
          <Image
            src="/Gearup2.png"
            alt="Nike Dri-FIT Challenger - Men's 18cm 2-in-1 Shorts"
            width={250}
            height={350}
            className="w-full h-[200px] sm:h-[300px] object-cover"
          />
          <h3 className="font-medium mt-4 text-lg md:text-xl">Nike Dri-FIT Challenger</h3>
          <p className="text-sm md:text-md text-gray-500">Men&#39;s 18cm (approx.) 2-in-1 Shorts</p>
          <p className="font-bold text-lg mt-2">₹ 2,495</p>
        </div>

        {/* Women's Product 1 */}
        <div className="text-left">
          <Image
            src="/Gearup3.png"
            alt="Nike Dri-FIT ADV Run Division - Women's Long-Sleeve Running Top"
            width={250}
            height={350}
            className="w-full h-[200px] sm:h-[300px] object-cover"
          />
          <h3 className="font-medium mt-4 text-lg md:text-xl">Nike Dri-FIT ADV Run Division</h3>
          <p className="text-sm md:text-md text-gray-500">Women&#39;s Long-Sleeve Running Top</p>
          <p className="font-bold text-lg mt-2">₹ 5,295</p>
        </div>

        {/* Women's Product 2 */}
        <div className="text-left">
          <Image
            src="/Gearup4.png"
            alt="Nike Fast - Women's Mid-Rise Running Leggings"
            width={250}
            height={350}
            className="w-full h-[200px] sm:h-[300px] object-cover"
          />
          <h3 className="font-medium mt-4 text-lg md:text-xl">Nike Fast</h3>
          <p className="text-sm md:text-md text-gray-500">Women&#39;s Mid-Rise Running Leggings</p>
          <p className="font-bold text-lg mt-2">₹ 3,795</p>
        </div>
      </div>
    </section>
  );
};

export default GearUp;
