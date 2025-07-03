'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // 👈 Eye icons

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // 👈 Toggle state

  const handleSignIn = () => {
    setError('');
    if (email === 'admin' && password === 'admin') {
      router.push('/dashboard');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="relative min-h-screen font-sans">
      {/* Back Link */}
      <a
        href="/homepagelight"
        className="absolute top-6 left-6 text-sm text-gray-400 hover:text-gray-600 ml-[11%]"
      >
        &lt;  Back to dashboard
      </a>

      <div className="flex min-h-screen">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-bold text-black mb-1">Sign In</h2>
            <p className="text-sm text-gray-400 mb-6">
              Enter your email and password to sign in!
            </p>

            {/* Google Sign In */}
            <button className="w-full flex items-center justify-center bg-[#F4F7FE] text-gray-800 py-2 rounded-xl mb-4 hover:bg-gray-200 transition">
              <Image
                src="/google-icon.png"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign in with Google
            </button>

            <div className="text-center text-sm text-gray-400 mb-4">or</div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-1">
                Email*
              </label>
              <input
                type="email"
                placeholder="fahad9808765829"
                className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field with Eye Icon */}
            <div className="mb-3 relative">
              <label className="block text-sm font-medium text-black mb-1">
                Password*
              </label>
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Min. 8 characters"
                className="w-full border border-gray-200 rounded-xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute top-9 right-3 text-gray-500 hover:text-gray-700"
                tabIndex={-1}
              >
                {isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Checkbox & Forgot */}
            <div className="flex items-center justify-between mb-6 text-sm">
              <label className="flex items-center text-black">
                <input type="checkbox" className="mr-2 accent-blue-600" />
                Keep me logged in
              </label>
              <a href="/password-reset" className="text-blue-500 hover:underline">
                Forget password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleSignIn}
              className="w-full bg-[#0047FF] text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Sign In
            </button>

            {/* Register */}
            <p className="text-sm text-black text-center mt-4">
              Not registered yet?{' '}
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                Create an Account
              </a>
            </p>
          </div>
        </div>

        {/* Right Side Panel */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#0866FF] to-[#053D99] text-white flex-col justify-center items-center relative overflow-hidden rounded-bl-[100px]">
          <Image
            src="/builder-name.png"
            alt="Builder Network"
            width={502}
            height={130}
            className="mb-8"
          />
          <div className="px-8 py-4 border border-white rounded-xl text-center">
            <p className="text-sm text-white/70 mb-1">
              Learn more about The builder Network on
            </p>
            <p className="font-bold text-lg">The builder Network</p>
          </div>
        </div>
      </div>
    </div>
  );
}
