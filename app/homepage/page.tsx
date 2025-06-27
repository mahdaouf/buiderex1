import Image from "next/image";
import Footer from "@/components/Footer";
import JobBanner from "@/components/JobBanner";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Top Banner */}
      <div className="bg-blue-600 text-white text-center text-xs py-2">
        Are you a trades' person looking for leads?{" "}
        <a href="#" className="underline font-semibold">Join for free</a>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center bg-black px-6 py-1">
        <div className="text-white font-bold text-xl">
      <img
        src='/builder-name.png'
        alt="The Builder Network Logo"
        className="h-12 ml-14 mb-2" // Tailwind CSS classes for the image itself
      />
    </div>
        <nav className="flex items-center space-x-2 text-[#000000] text-sm">
  <a href="/homepagelight" className="py-2 px-4 rounded-full text-white bg-[#000000] text-left hover:bg-[#1646D2] hover:text-white transition-colors">
  Post a job
</a>

<a href="/logout" className="py-2 px-4 rounded-full text-white bg-[#000000] text-left hover:bg-[#1646D2] hover:text-white transition-colors">
  Log in
</a>

<button className="text-white bg-[#000000] text-left py-2 px-4 rounded-full hover:bg-[#1646D2] hover:text-white transition-colors">
  SIGN UP AS A TRADES' PERSON
</button>

        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-600 to-[#000000] overflow-hidden">
  
  {/* Background B Logo Image */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Image
      src="/paragraph.png"
      alt="B Background Logo"
      layout="fill"
      objectFit="contain"
      className="transform translate-y-29"
    />
  </div>



  {/* Main Hero Content */}
  <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-16 pb-32 relative z-10">

    {/* Left Side */}
    <div className="max-w-lg text-white space-y-8">
      <div className="space-y-2">
        <p className="text-xs tracking-widest uppercase">THE RELIABLE WAY TO HIRE A</p>
        <h1 className="text-[42px] font-kollektif md:text-6xl ">Trades Person</h1>
      </div>

      {/* Search Box */}
      <div className="mt-6">
        <p className="text-sm mb-2">What Is Your Job?</p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="FOR EXAMPLE: PAINTING"
            className="p-3 rounded-full text-[#0866FF] w-full text-sm bg-white placeholder-[#0866FF]"
          />
          <button className="bg-black p-3 rounded-full ml-2">
            <span className="text-white text-lg">➔</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-white text-black px-4 py-2 rounded-lg shadow-md w-fit space-y-1 mt-20">
      {/* Top Line: Text */}
      <div className="flex items-center space-x-1 text-sm font-medium">
        <span>Excellent</span>
        <span className="text-red-600 font-bold">★</span>
        <span>Trustpilot</span>
      </div>

      {/* Bottom Line: Stars */}
      <div className="flex space-x-1">
        {/* Full Stars */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 bg-red-600 text-black text-xs flex items-center justify-center "
          >
            ★
          </div>
        ))}

        {/* Half Star */}
        <div className="relative w-5 h-5  overflow-hidden">
          {/* Red half */}
          <div className="absolute inset-0 w-1/2 bg-red-600 text-black text-xs flex items-center justify-center">
            ★
          </div>
          {/* White half */}
          <div className="absolute right-0 w-1/2 h-full bg-gray-200" />
        </div>
      </div>
    </div>
    </div>
  </div>
    

    <div
  className="absolute rounded-full "
  style={{
    width: '122px',
    height: '122px',
    top: '52px',
    left: '319px',
    background: 'linear-gradient(135deg, #66A6FF, rgba(255, 255, 255, 0))',
  }}
></div>

  {/* Right Side - B Man Image Positioned Center Right */}
<div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center -mt-15">
  <Image 
    src="/b-man.png"
    alt="Tradesperson"
    width={521}
    height={800}
    className="object-contain"
  />
</div>



  {/* Stats Section */}
  <div className="rounded-tr-2xl bg-blue-700 py-7 text-white flex justify-around text-center mr-[60%] z-20 relative">
    <div>
      <h2 className="text-3xl font-bold">232,870</h2>
      <p className="text-xs">tradespeople</p>
    </div>
    <div>
      <h2 className="text-3xl font-bold">40+</h2>
      <p className="text-xs">trade categories</p>
    </div>
    <div>
      <h2 className="text-3xl font-bold">2,509,604</h2>
      <p className="text-xs">reviews</p>
    </div>
  </div>

</div>


       









