"use client";

import React from "react";
import Image from "next/image";

const Confirm = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle,_#0866FF,_#053D99)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/download.png"
            alt="Confirmation Icon"
            width={64}
            height={64}
          />
        </div>
        <h2 className="text-2xl text-black font-bold mb-2">Almost There!</h2>
        <p className="text-[#5A607F] text-[12px] mb-6">
          Check your email inbox and confirm your account
        </p>
        <hr className="mb-6" />
        <p className="text-[#5A607F] text-[12px] mb-4">
          Didn't receive any mail?
        </p>
        <button className="block w-full border border-gray-300 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition">
          Resend Confirmation
        </button>
      </div>
    </div>
  );
};

export default Confirm;
