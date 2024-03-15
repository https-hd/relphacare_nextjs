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
            {/* Right side */}
            <div className="flex-1 flex flex-col justify-center items-end p-40 text-right mb-20">
                <h1 className="text-[90px] font-normal mb-4">Thank you</h1>
                <p className="text-[26px] mb-4">Thank you for visiting Relphacare’s pod<br />Hope you enjoyed your stay with us!</p>
            </div>
        </main>
    );
}
