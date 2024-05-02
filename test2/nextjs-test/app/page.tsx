import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>RelpaCare Dashboard</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#12143b]">
        {/* Container for all blocks */}
        <div className="flex flex-col items-center space-y-20 rounded-lg">
          {/* Row 1 - 3 items */}
          <div className="flex space-x-12">
            {/* EMP Block */}
            <div className="flex flex-col items-center bg-gradient-to-r from-[#b3f5d5] to-[#b1daf6] rounded-lg p-6">
              <Image src="/images/EMP.svg" alt="EMP Icon" width={150} height={100} />
              <p className="text-white mt-2">EMP</p>
            </div>

            {/* PIN Block */}
            <div className="flex flex-col items-center bg-gradient-to-r from-[#ffd2e0] to-[#f8d4ff] rounded-lg p-6">
              <Image src="/images/Pin.svg" alt="PIN Icon" width={150} height={100} />
              <p className="text-white mt-2">PIN</p>
            </div>

            {/* EPP Block */}
            <div className="flex flex-col items-center bg-gradient-to-r from-[#ffb58c] to-[#dddfd4] rounded-lg p-6">
              <Image src="/images/EPP.svg" alt="EPP Icon" width={150} height={100} />
              <p className="text-white mt-2">EPP</p>
            </div>
          </div>

          {/* Row 2 - 2 items */}
          <div className="flex space-x-12">
            {/* RPM Block */}
            <div className="flex flex-col items-center bg-gradient-to-r from-[#ddb7ff] to-[#d9b2ff] rounded-lg p-6">
              <Image src="/images/RPM.svg" alt="RPM Icon" width={150} height={100} />
              <p className="text-white mt-2">RPM</p>
            </div>

            {/* RTLS Block */}
            <div className="flex flex-col items-center bg-gradient-to-r from-[#ffe089] to-[#f1d785] rounded-lg p-6">
              <Image src="/images/RTLS.svg" alt="RTLS Icon" width={150} height={100} />
              <p className="text-white mt-2">RTLS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
