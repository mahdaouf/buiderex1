import Image from "next/image";
import JobBanners from "@/components/JobBanners";
import Footers from "@/components/Footers";
import ServiceCarousel from '@/components/ServiceCarousel';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">


      {/* Header */}
      <header className="flex justify-between items-center bg-white px-6 py-1">
        <div className="text-white font-bold text-xl">
      <Image src="/logo.png" alt="The Builder Network Logo" width={120} height={48} className="ml-8 h-12 w-auto" />

    </div>
        <nav className="flex items-center space-x-2 text-[#000000] text-sm">
  <a href="/homepage" className="py-2 px-4 rounded-full bg-white text-[#000000] text-left hover:bg-[#1646D2] hover:text-white transition-colors">
  Post a job
</a>

<a href="/login" className="py-2 px-4 rounded-full bg-white text-[#000000] text-left hover:bg-[#1646D2] hover:text-white transition-colors">
  Log in
</a>

<button className="bg-white text-[#000000] text-left py-2 px-4 rounded-full hover:bg-[#1646D2] hover:text-white transition-colors"><a href="/signuptrades">
  SIGN UP AS A TRADES&apos; PERSON</a>
</button>

        </nav>
      </header>
        <section>
      {/* Hero Section */}
     <div style={{ backgroundImage: 'url(banner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

{/* Main Hero Content */}
<div className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 pt-40 pb-32 relative z-10">

  {/* Left Side */}
  <div className="max-w-lg text-white space-y-8 text-center"> {/* Added text-center here */}
    <div className="space-y-2">
      <p className="text-[16px] tracking-widest uppercase font-normal">THE RELIABLE WAY TO HIRE A</p>
      <h1 className="text-[42px] font-kollektif md:text-6xl font-bold ">Trades Person</h1>
    </div>

    {/* Search Box */}
<div className="mt-20 w-full flex justify-center">
  <div className="w-full max-w-md"> {/* This div acts as a container to limit width */}
    <p className="text-2xl mb-8 text-white text-center  font-semibold">What Is Your Job?</p> {/* Added text-white and text-center */}
    <input
      type="text"
      placeholder="For example: painting" // Updated placeholder text case
      className="p-3  rounded-full bg-[#1646D2] text-white text-base text-center
                  placeholder-white placeholder-opacity-75
                  focus:outline-none focus:ring-2 focus:ring-white" // Styling for the input
    />
  </div>
</div>
    
  </div>


</div>
    
<div className="flex flex-col bg-white text-black items-center px-4 py-2 rounded-lg shadow-md w-fit space-y-1 mt-4 mb-4 ml-10">
      {/* Top Line: Text */}
      <div className="flex items-center space-x-1 text-sm font-medium">
        <span>Excellent</span>
        <span className=" px-1 text-green-500 text-x font-bold">★</span>
        <span>Trustpilot</span>
      </div>

      <svg width="121" height="30" viewBox="0 0 101 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0585938 19.3012H18.5206V0.859863H0.0585938V19.3012Z" fill="#00B67A"/>
<path d="M15.7987 8.70564L5.32729 16.304L6.85528 11.6079L2.85547 8.70564H7.79944L9.3271 4.00928L10.8548 8.70564H15.7987ZM9.32748 13.402L12.1873 12.8011L13.3267 16.304L9.32748 13.402Z" fill="#000000"/>
<path d="M20.4609 19.3012H38.923V0.859863H20.4609V19.3012Z" fill="#00B67A"/>
<path d="M20.4609 19.3012H29.6919V0.859863H20.4609V19.3012Z" fill="#00B67A"/>
<path d="M29.9125 13.3308L32.3648 12.8014L33.499 16.3838L29.6533 13.5168L25.6576 16.3838L27.2084 11.6707L23.1484 8.75785H28.1667L29.7169 4.04443L31.2677 8.75785H36.2857L29.9125 13.3308Z" fill="#000000"/>
<path d="M40.875 19.3012H59.337V0.859863H40.875V19.3012Z" fill="#00B67A"/>
<path d="M40.875 19.3012H50.106V0.859863H40.875V19.3012Z" fill="#00B67A"/>
<path d="M56.6151 8.70564L46.1437 16.304L47.6717 11.6079L43.6719 8.70564H48.6158L50.1435 4.00928L51.6712 8.70564L56.6151 8.70564ZM50.1439 13.402L53.0037 12.8011L54.1431 16.304L50.1439 13.402Z" fill="#000000"/>
<path d="M61.293 19.3012H79.755V0.859863H61.293V19.3012Z" fill="#00B67A"/>
<path d="M61.293 19.3012H70.524V0.859863H61.293V19.3012Z" fill="#00B67A"/>
<path d="M77.0292 8.70564L66.5581 16.304L68.0857 11.6079L64.0859 8.70564H69.0299L70.5576 4.00928L72.0852 8.70564L77.0292 8.70564ZM70.558 13.402L73.4177 12.8011L74.5571 16.304L70.558 13.402Z" fill="#000000"/>
<path d="M81.6953 19.3012H100.157V0.859863H81.6953V19.3012Z" fill="#DCDCE6"/>
<path d="M81.6953 19.3012H90.9263V0.859863H81.6953V19.3012Z" fill="#00B67A"/>
<path d="M97.4315 8.70564L86.9604 16.304L88.4881 11.6079L84.4883 8.70564H89.4322L90.9599 4.00928L92.4876 8.70564H97.4315ZM90.9603 13.402L93.8201 12.8011L94.9595 16.304L90.9603 13.402Z" fill="#000000"/>
</svg>
    </div>


     {/* Stats Section with matching style */}
  <div className="rounded-tr-2xl  bg-[#1646D2] py-10 text-white flex justify-around text-center mr-[60%] relative">
    <div className=" mx-auto flex flex-col md:flex-row justify-around text-center gap-20 mb-11">
      <div>
        <h2 className="text-3xl font-bold">232,870</h2>
        <p className="text-[16px]">tradespeople</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold">40+</h2>
        <p className="text-[16px]">trade categories</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold">2,509,604</h2>
        <p className="text-[16px]">reviews</p>
      </div>
    </div>
  </div>

  {/* Bottom Image Transition (4h.png) */}
  <Image src="/4h.png" alt="Bottom Image" width={1920} height={80} className="w-full h-[80px] z-10 relative -mt-20" />
</div>
</section>



<div className="bg-[#F7F7F7] px-20 py-20 flex items-center justify-between"></div>

<section className="relative w-full min-h-screen">
  {/* Background image with custom shape overlay */}
  <div className="absolute inset-0 -z-10">
          <Image
            src='/b311.jpg'
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
   <Image src="/4h2.png" alt="Bottom Image" width={1920} height={130} className="w-full h-[130px] z-10 relative -mb-20" />
  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-start gap-10 mt-18">
    {/* Left Side - Text + Cards */}
    <div className="flex-1 text-white">
      <h2 className="text-4xl font-bold mb-4">
        Why The Builder Network is  <br />
        <span className="text-white">the Reliable Way</span>
      </h2>
      <p className="text-[13px] mb-10 max-w-lg">
        Hiring a tradesperson when you need one isn’t always easy. The Builder Network simplifies
        the process, giving you confidence and control every step of the way.
      </p>
     <div className="max-w-[682px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[320px]">
            {[
              {
                title: 'Find Skilled Tradespeople',
                desc: 'Post your job for free and connect with professionals who have the right skills for the task. Only those interested will respond — you choose who to engage.',
                icon: '/1.png',
              },
              {
                title: 'Genuine Customer Reviews',
                desc: 'Read real reviews from previous \n customers to help you make informed \n hiring decisions with confidence.',
                icon: '/2.png',
              },
              {
                title: 'Full Control at Every Step',
                desc: 'Browse profiles, work history, and ratings before you chat. Only the tradespeople \nyou select can contact you.\n \n',
                icon: '/3.png',
              },
              {
                title: 'A Hassle-Free Experience',
                desc: 'No cold calls, no pressure. Just an easy-to-use platform that lets you manage the \n process on your terms — from start to finish.',
                icon: '/4.png',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-[#74787C] p-5 rounded-xl shadow flex items-start space-x-2"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={62}
                  height={92}
                  className="-ml-2 -mt-5"
                />
                <div>
                  <h3 className="font-semibold text-[13px] h-[10px] text-[#000000] mb-4">{item.title}</h3>
                  <p className="text-[11px] whitespace-pre-line">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
    </div>
  </div>
  <div className="bg-[#1646D2] text-white py-6 px-6 flex flex-col sm:flex-row items-center justify-between">
        <h3 className="text-3xl font-semibold mb-3 sm:mb-0 ml-30">
          Ready to hire a trades&apos; person?
        </h3>
        <button className="bg-white text-[#000000] font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition mr-50">
          Post your job
        </button>
      </div>
</section>





<div className="bg-[#FFFFFF] min-h-screen">
  <ServiceCarousel />
</div>



   <>
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          .scroll-left {
            animation: scroll-left 60s linear infinite;
          }
        `}
      </style>

      <div className="bg-[#0047FF] w-full overflow-hidden py-2">
        <div className="flex whitespace-nowrap scroll-left">
          <Image
            src="/unnamed.png"
            alt="Scrolling Text"
            width={1600}
            height={60}
          
          />
          <Image
            src="/unnamed.png"
            alt="Scrolling Text Duplicate"
            width={1600}
            height={60}
            
          />
        </div>
      </div>
    </>






<section className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src='/bghome.jpg'
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 ml-25 flex flex-col md:flex-row items-center justify-between gap-2 ">
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left">
          <span className="text-sm p-1 text-[#FFFFFF] bg-[#1646D2] uppercase tracking-wide">
            Looking for more work?
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Grow Your Trade<br />
            Business with The<br />
            Builder Network
          </h1>
          <p className="text-gray-600 mb-6">
            Join a trusted platform built to help tradespeople like you win more jobs.
            Sign up for free and get matched with local opportunities that suit your skills and schedule.
            Whether you&apos;re after big projects or quick fillers — the choice is yours.
          </p>
          <button className="bg-[#1646D2] text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition">
            Tradespeople — Join for Free
          </button>
        </div>

        {/* Image Section */}
        <div className="relative mr-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/main-worker.jpg" // replace with actual image or same `BgImage` if required
              alt="Main worker"
              width={300}
              height={400}
              className="rounded-xl w-[504px] h-[500px]"
            />
          </div>
          <div className="absolute bottom-12 -left-4 w-[177px] h-[186px] rounded-xl overflow-hidden border-4 border-white shadow-md">
            <Image
              src="/small-worker.jpg" // replace with actual image
              alt="Small worker"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
       
    </section>
<div className="bg-[#F7F7F7] px-20 py-10 flex items-center justify-between"></div>






{/* Download our app Section */}
<section className="relative z-10">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image src="/bgphone.jpg" alt="Background" fill className="object-cover" />
  </div>

  {/* Foreground Content */}
  <div className=" text-white pb-0 px-6 md:px-20 relative z-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative">

      {/* Text Content */}
      <div className="md:w-1/2 z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Download our app</h2>
        <p className="mb-10 text-sm md:text-base">
          Posting and managing your jobs is even easier with the Builder Network app.
          Add photos and information in an instant and keep things moving with
          notifications and chat, allowing you to message tradespeople wherever you are.
          Once the job&apos;s done, leave a rating and review straight from your phone.
        </p>

        {/* App store buttons */}
        <div className="flex gap-1 mb-8 -ml-5 ">
          <Image src="/google-play.svg" alt="Get it on Google Play" width={135} height={40} className="h-12 w-auto" />
          <Image src="/app-store.svg" alt="Download on the App Store" width={135} height={40} className="h-12 w-auto" />

        </div>

        <p className="text-sm">
        Looking for our trades&apos;<br /> person app?
        <span className="inline-block ml-35">
         <a href="#" className="underline text-white">Find it here</a>
        </span>
        </p>

      </div>

      {/* Phone Image */}
      <div className="md:w-1/2 relative -mt-28 z-10">
        <Image src="/phone.png" alt="App screenshot" width={300} height={600} className="w-full max-w-xs mx-auto" />
      </div>
    </div>
  </div>
</section>






 <div className="bg-[#F7F7F7] py-31 px-4 sm:px-6 lg:px-8"> {/* Overall section background and padding */}
      <div className="max-w-7xl mx-auto"> {/* Max width for content and center it */}

        {/* Grid for the four cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[12%]">

          {/* Card 1: Millions of genuine reviews */}
          <div className="bg-[#1646D2] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between h-[350px] ml-8 mr-8"> {/* Fixed height for consistency */}
            <div className="ml-10">
              <h2 className="text-4xl font-bold mb-4">Millions of genuine reviews</h2>
              <p className="text-gray-200">Reviews on The Builder Network are<br/> written by customers like you</p>
            </div>
            <div className="mt-8 flex justify-end">
               <button className="bg-white text-[#0866FF] font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300 mr-18">
                 Post your job
               </button>
            </div>

          </div>

          {/* Card 2: Supply and fit 2 fence panels */}
          <div className="bg-[#1646D2] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between h-[350px] w-[590px]">
            <div className="ml-8 mr-8">
              <h3 className="text-4xl font-bold mb-2">Supply and fit<br/> 2 fence panels</h3>
              <div className="flex space-x-1 mb-4">
                {/* Star ratings - Using unicode stars for simplicity */}
                <span className="text-[#F19100]">&#11088;</span>
                <span className="text-[#F19100]">&#11088;</span>
                <span className="text-[#F19100]">&#11088;</span>
                <span className="text-[#F19100]">&#11088;</span>
                <span className="text-[#F19100]">&#11088;</span>
              </div>
              <p className="text-gray-200  text-sm ">
                &quot;Oscar replaced two fence panels that had been blown off by the <br/> wind. He is a very nice guy and got the job done...&quot;
              </p>
            </div>
            <p className="mt-4 text-sm font-semibold ml-8">AFFINITY DECKING LTD</p>
          </div>

          {/* Card 3: Display units in a commercial premises */}
          <div className="bg-[#1646D2] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between h-[350px] ml-8 mr-8">
            <div className="ml-8 mr-8">
              <h3 className="text-4xl font-bold mb-2">Display units in a commercial premises</h3>
              <div className="flex space-x-1 mb-4">
                {/* Star ratings */}
                <span className="text-[#FFBD00]">&#11088;</span>
                <span className="text-[#FFBD00]">&#11088;</span>
                <span className="text-[#FFBD00]">&#11088;</span>
                <span className="text-[#FFBD00]">&#11088;</span>
                <span className="text-[#FFBD00]">&#11088;</span> {/* One empty star */}
              </div>
              <p className="text-gray-200 text-sm">
                &quot;Overall the team did an okay job on the cabinet. There was a<br/> delay - which arguably was part my fault for the...&quot;
              </p>
            </div>
            <p className="mt-4 text-sm font-semibold ml-8">FOXY FURNITURE LTD</p>
          </div>

          {/* Card 4: Coffee table and clothes rack */}
          <div className="bg-[#1646D2] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between h-[350px] w-[590px]">
            <div className="ml-8 mr-8">
              <h3 className="text-4xl font-bold mb-2">Coffee table and <br/> clothes rack</h3>
              <div className="flex space-x-1 mb-4">
                {/* Star ratings */}
                <span className="text-[#FFBD00]">&#11088;</span>
                <span className="text-[#FFBD00]">&#11088;</span>
                <span className="text-[#FFBD00]">&#11088;</span>
                <span className="text-[#FFBD00]">&#11088;</span>
                <span className="text-[#FFBD00]">&#11088;</span>
              </div>
              <p className="text-gray-200 text-sm">
                &quot;He did a great job fixing my table! He was very professional, <br/> friendly, and helpful. Highly recommend his serve...&quot;
              </p>
            </div>
            <p className="mt-4 text-sm font-semibold ml-8">CB General Builders</p>
          </div>

        </div>
      </div>
    </div>









       {/*JobBanner1*/}
       <JobBanners />
      {/* Footer1 */}
      
      <Footers />
    </div>
  );
}
