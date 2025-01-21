import Link from "next/link";
import Image from "next/image";

const Join = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-8">
      {/* Nike Logo */}
      <div className="mb-8">
        <Image
          src="/logo.png"
          alt="Nike Logo"
          width={64} 
          height={64}
        />
      </div>

      {/* Signup Form */}
      <div className="w-full max-w-md bg-white">
        <h2 className="text-center text-xl font-bold mb-4">BECOME A NIKE MEMBER</h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>
 
        <form className="space-y-4">
          {/* Email Address */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />

          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />

          {/* Date of Birth */}
          <input
            type="Date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <p className="text-sm text-gray-500">Get a Nike Member Reward every year on your Birthday.</p>

          {/* Country Dropdown */}
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black">
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Australia</option>
            <option>Other</option>
          </select>

          {/* Gender Options */}
          <div className="flex space-x-4">
            <button
              type="button"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              Male
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              Female
            </button>
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              id="subscribe"
              className="w-4 h-4 border-gray-300 focus:ring-black"
            />
            <label htmlFor="subscribe">
              Sign up for emails to get updates from Nike on products, offers,
              and your Member benefits.
            </label>
          </div>

          {/* Terms and Conditions */}
          <p className="text-xs text-gray-600 text-center">
            By creating an account, you agree to Nike&apos;s Privacy Policy and Terms of Use.
          </p>

          {/* Join Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-bold hover:bg-gray-800"
          >
            JOIN US
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-sm text-black mt-6">
          Already a Member?{" "}
          <Link href="/signin" className="underline hover:text-black">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Join;
