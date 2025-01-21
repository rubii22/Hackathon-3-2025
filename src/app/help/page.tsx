import React from 'react';
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const Help = () => {
  return (
    <div className="py-10 px-4 lg:px-20">
      {/* Main Section */}
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold text-xl">GET HELP</h1>
        <div className="flex relative w-full max-w-md">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            required
          />
          <FaSearch
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      {/* Help Details */}
      <div className="flex flex-col lg:flex-row justify-center mt-14 gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-[65%] flex flex-col gap-6">
          <h1 className="text-xl font-semibold">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h1>
          <p>
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="pl-8 list-disc">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>
              If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
            </li>
            <li>Apple Pay</li>
          </ul>
          <p>
            Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.
          </p>
          <div className="flex gap-3">
            <Link href="/join-us">
              <button className="rounded-full w-28 h-9 bg-black text-white">
                JOIN US
              </button>
            </Link>
            <Link href="/shop-nike">
              <button className="rounded-full w-32 h-9 bg-black text-white">
                SHOP NIKE
              </button>
            </Link>
          </div>

          {/* FAQs */}
          <div className="flex flex-col gap-4 mt-10">
            <h1 className="font-bold">FAQs</h1>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">
                Does my card need international purchases enabled?
              </p>
              <p>
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
              </p>
              <p>
                Please note, some banks may charge a small transaction fee for international orders.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">
                Can I pay for my order with multiple methods?
              </p>
              <p>
                No, payment for Nike orders can&apos;t be split between multiple payment methods.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">
                What payment method is accepted for SNKRS orders?
              </p>
              <p>
                You can use any accepted credit card to pay for your SNKRS order.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">
                Why don&apos;t I see Apple Pay as an option?
              </p>
              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.
              </p>
            </div>
            <div className="mt-6">
              <h1>Was this answer helpful?</h1>
              <div className="flex gap-3">
                <button>
                  <Image
                    src="/upthumb.png"
                    alt="Up Thumb"
                    className="h-[30px] w-[30px] ml-2"
                    width={30}
                    height={30}
                  />
                </button>
                <button>
                  <Image
                    src="/downthumb.png"
                    alt="Down Thumb"
                    className="h-[30px] w-[30px]"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-10">
              <h1 className="text-gray-400">RELATED</h1>
              <Link href="#" className="underline pl-10">
                WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
              </Link>
              <Link href="#" className="underline pl-10">
                HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[30%] flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-gray-300 pt-6 lg:pt-0 pl-0 lg:pl-6">
          <h1 className="font-bold text-xl text-center">CONTACT US</h1>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="w-44 h-auto flex flex-col justify-center items-center gap-2 text-center">
              <Image src="/phone.png" alt="Phone Icon" width={64} height={64} />
              <p>000 800 919 0566</p>
              <p>Products & Orders: 24/7</p>
              <p>Company Info: Mon-Fri</p>
            </div>
            <div className="w-44 h-auto flex flex-col justify-center items-center gap-2 text-center">
              <Image src="/msg.png" alt="Message Icon" width={64} height={64} />
              <p>24 hours a day</p>
              <p>7 days a week</p>
            </div>
            <div className="w-44 h-auto flex flex-col justify-center items-center gap-2 text-center">
              <Image src="/mail.png" alt="Mail Icon" width={64} height={64} />
              <p>We&apos;ll reply within</p>
              <p>five business days</p>
            </div>
            <div className="w-44 h-auto flex flex-col justify-center items-center gap-2 text-center">
              <Image src="/location.png" alt="Location Icon" width={64} height={64} />
              <p>STORE LOCATOR</p>
              <p>Find Nike stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
