import Image from "next/image";

export default function FeaturedSection() {
  return (
    <section className="bg-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-left">Featured</h2>

        {/* Image */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/Featured.png" 
            alt="Featured Image"
            width={1200} 
            height={600} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-6 text-center">
          <h3 className="text-4xl sm:text-5xl font-semibold mb-4">
            STEP INTO WHAT FEELS GOOD
          </h3>
          <p className="text-black mb-6 text-lg sm:text-xl">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>

          {/* Button */}
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg">
            Find Your Shoe
          </button>
        </div>
      </div>
    </section>
  );
}
