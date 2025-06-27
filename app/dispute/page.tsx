"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Eye, Pencil, Trash2 } from 'lucide-react';

const navItems = [
  { label: "Dashboards", path: "/dashboard" },
  { label: "User Management", path: "/usermanagement" },
  { label: "Analytics & Reporting", path: "/analytics" },
  { label: "Revenue & Fee Management", path: "/revenue" },
  { label: "Notifications Management", path: "/notifications" },
  { label: "Dispute Management", path: "/dispute" },
  { label: "System Settings", path: "/settings" },
  { label: "Logout", path: "/logout" },
];

const data = [
  { name: 'Ahmed', issue: '', tradeworker: 'Plumber', icon: 'A' },
  { name: 'Lucky', issue: '', tradeworker: 'Painting & Decorating', icon: 'L' },
  { name: 'Danish', issue: '', tradeworker: 'Gardening & Landscaping', icon: 'D' },
  { name: 'Anise', issue: '', tradeworker: 'Bathroom Fitting', icon: 'A' },
];

const data1 = [
  { name: '', userinfo: '', evidence: '', icon: '' },
  { name: '', userinfo: '', evidence: '', icon: '' },
  { name: '', userinfo: '', evidence: '', icon: '' },
  { name: '', userinfo: '', evidence: '', icon: '' },
];

export default function UserManagementPage() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname?.startsWith(path) || false;

  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(2);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex bg-[#F1FAEE] text-[#131523] w-full">
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
                isActive(item.path)
                  ? "bg-white text-blue-700"
                  : "hover:bg-blue-500"
              }`}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-10 w-full">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">Pages /Dispute Management</div>
        </div>

        {/* Search and Dropdown */}
        <div className="flex justify-between items-center">
          <input
  type="text"
  placeholder="Search"
  className="pl-10 pr-4 py-1.5 rounded-full text-sm bg-[#0866FF] text-white placeholder-white"
  style={{
    backgroundImage: "url('/search-icon.svg')", // Replace with your icon path
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left 10px center', // Adjust position as needed
    backgroundSize: '16px 16px', // Adjust size as needed
  }}
/>

          <button className="bg-[#377DFF] text-white px-4 py-2 rounded text-sm shadow">
            Bulk Actions
          </button>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#0866FF]">Dispute Cases</h1>
        </div>

        {/* Dispute Cases Table */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-2 mb-4">
  <select className="border border-gray-300 rounded px-4 py-2 w-[150px] text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
    <option>Filter</option>
  </select>

  {/* Search Input with embedded SVG image */}
  <div className="relative flex-1"> {/* Use flex-1 to make it take available space */}
    <input
      type="text"
      placeholder="Search..."
      className="
        border border-gray-300 rounded px-8 py-2 w-[230px] text-sm
        placeholder-gray-400 text-gray-700
        focus:ring-blue-500 focus:border-blue-500
      "
    />
    {/* SVG Search Icon as an <img> tag */}
    <img
      src="/search-153.svg" /* Path to your SVG file */
      alt="Search Icon"
      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4" /* Positioning and size */
    />
  </div>
</div>
            <div className="flex gap-2">
              <button className="p-2 bg-white border rounded hover:bg-gray-100">✎</button>
              <button className="p-2 bg-white border rounded hover:bg-red-100">🗑</button>
            </div>
          </div>

          <table className="w-full bg-white rounded shadow text-sm">
            <thead>
              <tr className="text-left bg-white text-[#5A607F] border-b">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="p-3">Customer Name</th>
                <th className="p-3">Issue</th>
                <th className="p-3">Trade Worker</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((job, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#A1A7C4] rounded-full font-bold text-white">
                      {job.icon}
                    </div>
                    {job.name}
                  </td>
                  <td className="p-3">{job.issue}</td>
                  <td className="p-3">{job.tradeworker}</td>
                  <td className="p-3 flex gap-2">
                    <button className="text-blue-500 hover:opacity-75"><Eye size={16} /></button>
                    <button className="text-green-500 hover:opacity-75"><Pencil size={16} /></button>
                    <button className="text-red-500 hover:opacity-75"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-2 items-center text-sm text-gray-700">
              <button>&lt;</button>
              {[1, 2, 3, 4, 5, 6].map(num => (
                <button
                  key={num}
                  className={`px-2 py-1 rounded ${num === page ? 'bg-blue-200 font-semibold' : 'hover:bg-gray-200'}`}
                  onClick={() => setPage(num)}
                >
                  {num}
                </button>
              ))}
              <span>…</span>
              <button>24</button>
              <button>&gt;</button>
            </div>
            <span className="text-sm text-gray-500">4 Results</span>
          </div>
        </section>

        {/* Dispute Details */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#0866FF]">Dispute Details</h1>
        </div>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-2 mb-4">
  <select className="border border-gray-300 rounded px-2 py-2 w-[150px] text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
    <option>Filter</option>
  </select>

  {/* Search Input with embedded SVG image */}
  <div className="relative flex-1"> {/* Use flex-1 to make it take available space */}
    <input
      type="text"
      placeholder="Search..."
      className="
        border border-gray-300 rounded px-8 py-2 w-[230px] text-sm
        placeholder-gray-400 text-gray-700
        focus:ring-blue-500 focus:border-blue-500
      "
    />
    {/* SVG Search Icon as an <img> tag */}
    <img
      src="/search-153.svg" /* Path to your SVG file */
      alt="Search Icon"
      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4" /* Positioning and size */
    />
  </div>
</div>
            <div className="flex gap-2">
              <button className="p-2 bg-white border rounded hover:bg-gray-100">✎</button>
              <button className="p-2 bg-white border rounded hover:bg-red-100">🗑</button>
            </div>
          </div>

          <table className="w-full bg-white rounded shadow text-sm">
            <thead>
              <tr className="text-left bg-white text-[#5A607F] border-b">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="p-3">Summary</th>
                <th className="p-3">User Information</th>
                <th className="p-3">Evidence</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((job, idx) => (
                <tr key={idx} className="border-b hover:bg-[#E6E9F4]">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full font-bold text-white">
                      {job.icon}
                    </div>
                    {job.name}
                  </td>
                  <td className="p-3">{job.userinfo}</td>
                  <td className="p-3">{job.evidence}</td>
                  <td className="p-3 flex gap-2">
                    <button className="text-blue-500 hover:opacity-75"><Eye size={16} /></button>
                    <button className="text-green-500 hover:opacity-75"><Pencil size={16} /></button>
                    <button className="text-red-500 hover:opacity-75"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-2 items-center text-sm text-gray-700">
              <button>&lt;</button>
              {[1, 2, 3, 4, 5, 6].map(num => (
                <button
                  key={num}
                  className={`px-2 py-1 rounded ${num === page ? 'bg-blue-200 font-semibold' : 'hover:bg-gray-200'}`}
                  onClick={() => setPage(num)}
                >
                  {num}
                </button>
              ))}
              <span>…</span>
              <button>24</button>
              <button>&gt;</button>
            </div>
            <span className="text-sm text-gray-500">4 Results</span>
          </div>
        </section>
      </main>
    </div>
  );
}
