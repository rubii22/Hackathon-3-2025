import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-white px-4 sm:px-6 md:px-8">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-10">
        {/* Nike Logo */}
        <Image
          src="/logo.png"
          alt="Nike Logo"
          width={64}
          height={64}
          className="mb-4"
        />

        {/* Title */}
        <h1 className="text-xl font-bold text-center">
          YOUR ACCOUNT <br /> FOR EVERYTHING NIKE
        </h1>
      </div>

      {/* Sign-In Form */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm">
          <form className="space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            />

            {/* Checkbox and Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="w-4 h-4 border-gray-300 focus:ring-black"
                />
                <label htmlFor="remember-me" className="text-gray-600">
                  Keep me signed in
                </label>
              </div>
              <p className="text-gray-600 hover:underline">
                Forgotten your password?
              </p>
            </div>

            {/* Terms and Conditions */}
            <p className="text-xs text-gray-600 text-center">
              By logging in, you agree to Nike&apos;s Privacy Policy and Terms of Use.
            </p>

            {/* Sign-In Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md font-bold hover:bg-gray-800"
            >
              SIGN IN
            </button>
          </form>

          {/* Join Us Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Not a Member?{" "}
            <Link href="/join" className="underline hover:text-black">
              Join Us.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
