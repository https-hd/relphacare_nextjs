import Image from "next/image";

export default function Home() {
    return (
        <main className="h-screen flex">
            <div className="flex-1 flex justify-center items-center">
                {/* Left side */}
                <div className="h-80 w-80 border border-gray-500 flex justify-center items-center">
                    {/* Empty container */}
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-end p-40">
                {/* Right side */}
                <div className="text-right mb-20">
                    <h1 className="text-[90px] font-normal mb-4">Welcome</h1>
                    <p className="text-[26px] mb-4">Discover care that listens to you,<br /> Relphacare brings you a new health experience!</p>
                </div>
                <div className="flex flex-row items-end">
                    <button className="text-lg px-6 py-3 bg-gradient-to-r from-[#E8EEFC] to-white text-black rounded-lg mb-4 mr-4 shadow-md">I just want to chill</button>
                    <button className="text-lg px-6 py-3 bg-gradient-to-r from-[#E8EEFC] to-white text-black rounded-lg mb-4 shadow-md">Begin my journey</button>
                </div>
            </div>
        </main>
    );
}
