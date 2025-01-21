'use client';

import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { PlusCircle, MinusCircle } from 'lucide-react';
import Link from 'next/link';

export default function Bag() {
  const { items, removeItem, updateQuantity } = useCart();

  const subtotal = items.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 bg-white p-4 lg:w-2/3">
        <div className="bg-[#f0f0f0] w-auto mx-2 p-3">
          <p className="text-[13px] font-medium">Free Delivery</p>
          <div className="flex gap-2">
            <p className="text-[10px] xl:text-[12px] lg:text-[12px]">
              Applies to orders of ₹ 14 000.00 or more.
            </p>
            <p className="text-[10px] font-medium underline xl:text-[12px] lg:text-[12px]">
              View details
            </p>
          </div>
        </div>
        <h1 className="text-[18px] font-medium ml-2 mt-2">Bag</h1>
        <div>
          {items.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center p-2 border-b border-gray-100"
            >
              <Image
                src={product.image}
                alt={product.productName}
                width={70}
                height={70}
                className="w-[70px] h-[70px]"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-[14px] font-semibold">{product.productName}</h3>
                <p className="text-[12px] text-[#757575]">{product.detail}</p>
                {/* Quantity Controls */}
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(product.id, 'decrease')}
                      className="hover:opacity-80"
                    >
                      <MinusCircle size={15} />
                    </button>
                    <span className="text-[14px] font-medium w-6 text-center">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, 'increase')}
                      className="hover:opacity-80"
                    >
                      <PlusCircle size={15} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Image
                      src="/like.png"
                      alt="like"
                      width={24}
                      height={24}
                      className="w-6 h-6 cursor-pointer hover:opacity-80"
                    />
                    <Image
                      src="/bin.png"
                      alt="delete"
                      width={16}
                      height={16}
                      className="w-4 h-4 cursor-pointer hover:opacity-80"
                      onClick={() => removeItem(product.id)} // Ensure `removeItem` is correctly passed
                    />
                  </div>
                </div>
              </div>
              <p className="text-[12px] mb-[21%] sm:mb-[12%]">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 lg:w-1/3">
        <h1 className="text-[18px] font-medium mt-4 mb-4 text-center lg:text-start lg:ml-10 xl:ml-[20%]">
          Summary
        </h1>
        <div className="flex justify-evenly gap-10 mt-2">
          <p className="text-[14px]">Subtotal</p>
          <p className="text-[14px]">₹ {subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-evenly mr-6 mt-2">
          <p className="text-[14px]">
            Estimated Delivery <br /> & Handling
          </p>
          <p className="text-[14px]">Free</p>
        </div>
        <div className="p-2 border-b border-gray-200 w-auto "></div>
        <div className="flex justify-evenly gap-5 mt-2">
          <p className="text-[14px]">Total</p>
          <p className="text-[14px] font-medium">₹ {subtotal.toFixed(2)}</p>
        </div>
        <div className="bg-black w-[160px] h-[40px] rounded-full flex justify-center items-center p-4 mt-6 ml-[28%] sm:ml-[38%] lg:ml-[28%] xl:ml-[32%]">
          <Link href={`/checkout`}>
            <button className="text-white text-[14px] font-medium">Member Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
