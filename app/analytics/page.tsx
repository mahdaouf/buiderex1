"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Dashboards", path: "/dashboard" },
  { label: "User Management", path: "/usermanagement" },
  { label: "Analytics & Reporting", path: "/analytics" },
  { label: "Revenue & Fee Management", path: "/revenue" },
  { label: "Notifications Management", path: "/notifications" },
  { label: "Dispute Management", path: "/dispute" },
  { label: "System Settings", path: "/settings" },
  { label: "Logout", path: "/login" },
];

export default function Dashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname?.startsWith(path) || false;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // ✅ typed ref

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex bg-[#F1FAEE]">
      {/* Sidebar */}
      <aside className="w-64 bg-[radial-gradient(circle,_#0866FF,_#053D99)] text-white flex flex-col p-6 min-h-full rounded-tr-2xl rounded-br-2xl">
        <div className="mb-10">
          <Image src="/builder-name.png" alt="Builder Network" width={180} height={60} />
        </div>

        <nav className="space-y-4 text-[13px]">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className={`cursor-pointer px-4 py-2 rounded-lg transition ${
                isActive(item.path) ? "bg-white text-blue-700" : "hover:bg-blue-500"
              }`}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">Pages / Analytics & Reporting</div>
        </div>

        {/* Search and Dropdown */}
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1.5 rounded-full text-sm bg-[#0866FF] text-white placeholder-white"
            style={{
              backgroundImage: "url('/search-icon.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left 10px center',
              backgroundSize: '16px 16px',
            }}
          />

          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              type="button"
              className="bg-[#377DFF] text-white px-7 py-2 rounded text-sm shadow flex items-left gap-2"
              onClick={() => setOpen((prev) => !prev)}
            >
              Bulk Actions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 z-10 mt-2 w-39 rounded-md bg-[#A9C7FF] shadow-lg text-sm text-black">
                <button className="w-full text-left px-4 py-2 hover:bg-[#377DFF] hover:text-white">Download Reports</button>
                <button className="w-full text-left px-4 py-2 hover:bg-[#377DFF] hover:text-white"></button>
                <button className="w-full text-left px-4 py-2 hover:bg-[#377DFF] hover:text-white"></button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-25">
          <h1 className="text-[25px] font-bold text-blue-600 mb-4">Key Metrics:</h1>
        </div>

        {/* Top Graphs */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-4 w-[700px] h-[450px]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-blue-600">Jobs Posted</h2>
              <span className="text-sm text-[#A3AED0] gap-6">Last 12 Hours</span>
            </div>
            <Image
              src="/line2graph.png"
              alt="Jobs Posted"
              width={1000}
              height={400}
              className="w-full h-auto mt-30"
            />
          </div>
          <div className="bg-white rounded-2xl shadow p-4 ml-[80%] w-[500px] h-[450px]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-blue-600">Active Users</h2>
              <span className="text-sm text-[#A3AED0]">Monthly</span>
            </div>
            <Image
              src="/bargraph.png"
              alt="Active Users"
              width={400}
              height={300}
              className="w-full h-auto mt-30"
            />
          </div>
        </div>

        {/* Revenue */}
        <div className="grid grid-cols-3">
          <div className="bg-white rounded-2xl shadow p-4 w-[350px]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-blue-600">Revenue Breakdown</h2>
              <span className="text-sm text-[#A3AED0]">Monthly</span>
            </div>
            <Image
              src="/linegragh.png"
              alt="Revenue"
              width={400}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Performance Graphs */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-4">User Activity:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[300px]">
            <div className="bg-white rounded-2xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-blue-600">Jobs Completed</h3>
                <span className="text-sm text-[#A3AED0]">Monthly</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-blue-600">Response Times</h3>
                <span className="text-sm text-[#A3AED0]">Monthly</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-blue-600">Engagement</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Graphs */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-4">Graphs:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[300px]">
            <div className="bg-white rounded-2xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-blue-600">Revenue Growth</h3>
                <span className="text-sm text-[#A3AED0]">Monthly</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-blue-600">User Trends</h3>
                <span className="text-sm text-[#A3AED0]">Monthly</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-blue-600">Most Viewed Profiles</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
