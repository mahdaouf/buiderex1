import Image from "next/image";

export default function JobBanners() {
  return (
    <div className="bg-[#1646D2] py-8  px-2">
      <div className="relative rounded-xl  max-w-7xl mx-auto h-[240px] flex items-center px-6 -mt-32 z-10">

        {/* Background Image */}
        <Image
          src="/job.jpg" // ✅ Use your actual uploaded image here
          alt="Background"
          fill
          className="object-cover rounded-2xl"
        />

        {/* Optional overlay for style */}
        <div className="absolute inset-0 bg-opacity-30 z-0" />

        {/* Text */}
        <div className="z-10 ml-[7%] text-white text-[38px] font-bold">
          Post your job now
        </div>

        {/* Button */}
        <div className="ml-auto  mr-[7%] z-10">
          <button className="bg-blue-600 text-white text-sm font-medium px-10 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition">
            CLICK
             <Image
                    src="/right-arrow.svg" // assuming image is placed in /public folder
                    alt="Arrow Button"
                    width={28}
                    height={28}
                  />
          </button>
        </div>
      </div>
      <div className="bg-[#1646D2] px-20 py-10 flex items-center justify-between"></div>
    </div>
    
  );
}