<section className="relative py-20 overflow-hidden">
  {/* Blurred Blue Gradient Circle */}
  {/* Blurred Blue Gradient Circle - Moved higher */}
<div
  className="absolute z-0 rounded-full"
  style={{
    width: '226px',
    height: '226px',
    top: '600px', // Adjusted to be visible in the section
    left: '3px',
    backgroundColor: 'rgba(8, 80, 200, 0.5)', // #0866FF at 40% opacity
    filter: 'blur(160px)',
  }}
/>

<svg
  className="absolute z-10"
  style={{
    top: '6px',
    left: '89%',
    transform: 'rotate(-50.56deg)',
  }}
  width="130"
  height="200"
  viewBox="0 0 200 200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {[...Array(8)].map((_, i) => (
    <ellipse
      key={i}
      cx={30 + i * 15}
      cy={100}
      rx={20}
      ry={50}
      stroke="#635AD9"
      strokeWidth="2.5"
      fill="none"
    />
  ))}
</svg>


  {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/4107157.png"
      alt="Background"
      fill
      className="object-cover"
      quality={100}
    />
  </div>

  {/* Section Content */}
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#130047] mb-16">
      How to hire the right trades person
    </h2>

    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5">
      {/* Step 1 */}
      <div className="bg-white border-4 border-[#0064FF] rounded-full p-4 w-60 md:w-[307px] h-[436px] flex flex-col items-center justify-center shadow-md ml-50">
        <div className="bg-gray-300 rounded-full w-[249px] h-[234px] mt-[-60px]" />
        <p className="font-extrabold text-lg text-[#130047]"><br />STEP 1</p>
        <p className="text-sm mt-1 font-bold text-[#130047] text-center">
          Post Your <br />Job For Free
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-[#0064FF] text-white rounded-full p-4 w-60 md:w-[307px] h-[436px] flex flex-col items-center justify-center shadow-md">
        <div className="bg-gray-300 rounded-full w-[249px] h-[234px] mt-[-60px]" />
        <p className="font-extrabold text-lg"><br />STEP 2</p>
        <p className="text-sm mt-1 font-bold text-center">
          Tradespeople <br />Respond
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-white border-4 border-[#0064FF] rounded-full p-4 w-60 md:w-[307px] h-[436px] flex flex-col items-center justify-center shadow-md mr-50">
        <div className="bg-gray-300 rounded-full w-[249px] h-[234px] mt-[-60px]" />
        <p className="font-extrabold text-lg text-[#130047]"><br />STEP 3</p>
        <p className="text-sm mt-1 font-bold text-[#130047] text-center">
          Review Profiles <br /> And Choose
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <div className="mt-10">
      <button className="bg-gradient-to-r from-[#0E49A8] to-[#007BFF] text-white text-xs px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">
        SEE HOW IT WORKS
      </button>
    </div>
  </div>
</section>








         <section>
  <div className="min-h-screen bg-gradient-to-b from-[#0866FF] to-[#002A7F] text-white px-4 py-16 relative overflow-hidden">
    <div className="max-w-6xl mx-auto text-center">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Why The Builder Network is the reliable way
      </h1>
      <p className="text-sm md:text-base text-white/90 mb-16 max-w-2xl mx-auto">
        Hiring a trades' person when you need one isn’t always easy. The Builder Network is the reliable way, helping you hire the right trades person for your job.
      </p>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-10 items-center">
        {/* Left Section */}
        <div className="text-left">
          <h2 className="text-xl font-bold mt-[-150]">
            <span className="border-l-4 border-red-500 pl-2">The tradespeople you require</span>
          </h2>
          <p className="text-sm text-white/80">
            Post your job for free to access tradespeople with the skills you require and get responses from those who want to do it. You decide who you want to chat with.
          </p>
        </div>

        {/* Center Image with Decorations */}
        <div className="flex justify-center relative">
          <div className="relative w-48 h-72 md:w-60 md:h-80">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-20 z-0" />
            {/* Silhouette */}
            <img
              src="/3 (4).png"
              alt="silhouette"
              className="relative z-10 object-contain h-full w-full"
            />
            {/* Floating dots */}
            <div className="absolute -left-[12%] top-[30%]  text-red-400 text-5xl z-20">✦</div>
            <div className="absolute left-[80%] top-[25%] text-shadow-white text-2xl z-20">✦</div>
            <div className="absolute left-[2%] top-[75%] text-white text-sm z-20">✦</div>
            <div className="absolute -bottom-2 left-2 w-2 h-2 bg-white rounded-full opacity-80 blur-sm" />
            <div className="absolute top-2/3 right-3 w-2.5 h-2.5 bg-blue-300 rounded-full blur" />
          </div>
        </div>

        {/* Right Section */}
        <div className="text-left">
          <h2 className="text-xl font-bold mb-2 ">
            <span className="border-l-4 border-red-500 pl-2">Genuine customer reviews</span>
          </h2>
          <p className="text-sm text-white/80">
            Thanks to our robust feedback system, you can read genuine reviews from previous customers, allowing you to make an informed choice about whom to hire.
          </p>
        </div>
      </div>

      {/* You're in Control Section */}
      <div className="mt-16 max-w-md mx-auto text-left mb-[-50]">
        <h2 className="text-xl font-bold mt-[-31%]">
          <span className="border-l-4 border-red-500 pl-2 ml-[-350]">You're in control</span>
        </h2>
        <p className="text-sm text-white/80 ml-[-78%]">
          Review profiles, work history and feedback before making<br />a decision about whom to chat with. Only tradespeople you <br />have decided can contact you.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to hire a trades'<br /> person?</h2>
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
          POST YOUR JOB
        </button>
      </div>
    </div>

    {/* Decorative Background Shapes */}
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-400 to-blue-500 rounded-full blur-3xl opacity-30 z-0" />
    <div className="absolute top-10 right-10 w-6 h-6 bg-white rounded-full blur-sm opacity-50 z-0" />

    {/* ✅ Semi-Circle Gradient Decoration */}
    <div className="absolute rotate-90  bottom-0 -left-21 w-[300px] h-[150px] z-0 pointer-events-none overflow-auto">
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#FF3E3E] via-[#835CFF] to-[#0064FF] relative">
        <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] bg-[#002A7F] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  </div>
</section>





    <section className="relative py-20 overflow-hidden bg-[#0a0a0a]">
  {/* Section Content */}
  <div className="max-w-7xl mx-auto px-4 text-center mb-30">
    <p className="text-[29px] md:text-4xl font-bold text-white mb-16">
      Popular trades
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14">
      {/* Step 1 */}
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
  {/* Painting & Decorating */}
  <div className="relative w-[307px] h-[436px] bg-[#F0FAF9] border-[6px] border-[#0064FF] rounded-[150px] flex flex-col items-center text-center px-6 pt-16 pb-10 shadow-xl">
    {/* Hexagon Icon */}
    <div className="w-[110px] h-[110px] bg-[#0064FF] rotate-45 clip-hexagon border-2 border-white mb-6" />
    

    {/* Title */}
    <h3 className="font-extrabold text-lg text-[#130047] mb-2">
      Painting & Decorating
    </h3>

    {/* Description */}
    <p className="text-sm font-medium text-[#130047]">
      Thinking About Giving Your Space A Fresh, New Look? Our Guides Will Not
      Only Provide Pricing In...
    </p>

    {/* Learn More Link */}
    <a href="#" className="underline text-sm text-[#130047] font-semibold mt-3">
      Learn more
    </a>

    {/* Hexagon Button */}
    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
      <div className="w-12 h-12 bg-[#0064FF] clip-hexagon flex rotate-45 border-r items-center justify-center shadow-md">
        <ArrowUpRight size={18} className="text-white -rotate-45" />
      </div>
    </div>
  </div>

  {/* Plumbing */}
  <div className="relative w-[307px] h-[436px] bg-[#F0FAF9] border-[6px] border-[#0064FF] rounded-[150px] flex flex-col items-center text-center px-6 pt-16 pb-10 shadow-xl">
    <div className="w-[110px] h-[110px] bg-[#0064FF] clip-hexagon rotate-45 border-2 border-white mb-6" />

    <h3 className="font-extrabold text-lg text-[#130047] mb-2">
      Plumbing
    </h3>

    <p className="text-sm font-medium text-[#130047]">
      Curious About The Cost Of Plumbing Services? Dive Into Our Comprehensive Guides To Find Pricing...
    </p>

    <a href="#" className="underline text-sm text-[#130047] font-semibold mt-3">
      Learn more
    </a>

    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
      <div className="w-12 h-12 bg-[#0064FF] clip-hexagon rotate-45 flex items-center justify-center shadow-md">
        <ArrowUpRight size={18} className="text-white -rotate-45" />
      </div>
    </div>
  </div>

  {/* Gardening & Landscaping */}
  <div className="relative w-[307px] h-[436px] bg-[#F0FAF9] border-[6px] border-[#0064FF] rounded-[150px] flex flex-col items-center text-center px-6 pt-16 pb-10 shadow-xl">
    <div className="w-[110px] h-[110px] bg-[#0064FF] clip-hexagon rotate-45 border-2 border-white mb-6" />

    <h3 className="font-extrabold text-lg text-[#130047] mb-2">
      Gardening & Landscaping
    </h3>

    <p className="text-sm font-medium text-[#130047]">
      Dreaming Of A Garden That Captivates And Soothes? Our Detailed Guides Will Provide Pricing Info...
    </p>

    <a href="#" className="underline text-sm text-[#130047] font-semibold mt-3">
      Learn more
    </a>

    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
      <div className="w-12 h-12 bg-[#0064FF] clip-hexagon rotate-45 flex items-center justify-center shadow-md">
        <ArrowUpRight size={18} className="text-white -rotate-45" />
      </div>
    </div>
  </div>
</div>

    </div>

    
  </div>
  <div className="absolute w-[522px] h-[587px] border-[3px] border-[#EAF3F8] opacity-25 rounded-[80px] rotate-180 top-[640px] left-[1797px]" />

  <div className="absolute bottom-0 right-0 w-[300px] h-[150px] pointer-events-none overflow-hidden">
  {/* Outer Gradient Full Circle */}
  <div className="relative w-[300px] h-[300px] rounded-full bg-gradient-to-t from-[#0064FF] via-[#835CFF] to-[#FF3E3E]">
    {/* Inner Black Circle to carve out the center */}
    <div className="absolute inset-[60px] bg-black rounded-full" />
  </div>
</div>


</section>
   







<section className="relative bg-gradient-to-r from-[#0047A3] to-[#007BFF] text-white overflow-hidden py-24 px-6 md:px-20">
   <div
  className="absolute rounded-full "
  style={{
    width: '340.8px',
    height: '340.8px',
    top: '132px',
    left: '312px',
    background: 'linear-gradient(135deg, #66A6FF, rgba(255, 255, 255, 0))',
  }}
></div>
  {/* Spiral SVG (left) */}
  <svg
    className="absolute z-10 left-8 top-1/2"
    width="150"
    height="150"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: 'rotate(-45deg)' }}
  >
    {[...Array(10)].map((_, i) => (
      <ellipse
        key={i}
        cx={30 + i * 12}
        cy={100}
        rx={12}
        ry={35}
        stroke="#C084FC"
        strokeWidth="2"
        fill="none"
      />
    ))}
  </svg>



  {/* Sparkles */}
  <div className="absolute left-[19%] top-[40%] text-white text-5xl z-20">✦</div>
  <div className="absolute left-[39%] top-[25%] text-red-400 text-2xl z-20">✦</div>
  <div className="absolute left-[25%] top-[75%] text-white text-sm z-20">✦</div>

  {/* Central content container */}
  <div className="relative z-30 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
    {/* Silhouette Image */}
    <img
      src="/3 (5).png"
      alt="Silhouette"
      className="w-[231.83px] h-[359.94px]  md:mb-0 ml-[247.8px]"
    />

    {/* Right content */}
    <div className="text-center md:text-left max-w-xl">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">LOOKING FOR LEADS?</h2>
      <h3 className="text-lg md:text-xl font-semibold mb-2">Grow your business with<br />The Builder Network</h3>
      <p className="text-sm md:text-base mb-6 text-white/90">
        The Builder Network is the reliable way to get more of the work you want.
        Sign up for free to receive a steady stream of local job opportunities that match your skills.
        Take on big jobs or smaller gap fillers – it’s up to you.
      </p>

      <button className="bg-white text-[#0047A3] text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center shadow-md hover:opacity-90 transition">
        <span className="mr-2">TRADESPEOPLE<br />JOIN FOR FREE</span>
        <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center ml-2">
          <span className="text-xs -rotate-45">→</span>
        </div>
      </button>
    </div>
  </div>
</section>











{/* Download our app Section */}
<section className="relative z-10">
  <div className="bg-black text-white pt-16 pb-0 px-6 md:px-20 relative z-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative">
      
      {/* Text Content */}
      <div className="md:w-1/2 ml-[14%] z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Download our app</h2>
        <p className="mb-6 text-sm md:text-base">
          Posting and managing your jobs is even easier with the Builder Network app.
          Add photos and information in an instant and keep things moving with
          notifications and chat, allowing you to message tradespeople wherever you are.
          Once the job's done, leave a rating and review straight from your phone.
        </p>
       {/* App store buttons */}
          <div className="flex gap-2 mb-4 -ml-5">
            <img
              src="/google-play.svg"
              alt="Get it on Google Play"
              className="h-12"
            />
            <img
              src="/app-store.svg"
              alt="Download on the App Store"
              className="h-12"
            />
          </div>
        <p className="text-sm">
          Looking for our trades' person app?{" "}
          <a href="#" className="underline text-white">Find it here</a>
        </p>
      </div>

      {/* Phone Image */}
      <div className="md:w-1/2 relative -mt-32 z-20"> {/* Negative top margin lifts it above */}
        <img src="/phone.png" alt="App screenshot" className="w-full max-w-xs mx-auto" />
      </div>
    </div>
  </div>
</section>






       <section className="relative bg-[#f4fbf8] py-16 px-6 md:px-16 overflow-hidden">
  {/* Decorative blobs */}
  <img
    src="/image1.png"
    alt="Top-right blob"
    className="absolute top-0 right-0 w-72 md:w-[300px] rotate-45 z-0 opacity-40"
  />
  <img
    src="/image1.png"
    alt="Bottom-left blob"
    className="absolute bottom-0 left-0 w-72 md:w-[300px] -rotate-45 z-0 opacity-40"
  />

  <div className="relative flex items-center  z-10 gap-6">
    {/* Silhouette Image */}
    <div className="hidden md:block w-[404px] h-[525px] shrink-0 -mb-17 z-17 ml-[10%]">
      <img
        src="/3 (1).png"
        alt="Silhouette"
        className="object-contain w-full h-auto"
      />
    </div>

    {/* Scrollable Cards Section */}
    <div className="flex items-start gap-6 overflow-x-auto w-full pb-4 scrollbar-hide">
      {/* Card base style */}
      {/* Blue Box */}
      <div className="bg-[#0066ff] text-white rounded-lg p-6 w-[280px] h-[320px] shrink-0 flex flex-col justify-between shadow-md">
        <div>
          <h2 className="text-lg font-bold mb-2 leading-snug">
            Millions of genuine <br /> reviews
          </h2>
          <p className="text-sm">
            Reviews on The Builder Network are written <br /> by customers like you
          </p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm mt-4">
          Post your job
        </button>
      </div>

      {/* Review Card 1 */}
      <div className="bg-white rounded-lg p-6 w-[280px] h-[320px] shrink-0 flex flex-col justify-between border border-gray-200 shadow">
        <div>
          <h3 className="font-semibold text-black mb-2">Supply and fit 2 fence panels</h3>
          <div className="flex text-blue-500 mb-2">
            {Array(5).fill(0).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            “Oscar replaced two fence panels that had been blown off by the wind. He is a very nice guy and got the job don…”
          </p>
        </div>
        <p className="font-bold text-sm text-gray-800">AFFINITY DECKING LTD</p>
      </div>

      {/* Review Card 2 */}
      <div className="bg-white rounded-lg p-6 w-[280px] h-[320px] shrink-0 flex flex-col justify-between border border-gray-200 shadow">
        <div>
          <h3 className="font-semibold text-black mb-2">coffee table and clothes rack</h3>
          <div className="flex text-blue-500 mb-2">
            {Array(5).fill(0).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            “He did a great job fixing my table! He was very professional, friendly, and helpful. Highly recommend his serve…”
          </p>
        </div>
        <p className="font-bold text-sm text-gray-800">CB General Builders</p>
      </div>

      {/* Review Card 3 */}
      <div className="bg-white rounded-lg p-6 w-[280px] h-[320px] shrink-0 flex flex-col justify-between border border-gray-200 shadow">
        <div>
          <h3 className="font-semibold text-black mb-2">Display units in a commercial premises</h3>
          <div className="flex text-blue-500 mb-2">
            {Array(4).fill(0).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            “Overall the team did an Okay job on the cabinet. There was a delay – which arguably was partly my fault for the …”
          </p>
        </div>
        <p className="font-bold text-sm text-gray-800">FOXY FURNITURE LTD</p>
      </div>
    </div>
  </div>
</section>


       {/*JobBanner*/}
       <JobBanner />
      {/* Footer */}
      <Footer />
    </div>
  );
}
