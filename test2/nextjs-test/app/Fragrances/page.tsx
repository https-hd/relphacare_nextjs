import Head from 'next/head';
import React from 'react';

const FragrancesPage = () => {
    return (
        <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
            <Head>
                <title>Fragrances</title>
            </Head>
            {/* Top Left Logo */}
            <div className="absolute top-0 left-0 p-2">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-[102px] h-[102px] border border-gray-700"
                />
            </div>

            {/* Top Right Back Button */}
            <div className="absolute top-5 right-5">
                <button className="px-4 py-2 text-gray-800 rounded-lg">
                    <span className="flex items-center">
                        <svg
                            className="w-4 h-4 inline-block ml-1 -mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0  0  24  24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10  19l-7-7m0  0l7-7m-7  7h18"
                            ></path>
                        </svg>
                        <span className="ml-2">Back</span>
                    </span>
                </button>
            </div>

            {/* Bottom Right Small Logo */}
            <div className="absolute bottom-0 right-0 p-5">
                <div className="w-[102px] h-[102px] border border-gray-700"></div>
            </div>

            {/* Main Body */}
            <div className="grid grid-cols-4 grid-rows-2 gap-10 mt-30">
                {/* Fragrance Items */}
                <FragranceItem title="Lavender" imageSrc="../images/MainMenuImages/Books.svg" />
                <FragranceItem title="Rosemary" imageSrc="../images/MainMenuImages/Books.svg" />
                <FragranceItem title="Rose" imageSrc="../images/MainMenuImages/Books.svg" />
                <FragranceItem title="Chamomile" imageSrc="../images/MainMenuImages/Books.svg" />
                <FragranceItem title="Geranium" imageSrc="../images/MainMenuImages/Books.svg" />
                <FragranceItem title="Chamomile" imageSrc="../images/MainMenuImages/Books.svg" />
                <FragranceItem title="Lavender" imageSrc="../images/MainMenuImages/Books.svg" />
                <FragranceItem title="Rose" imageSrc="../images/MainMenuImages/Books.svg" />
            </div>
        </div>
    );
};

interface FragranceItemProps {
    title: string;
    imageSrc: string;
}

const FragranceItem: React.FC<FragranceItemProps> = ({ title, imageSrc }) => {
    return (
        <div className="w-52 h-52 flex flex-col items-center bg-white rounded-lg shadow-md">
            <img src={imageSrc} alt={title} className="w-32 h-32 mt-4" />
            <p className="font-poppins text-base font-normal mt-4">{title}</p>
        </div>
    );
};


export default FragrancesPage;
