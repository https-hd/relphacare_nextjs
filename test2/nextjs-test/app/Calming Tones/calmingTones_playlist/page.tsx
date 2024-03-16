import Head from 'next/head';
import React from 'react';

const SamoranAdventuresCalmingTones = () => {
    return (
        <div className="bg-gradient-to-t to-yellow-100 from-purple-400 flex flex-col text-black min-h-screen justify-center items-center relative">
            <Head>
                <title>Calming Tones</title>
            </Head>

            {/* Heading */}
            <h1 className="[rgba(58, 36, 113, 1)] font-poppins text-[50px] font-semibold text-center mb-40 px-8 absolute top-3 p-5">Calming Tones</h1>

            {/* Top Left Logo */}
            <div className="absolute top-0 right-0 p-5">
                <div className="w-[102px] h-[102px] border border-gray-700" />
            </div>

            {/* Top Right Back Button */}
            <div className="absolute top-10 left-5">
                <button className="px-4 py-2 text-gray-800 rounded-lg">
                    <span className="flex items-center">
                        <svg
                            className="w-10 h-10 inline-block ml-1 -mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0  0  24  24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10  19l-7-7m0  0l7-7m-7  7h"
                            ></path>
                        </svg>
                    </span>
                </button>
            </div>

            {/* Middle Content */}
            <div className="w-[848px] h-[400px] bg-gray-200 rounded-md absolute top-[200px] flex flex-col justify-center items-center">
                <div className="text-center">
                    <p className="text-2xl font-semibold mb-4">Samoran Adventures</p>
                    <p className="text-2xl font-semibold mb-4">Calming Tones</p>
                    <p className="text-xl mb-4">Chapter 4</p>
                    <p className="text-xl mb-4">Chapter 1</p>
                    <p className="text-xl mb-4">Chapter 2</p>
                    <p className="text-xl mb-4">Chapter 3</p>
                </div>
            </div>
        </div>
    );
};

export default SamoranAdventuresCalmingTones;