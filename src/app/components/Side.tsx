import Image from "next/image";

export default function SideBar() {
  return (
    <div className="w-full lg:w-[250px] xl:w-[300px]">
      <div>
        <ul className="text-[14px] font-medium pl-4 sm:pl-8 pt-4 flex flex-col gap-2">
          <li>Shoes</li>
          <li>Sports Bra</li>
          <li>Tops & Tshirts</li>
          <li>
            Hoodies <br />
            & Sweatshirts
          </li>
          <li>Jackets</li>
          <li>Trouser & Tights</li>
          <li>Shorts</li>
          <li>Tracksuits</li>
          <li>Jumpsuits & Rompers</li>
          <li>Skirts & Dresses</li>
          <li>Socks</li>
          <li className="mb-5">
            Accessories <br />
            & Equipment
          </li>
        </ul>

        {/* Gender */}
        <div className="border-t border-t-gray-100 w-full ml-4 sm:ml-6 mt-4"></div>
        <div className="flex items-center pl-4 sm:pl-8 gap-[10%] mt-2">
          <p className="text-[14px] font-medium">Gender</p>
          <Image
            src="/up.png"
            alt="up"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </div>
        <div className="flex gap-1 ml-6 sm:ml-8 mt-4">
          <Image
            src="/check.png"
            alt="check"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <p className="text-[12px]">Men</p>
        </div>

        <div className="flex gap-1 ml-6 sm:ml-8 mt-2">
          <Image
            src="/check.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <p className="text-[12px]">Women</p>
        </div>

        {/* Kids */}
        <div className="border-t border-t-gray-100 w-full ml-4 sm:ml-6 mt-4"></div>
        <div className="flex items-center pl-4 sm:pl-8 gap-[10%] mt-2">
          <p className="text-[14px] font-medium">Kids</p>
          <Image
            src="/up.png"
            alt="up"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </div>
        <div className="flex gap-1 ml-6 sm:ml-8 mt-4">
          <Image
            src="/check.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <p className="text-[12px]">Boys</p>
        </div>
        <div className="flex gap-1 ml-6 sm:ml-8 mt-2">
          <Image
            src="/check.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <p className="text-[12px]">Girls</p>
        </div>

        {/* Price */}
        <div className="border-t border-t-gray-100 w-full ml-4 sm:ml-6 mt-4"></div>
        <div className="flex items-center pl-4 sm:pl-8 gap-[10%] mt-2">
          <p className="text-[14px] font-medium">Shop By Price</p>
          <Image
            src="/up.png"
            alt="up"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </div>
        <div className="flex gap-1 ml-6 sm:ml-8 mt-4">
          <Image
            src="/check.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <p className="text-[12px]">Under Rs 2500.00</p>
        </div>
        <div className="flex gap-1 ml-6 sm:ml-8 mt-2">
          <Image
            src="/check.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <p className="text-[12px]">Rs 2501.00 - Rs 10000</p>
        </div>
      </div>
    </div>
  );
}
