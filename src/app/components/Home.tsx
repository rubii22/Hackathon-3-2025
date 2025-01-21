import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Top Text Overlay */}
      <div className="w-full text-center bg-gray-100 py-2">
        <p className="text-sm font-semibold">Hello Nike App</p>
        <p className="text-xs text-gray-600">
          Download the app to access everything Nike.{" "}
          <span className="text-black hover:underline cursor-pointer">
            Get Your Great
          </span>
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center bg-white py-0">
        <div className="relative w-full max-w-7xl">
          <Image
            src="/Homeshoes.png" 
            alt="Nike Air Max Pulse"
            layout="responsive" 
            width={1400}
            height={800}
            objectFit="contain" 
            priority
          />
        </div>
      </div>

      {/* Content Below Image */}
      <div className="text-center px-4 py-12">
        <h2 className="text-lg font-medium uppercase">First Look</h2>
        <h1 className="text-4xl md:text-6xl font-semibold mt-2">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-black mt-4 max-w-xl mx-auto">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the
          max.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-5">
          <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
            Notify Me
          </button>
          <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
            Shop Air Max
          </button>
        </div>
      </div>
    </main>
  );
}
