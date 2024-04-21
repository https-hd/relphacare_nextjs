import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>RelpaCare Login</title>
      </Head>
      <div className="flex min-h-screen bg-[#12143b]">
        {/* Left - Form Section */}
        <div className="w-1/2 flex flex-col justify-center px-20 space-y-10">
          {/* Logo */}
          <div className="self-start">
            <Image src="/images/login_new/relphacare_logo.png" alt="RelpaCare Logo"width={500} height={400} />
          </div>

          {/* Header and Register */}
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-light text-white">Welcome!</h2>
            <a href="#" className="text-white hover:text-[#a050af] text-xl font-light">Register</a>
          </div>

          {/* Form */}
          <form className="mt-4 w-10px">
            <div>
              <label htmlFor="email" className="text-sm text-[#b060bf]">Email</label>
              <input
                id="email"
                type="email"
                className="pt-3 w-full px-4 py-1 rounded-md border border-gray-300 bg-white focus:border-[#b060bf] focus:outline-none focus:ring-1 focus:ring-[#b060bf]"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm text-[#b060bf]">Password</label>
              <input
                id="password"
                type="password"
                className="pt-3 w-full px-4 py-1 rounded-md border border-gray-300 bg-white focus:border-[#b060bf] focus:outline-none focus:ring-1 focus:ring-[#b060bf]"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-[#b060bf]" />
                <span className="text-[#77b255]">Remember me</span>
              </label>
              <button
                type="submit"
                className="px-6 py-1 rounded-md bg-[#b060bf] text-white hover:bg-[#a050af] focus:outline-none focus:ring-2 focus:ring-[#b060bf] focus:ring-opacity-50"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Right - Image Section */}
        <div className="w-1/2 relative">
          {/* Background Image */}
          <Image
            src="/images/login_new/login_image.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
