import Head from 'next/head';

const MainMenu = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Main Menu</title>
      </Head>
      {/* Top Left Logo */}
      <div className="absolute top-0 left-0 p-2">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-48 h-48"
        />
      </div>

      {/* Top Right Back Button */}
      <div className="absolute top-25 right-10">
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">
          Back
          <svg
            className="w-4 h-4 inline-block ml-1 -mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </button>
      </div>

      {/* Bottom Right Small Logo */}
      <div className="absolute bottom-0 right-0 p-2">
        <div className="w-24 h-24 border border-gray-700"></div>
      </div>

      {/* Main Body */}
      <div className="grid grid-cols-5 grid-rows-2 gap-10 mt-32">
        {/* First Row */}
        <MenuItem title="Books exercise" imageSrc="/book.png" />
        <MenuItem title="Fragrances" imageSrc="/fragrance.png" />
        <MenuItem title="Puzzles" imageSrc="/puzzle.png" />
        <MenuItem title="Mindfulness" imageSrc="/mindfulness.png" />
        <MenuItem title="Videos" imageSrc="/video.png" />

        {/* Second Row */}
        <MenuItem title="Music" imageSrc="/music.png" />
        <MenuItem title="Calming tones" imageSrc="/calm.png" />
        <MenuItem title="Meditation" imageSrc="/meditation.png" />
        <MenuItem title="Surprise me" imageSrc="/surprise.png" />
        <div></div> {/* Empty placeholder for 10th item */}
      </div>
    </div>
  );
};

const MenuItem = ({ title, imageSrc }) => {
  return (
    <div className="w-48 h-56 flex flex-col items-center bg-white rounded-lg shadow-md">
      <img src={imageSrc} alt={title} className="w-32 h-32 mt-4" />
      <p className="font-poppins text-base font-normal mt-4">{title}</p>
    </div>
  );
};

export default MainMenu;
