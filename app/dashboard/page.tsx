"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

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

const initialApprovals = [
  { company: "The builder network", approved: false, declined: false },
  { company: "The builder network Free", approved: false, declined: false },
  { company: "Microsoft", approved: false, declined: false },
  { company: "Apple", approved: false, declined: false },
  { company: "builder", approved: false, declined: false },
];

export default function Dashboard() {
  const [approvals, setApprovals] = useState(initialApprovals);
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname?.startsWith(path) || false;


  const toggleApproval = (index: number) => {
    setApprovals((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, approved: !item.approved, declined: false }
          : item
      )
    );
  };

  const toggleDecline = (index: number) => {
    setApprovals((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, declined: !item.declined, approved: false }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen flex bg-[#F1FAEE]">
      {/* Sidebar */}
      <aside className="w-64 bg-[radial-gradient(circle,_#0866FF,_#053D99)] text-white flex flex-col p-6 min-h-full rounded-tr-2xl rounded-br-2xl">
        <div className="mb-10">
          <Image
            src="/builder-name.png"
            alt="Builder Network"
            width={180}
            height={60}
          />
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

      {/* Main Dashboard Content */}
      <main className="flex-1 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">Pages / Dashboard</div>
          
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#0866FF]">Key Metrics:</h1>
          <button className="bg-[#377DFF] text-white px-4 py-2 rounded text-sm shadow">
            Bulk Actions
          </button>
        </div>

        {/* Top Graphs */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-4  w-[700px]  ">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-blue-600">Jobs Posted</h2>
              <span className="text-sm text-gray-500">Last 12 Hours</span>
            </div>
            <Image
              src="/line2graph.png"
              alt="Jobs Posted"
              width={1000}
              height={400}
              className="w-full h-auto mt-27"
            />
          </div>
          <div className="bg-white rounded-2xl shadow p-4 ml-[80%] w-[500px]">
            <div className="flex justify-between items-center mb-2 ">
              <h2 className="text-xl font-semibold text-blue-600">Active Users</h2>
              <span className="text-sm text-gray-500">Monthly</span>
            </div>
            <Image
              src="/bargraph.png"
              alt="Active Users"
              width={400}
              height={300}
              className="w-full h-auto mt-40"
            />
          </div>
        </div>

        {/* Revenue & Approvals */}
        <div className="grid grid-cols-3">
          <div className="bg-white rounded-2xl shadow p-4 w-[370px]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-blue-600">Revenue</h2>
              <span className="text-sm text-gray-500">Monthly</span>
            </div>
            <Image
              src="/linegragh.png"
              alt="Revenue"
              width={400}
              height={200}
              className="w-full mt-18 h-auto"
            />
          </div>
          <div className="bg-white rounded-2xl shadow p-4 w-[350px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-blue-600">Pending Approvals</h2>
              <button className="text-blue-500 text-sm">⋮</button>
            </div>
            <table className="w-full text-sm mt-13">
              <thead>
                <tr className="text-left text-[#A3AED0] font-semibold ">
                  <th>company names</th>
                  <th className="text-center">Approval</th>
                  <th className="text-center">DECLINE</th>
                </tr>
              </thead>
              <tbody>
                {approvals.map((row, index) => (
                  <tr key={index} className=" border-gray-200">
                    <td className="py-2 text-[#0866FF] font-medium">{row.company}</td>
                    <td className="text-center">
                      <input
                        type="checkbox"
                        checked={row.approved}
                        onChange={() => toggleApproval(index)}
                        className="accent-blue-600"
                      />
                    </td>
                    <td className="text-center">
                      <input
                        type="checkbox"
                        checked={row.declined}
                        onChange={() => toggleDecline(index)}
                        className="accent-blue-600"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance Graphs */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-4">Performance Graphs:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[300px]">
            <div className="bg-white rounded-2xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-blue-600">Trends in Jobs</h3>
                <span className="text-sm text-[#A3AED0]">Monthly</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-blue-600">Revenue Growth</h3>
                <span className="text-sm text-[#A3AED0]">Monthly</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-blue-600">Admin Actions & Logs</h3>
                
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[#A3AED0]  ">
                    <th>Name</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-gray-200">
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
