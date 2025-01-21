import React from "react";
import Image from "next/image";

const Essential = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-8 text-left w-full max-w-6xl">
        The Essentials
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Men's Section */}
        <div className="relative">
          <Image
            src="/men.png"
            alt="Men&apos;s Essentials"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Women's Section */}
        <div className="relative">
          <Image
            src="/women.png"
            alt="Women&apos;s Essentials"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Kids' Section */}
        <div className="relative">
          <Image
            src="/kids.png"
            alt="Kids&apos; Essentials"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-12 text-center mx-auto">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Icons</h3>
          <ul className="space-y-1 text-base sm:text-lg">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Shoes</h3>
          <ul className="space-y-1 text-base sm:text-lg">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Clothing</h3>
          <ul className="space-y-1 text-base sm:text-lg">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Kids&apos;</h3>
          <ul className="space-y-1 text-base sm:text-lg">
            <li>Infant & Toddler Shoes</li>
            <li>Kids&apos; Shoes</li>
            <li>Kids&apos; Jordan Shoes</li>
            <li>Kids&apos; Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Essential;
