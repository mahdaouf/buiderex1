'use client';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="flex justify-between items-center py-5 font-bold max-w-5xl mx-auto w-full">
        <div className="text-white font-bold text-xl">
      <img
        src='/b-name.png'
        alt="The Builder Network Logo"
        className="h-9" // Tailwind CSS classes for the image itself
      />
    </div>
        <div className="space-x-3">
          <button className="text-sm px-4 py-2 text-[#262627] rounded border border-gray-300 hover:bg-[#1646D2] hover:text-white">
            <a href="/login">
            Log in</a>
          </button>
          <button className="text-sm px-4 py-2 text-[#262627] rounded border border-gray-300 hover:bg-[#1646D2] hover:text-white">
            I’m a customer
          </button>
        </div>
      </header>

     
       
       <section className="text-center text-[#111] px-5 py-16 mb-15">

      {/* Trades Section */}
      <div className="max-w-[880px] mx-auto text-left ">
        <h3 className="text-[20px] font-bold mb-4 pl-3">Other <br/>trades</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            "Architectural Designer", "Architectural Technician", "Bathroom Fitter", "Bricklayer", "Carpenter", "Carpet & Lino Fitter",
            "Conservatory Installer", "Conversions Specialist", "Damp Proofing Specialist", "Decking Specialist", "More +"
          ].map((trade, index) => (
            <div key={index} className="bg-[#1646D2] text-[#FFFFFF] text-left p-3 rounded font-medium">
              {trade}
            </div>
          ))}
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
}
