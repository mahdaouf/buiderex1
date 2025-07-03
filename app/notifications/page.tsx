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
  { label: "Logout", path: "/login" },
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
          <div className="text-sm text-gray-600">Pages /Notifications Management</div>
          
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

          <button className="bg-[#377DFF] text-white px-4 py-2 rounded text-sm shadow ">
            Bulk Actions
          </button>
        </div>




        <section className="space-y-4 mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-[19px] font-bold text-[#0866FF]">Components</h2>
          <button className="bg-[#0866FF] w-[110px] text-white px-4 py-2 rounded text-sm shadow">
            Settings
          </button>
        </div>
  <div className="bg-white p-4 rounded-xl flex flex-wrap text-center gap-10 shadow">
        {/* Default */}
        <button className="bg-[#000000] text-[#FFFFFF] font-semibold px-4 py-2 w-[200px] rounded-sm">
          Default
        </button>

        {/* Info */}
        <button className="bg-[#377DFF] text-[#000000] font-semibold px-4 py-2 rounded-sm w-[200px] flex justify-center items-center gap-1">
  <Image src="/info.png" alt="Info" width={16} height={16} />
  Info
</button>


        {/* Warning */}
        <button className="bg-[#FBBC05] text-[#000000] font-semibold px-4 py-2 rounded-sm flex w-[200px] justify-center items-center gap-1">
          <Image src="/warning.png" alt="Warning" width={16} height={16} />
          Warning
        </button>

        {/* Danger */}
        <button className="bg-[#FE1400] text-[#000000] font-semibold px-4 py-2 rounded-sm flex w-[200px] justify-center items-center gap-1">
          <Image src="/danger.png" alt="Danger" width={16} height={16} />
          Danger
        </button>

        {/* Success */}
        <button className="bg-[#34A853] text-[#000000] font-semibold px-4 py-2 rounded-sm flex w-[200px] justify-center items-center gap-1">
          <Image src="/success.png" alt="Success" width={16} height={16} />
          Success
        </button>
      </div>
</section>



        
         {/* Notifications Button Components */}
<section className="space-y-10 mt-8">
  {[
    "Rounded Corners Notifications",
    "Notifications With image",
    "Alternative Position",
  ].map((sectionTitle, idx) => (
    <div key={idx}>
      <h2 className="text-[19px] font-bold text-[#0866FF] mb-2">{sectionTitle}</h2>
      <div className="bg-white p-4 rounded-xl flex flex-wrap text-center gap-10 shadow">
        {/* Default */}
       <button className="bg-[#000000] text-[#FFFFFF] font-semibold px-4 py-2 w-[200px] rounded-sm">
          Default
        </button>

        {/* Info */}
        <button className="bg-[#377DFF] text-[#000000] font-semibold px-4 py-2 rounded-sm w-[200px] flex justify-center items-center gap-1">
  <Image src="/info.png" alt="Info" width={16} height={16} />
  Info
</button>


        {/* Warning */}
        <button className="bg-[#FBBC05] text-[#000000] font-semibold px-4 py-2 rounded-sm flex w-[200px] justify-center items-center gap-1">
          <Image src="/warning.png" alt="Warning" width={16} height={16} />
          Warning
        </button>

        {/* Danger */}
        <button className="bg-[#FE1400] text-[#000000] font-semibold px-4 py-2 rounded-sm flex w-[200px] justify-center items-center gap-1">
          <Image src="/danger.png" alt="Danger" width={16} height={16} />
          Danger
        </button>

        {/* Success */}
        <button className="bg-[#34A853] text-[#000000] font-semibold px-4 py-2 rounded-sm flex w-[200px] justify-center items-center gap-1">
          <Image src="/success.png" alt="Success" width={16} height={16} />
          Success
        </button>
      </div>
    </div>
  ))}
</section>
        

        
            
         
       
      </main>
    </div>
  );
}
