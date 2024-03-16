import Head from 'next/head';
import React from 'react';
import Link from 'next/link'; // Import Link component

const PodcastsPage = () => {
    return (
        <div className="bg-gradient-to-t to-yellow-100 from-purple-400 flex flex-col text-black min-h-screen justify-center items-center relative">
            <Head>
                <title>Podcasts</title>
            </Head>

            {/* Heading */}
            <h1 className="[rgba(58, 36, 113, 1)] font-poppins text-[50px] font-semibold text-center mb-40 px-8 absolute top-3 p-5">Podcasts</h1>


            {/* Top Left Logo */}
            <div className="absolute top-0 right-0 p-5">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-[102px] h-[102px] border border-gray-700"
                />
            </div>

            {/* Top Right Back Button */}
            <div className="absolute top-10 left-5">
                <Link href="/MainMenu">
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
                </Link>
            </div>

            {/* Main Body */}
            <div className="grid grid-cols-3 gap-10 mt-30">
                {/* Calming Video Items */}
                <PodcastsItem title="Coming Soon..." imageSrc="../images/MainMenuImages/Calming_tones.svg" />
                <PodcastsItem title="Samoran Adventures" imageSrc="../images/MainMenuImages/Calming_tones.svg" />
                <PodcastsItem title="Coming Soon..." imageSrc="../images/MainMenuImages/Calming_tones.svg" />
            </div>
        </div>
    );
};

interface PodcastsItemProps {
    title: string;
    imageSrc: string;
}

const PodcastsItem: React.FC<PodcastsItemProps> = ({ title, imageSrc }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-220 h-79 bg-white rounded-lg shadow-md flex justify-center items-center p-5">
                <img src={imageSrc} alt={title} className="w-32 h-32" />
            </div>
            <p className="font-poppins text-30 font-semibold leading-42 text-center mt-4 text-black">{title}</p>
        </div>
    );
};

export default PodcastsPage;




