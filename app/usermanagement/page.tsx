"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

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

export default function UserManagementPage() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname?.startsWith(path) || false;

const renderActionButtons = () => (
  <div className="flex justify-center">
    <Image
      src="/actions1.png" // Ensure the image is inside the public folder
      alt="Actions"
      width={72}
      height={24}
      className="object-contain"
    />
  </div>
);


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
      <main className="flex-1 p-6 space-y-10">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">Pages / User management</div>
          
        </div>


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


        

        {/* User List Table */}
        <section>
          <h2 className="text-xl font-bold text-blue-600 mb-4">User List Table</h2>
          <div className="bg-white rounded-xl p-4 shadow ">
            <div className="flex gap-2 mb-4">
  <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
    <option>Filter</option>
  </select>

  {/* Search Input with embedded SVG image */}
  <div className="relative flex-1"> {/* Use flex-1 to make it take available space */}
    <input
      type="text"
      placeholder="Search..."
      className="
        border border-gray-300 rounded px-8 py-1 w-[200px] text-sm
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
            <table className="w-full text-sm text-center">
              <thead className="text-[#5A607F]">
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>user id</th>
                  <th>name</th>
                  <th>type</th>
                  <th>status</th>
                  <th>Date joined</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, i) => (
                  <tr key={i} className="border-t border-gray-200 ">
                    <td><input type="checkbox" defaultChecked className="accent-blue-600" /></td>
                    <td colSpan={5}></td>
                    <td>{renderActionButtons()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* User Profile View */}
        <section>
          <h2 className="text-xl font-bold text-blue-600 mb-4">User Profile View</h2>
          <div className="bg-white rounded-xl p-4 shadow">
            <div className="flex gap-2 mb-4">
  <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
    <option>Filter</option>
  </select>

  {/* Search Input with embedded SVG image */}
  <div className="relative flex-1"> {/* Use flex-1 to make it take available space */}
    <input
      type="text"
      placeholder="Search..."
      className="
        border border-gray-300 rounded px-8 py-1 w-[200px] text-sm
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
            <table className="w-full text-sm text-center">
              <thead className="text-[#5A607F]">
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>name</th>
                  <th>Email</th>
                  <th>phone number</th>
                  <th>location</th>
                  <th>status</th>
                  <th>last login</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, i) => (
                  <tr key={i} className="border-t border-gray-200">
                    <td><input type="checkbox" defaultChecked className="accent-blue-600" /></td>
                    <td colSpan={6}></td>
                    <td>{renderActionButtons()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
            <h2 className="text-xl font-bold text-blue-600 mb-4">Trade Worker</h2>
         
        {/* Trade Worker + Actions Panel */}
        <section className="flex gap-6">
          <div className="bg-white rounded-xl p-4 shadow flex-1 ">
            
            <div className="flex gap-2 mb-4">
  <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500">
    <option>Filter</option>
  </select>

  {/* Search Input with embedded SVG image */}
  <div className="relative flex-1"> {/* Use flex-1 to make it take available space */}
    <input
      type="text"
      placeholder="Search..."
      className="
        border border-gray-300 rounded px-8 py-1 w-[200px] text-sm
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
            <table className="w-full text-sm text-center">
              <thead className="text-[#5A607F]">
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Portfolio</th>
                  <th>Certifications</th>
                  <th>Work Area</th>
                  <th>KYC</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, i) => (
                  <tr key={i} className="border-t border-gray-200">
                    <td><input type="checkbox" defaultChecked className="accent-blue-600" /></td>
                    <td colSpan={4}></td>
                    <td>{renderActionButtons()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>     

          {/* Actions Panel */}
          <div className="bg-white rounded-xl p-4 shadow w-105">
  <h2 className="text-xl font-bold text-[#0866FF] mb-4">Actions:</h2>
  <div className="space-y-2 text-sm text-left">
    <button className="w-full bg-[#F9F9F9] text-[#0866FF] text-left py-2 px-4 rounded hover:bg-[#0866FF] hover:text-white transition-colors">Suspend</button>
    <button className="w-full bg-[#F9F9F9] text-[#0866FF] text-left py-2 px-4 rounded hover:bg-[#0866FF] hover:text-white transition-colors">Delete</button>
    <button className="w-full bg-[#F9F9F9] text-[#0866FF] text-left py-2 px-4 rounded hover:bg-[#0866FF] hover:text-white transition-colors">Send Notification</button>
    <button className="w-full bg-[#F9F9F9] text-[#0866FF] text-left py-2 px-4 rounded hover:bg-[#0866FF] hover:text-white transition-colors">Reset Password</button>
  </div>
</div>

        </section>
      </main>
    </div>
  );
}
