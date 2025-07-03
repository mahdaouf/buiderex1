"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

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

const data = [
  { name: "Plumber", location: "Sawaynchester", price: "$96.14", icon: "W" },
  { name: "Painting & Decorating", location: "Vaudeville", price: "$22.18", icon: "L" },
  { name: "Gardening & Landscaping", location: "East Freida ton", price: "$59.64", icon: "D" },
  { name: "Bathroom Fitting", location: "South Marcellus", price: "$54.52", icon: "A" },
];

export default function UserManagementPage() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname?.startsWith(path) || false;

  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(2);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex bg-[#F1FAEE] text-[#131523]">
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

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-10">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">Pages / Revenue & Fee Management</div>
        </div>

        {/* Search and Dropdown */}
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1.5 rounded-full text-sm bg-[#0866FF] text-white placeholder-white"
            style={{
              backgroundImage: "url('/search-icon.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left 10px center",
              backgroundSize: "16px 16px",
            }}
          />

          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              type="button"
              className="bg-[#377DFF] text-white px-7 py-2 rounded text-sm shadow flex items-left gap-2"
              onClick={() => setOpen((prev) => !prev)}
            >
              Bulk Actions
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 z-10 mt-2 w-39 rounded-md bg-[#A9C7FF] shadow-lg text-sm text-black ">
                <button className="w-full text-left px-4 py-2 hover:bg-[#377DFF] hover:text-white">
                  Adjust Fees
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-[#377DFF] hover:text-white">
                  Download Reports
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-[#377DFF] hover:text-white">
                  Set Custom Pricing
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Shortlisting Fee Settings Details */}
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-bold text-[#0866FF] mt-12">Shortlisting Fee Settings</h1>
        </div>

        {/* Job Table Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <a href="#" className="text-[#1E5EFF] font-medium ">
              Adjust Fees by Job Type/Location
            </a>
            <div className="flex gap-2">
              <button className="p-2 bg-white border rounded hover:bg-gray-100">✎</button>
              <button className="p-2 bg-white border rounded hover:bg-red-100">🗑</button>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <select className="border border-gray-300 rounded px-2 py-2 w-[150px] text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
              <option>Filter</option>
            </select>

            {/* Search Input with Image */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded px-8 py-2 w-[230px] text-sm placeholder-gray-400 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
              <Image
                src="/search-153.svg"
                alt="Search Icon"
                width={16}
                height={16}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>
          </div>

          <table className="w-full bg-white rounded shadow text-sm">
            <thead>
              <tr className="text-left bg-white border-b">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="p-3">Name</th>
                <th className="p-3">Location</th>
                <th className="p-3">Price</th>
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
                  <td className="p-3">{job.location}</td>
                  <td className="p-3">{job.price}</td>
                  <td className="p-3 flex gap-2">
                    <button className="text-blue-500 hover:opacity-75">
                      <Eye size={16} />
                    </button>
                    <button className="text-green-500 hover:opacity-75">
                      <Pencil size={16} />
                    </button>
                    <button className="text-red-500 hover:opacity-75">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-2 items-center text-sm text-gray-700">
              <button>&lt;</button>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  className={`px-2 py-1 rounded ${num === page ? "bg-blue-200 font-semibold" : "hover:bg-gray-200"}`}
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

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#0866FF]">Revenue Insights:</h1>
        </div>

        {/* Top Graphs */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-4 w-[700px] h-[450px]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-blue-600">Earnings Breakdown</h2>
              <span className="text-sm text-[#A3AED0] gap-6">Last 12 Hours</span>
            </div>
            <Image src="/line2graph.png" alt="Jobs Posted" width={1000} height={400} className="w-full h-auto mt-30" />
          </div>
          <div className="bg-white rounded-2xl shadow p-4 ml-[80%] w-[500px] h-[450px]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-blue-600">Trends</h2>
              <span className="text-sm text-[#A3AED0]">Monthly</span>
            </div>
            <Image src="/bargraph.png" alt="Active Users" width={400} height={300} className="w-full h-auto mt-30" />
          </div>
        </div>

        {/* Revenue */}
        <div className="w-full px-4">
          <div className="gap-4">
            <div className="bg-white rounded-2xl shadow p-4 h-[400px]">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-blue-600">Graphs</h2>
                <span className="text-sm text-[#A3AED0]">Last 12 Hours</span>
              </div>
              <Image src="/image3.png" alt="Revenue" width={400} height={200} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
