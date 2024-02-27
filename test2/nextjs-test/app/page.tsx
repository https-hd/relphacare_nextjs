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
      <div className="absolute top-5 right-5">
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">
          Back
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
        </button>
      </div>

      {/* Bottom Right Small Logo */}
      <div className="absolute bottom-0 right-0 p-5">
        <div className="w-24 h-24 border border-gray-700"></div>
      </div>

      {/* Main Body */}
      <div className="grid grid-cols-5 grid-rows-2 gap-10 mt-30">
        {/* First Row */}
        <MenuItem title="Books" imageSrc="../images/MainMenuImages/Books.svg" />
        <MenuItem title="Exercise" imageSrc="../images/MainMenuImages/Exercises.svg" />
        <MenuItem title="Fragrances" imageSrc="../images/MainMenuImages/Fragrances.svg" />
        <MenuItem title="Puzzles" imageSrc="../images/MainMenuImages/Puzzles.svg" />
        <MenuItem title="Mindfulness" imageSrc="../images/MainMenuImages/Mindfullness.svg" />

        {/* Second Row */}
        <MenuItem title="Videos" imageSrc="../images/MainMenuImages/Videos.svg" />
        <MenuItem title="Music" imageSrc="../images/MainMenuImages/Music.svg" />
        <MenuItem title="Calming tones" imageSrc="../images/MainMenuImages/Calming_tones.svg" />
        <MenuItem title="Meditation" imageSrc="../images/MainMenuImages/Meditation.svg" />
        <MenuItem title="Surprise me" imageSrc="../images/MainMenuImages/Surprise.svg" />
      </div>
    </div>
  );
};

interface MenuItemProps {
  title: string;
  imageSrc: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageSrc }) => {
  return (
    <div className="w-48 h-56 flex flex-col items-center bg-white rounded-lg shadow-md">
      <img src={imageSrc} alt={title} className="w-32 h-32 mt-4" />
      <p className="font-poppins text-base font-normal mt-4">{title}</p>
    </div>
  );
};

export default MainMenu;
