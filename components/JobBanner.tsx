import Image from "next/image";

export default function JobBanner() {
  return (
    <div className="bg-black py-8 px-2">
      <div className="relative bg-gradient-to-r from-blue-600 to-[#053D99] rounded-lg flex items-center overflow-visible max-w-6xl mx-auto px-4 py-4 h-[140px] mr-45 ml-45">
                <Image
                  src="/mask.png" // ✅ Use your actual uploaded image here
                  alt="Background"
                  fill
                  className="object-cover rounded-2xl"
                />
        {/* Decorative left pattern (blue circle texture) */}
        <div className="absolute bottom-1 left-4 w-10 h-10 bg-[url('/image.png')] bg-contain bg-no-repeat opacity-30 z-0 brightness-1000" />

        {/* Silhouette image - aligned to bottom, but extends above */}
        <div className="absolute bottom-0 left-15 z-10 w-[90px] md:w-[110px] lg:w-[130px] -mt-10">
          <Image
            src="/3 (6).png"
            alt="Person Silhouette"
            width={130}
            height={130}
            className="object-contain"
          />
        </div>

        {/* Decorative Mask group */}
        <div className="absolute top-0 right-0 w-32 h-full bg-[url('/Mask group.png')] bg-contain bg-no-repeat opacity-30 z-0" />


        {/* CTA Button */}
        <div className="ml-auto relative z-10 mr-[6%]">
          <button className="bg-white text-black text-base font-semibold px-6 py-3 rounded-full flex items-center shadow hover:bg-gray-100 transition">
            Post your job now
            <span className="ml-2 bg-blue-500 text-white rounded-full p-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
