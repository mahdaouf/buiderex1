'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react'; // ✅ Import useState

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState(''); // ✅ State for email
  const [password, setPassword] = useState(''); // ✅ State for password
  const [error, setError] = useState(''); // ✅ State for error messages

  const handleSignIn = () => {
    setError(''); // Clear any previous errors
    if (email === 'admin' && password === 'admin') {
      router.push('/dashboard');
    } else {
      setError('Invalid username or password.'); // Set error message
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <a href="/homepage" className="text-sm text-gray-400 inline-block mb-4">
            &larr; Back to dashboard
          </a>

          <h2 className="text-3xl font-bold text-gray-900 mb-1">Sign In</h2>
          <p className="text-sm text-gray-400 mb-6">
            Enter your email and password to sign in!
          </p>

          {/* Google Sign In */}
          <button className="w-full flex items-center justify-center bg-[#F4F7FE] text-gray-800 py-2 rounded-md mb-4 hover:bg-gray-200">
            <Image
              src="/google-icon.png"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Sign in with Google
          </button>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">
              Email*
            </label>
            <input
              type="email"
              placeholder="fahad9808765829"
              className="w-full border border-gray-300 text-[#000000] font-bold rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email} // ✅ Bind value to state
              onChange={(e) => setEmail(e.target.value)} // ✅ Update state on change
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-black mb-1">
              Password*
            </label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className="w-full border border-gray-300 text-[#000000] font-bold rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password} // ✅ Bind value to state
              onChange={(e) => setPassword(e.target.value)} // ✅ Update state on change
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* ✅ Display error */}

          {/* Checkbox & Forgot Password */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center text-black font-bold">
              <input type="checkbox" className="mr-2" />
              Keep me logged in
            </label>
            <a href="/password-reset" className="text-[#0866FF] hover:underline">
              Forget password?
            </a>
          </div>

          {/* Sign In Button with Router Push */}
          <button
            onClick={handleSignIn} // ✅ Call handleSignIn function
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>

          {/* Register */}
          <p className="text-sm text-black font-bold text-center mt-4">
            Not registered yet?{' '}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Create an Account
            </a>
          </p>
        </div>
      </div>

      {/* Right Side: Blue Panel */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#0866FF] to-[#053D99] text-white flex-col justify-center items-center relative overflow-hidden rounded-bl-[100px]">
        <Image
          src="/builder-name.png"
          alt="Builder Network"
          width={502}
          height={130}
          className="mb-6"
        />
        <div className="mt-8 px-8 py-4 border border-white rounded-xl text-center">
          <p className="text-sm mb-1">Learn more about The builder Network on</p>
          <p className="font-bold text-lg">The builder Network</p>
        </div>
      </div>
    </div>
  );
}