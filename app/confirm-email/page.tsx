import React from 'react';

const ConfirmEmail = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle,_#0866FF,_#053D99)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl text-black font-bold mb-2">Confirm Email</h2>
        <p className="text-[#5A607F] text-[12px] mb-6">Check Your Email and Enter Confirmation Code</p>
        
        <form className="text-left">
          <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
            Confirmation Code
          </label>
          <input
            type="text"
            id="code"
            placeholder="Enter Code"
            className="w-full px-4 py-2 border text-[#A1A7C4] border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </form>

        <a
          href="/confirm"
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Confirm Email
        </a>

        <hr className="my-6" />

        <p className="text-sm text-[#5A607F] mb-2">Haven’t received your code?</p>
        <a
          href="/resend-code"
          className="block w-full text-blue-600 border border-gray-300 py-2 rounded-md hover:bg-blue-50 transition text-center"
        >
          Resend Code
        </a>
      </div>
    </div>
  );
};

export default ConfirmEmail;
