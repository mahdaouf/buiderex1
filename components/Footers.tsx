import React from 'react';

const Footers = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-black text-white px-6 md:px-24 pt-12 pb-8 text-sm font-sans">
  {/* Navigation Section */}
  <div className="max-w-7xl mx-auto  pb-10 ml-[13%]">
    <div className="text-white font-bold text-xl">
      <img
        src='/builder-name.png'
        alt="The Builder Network Logo"
        className="h-12 mb-8" // Tailwind CSS classes for the image itself
      />
    </div>
  
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-xs text-white">
      <ul className="space-y-1.5">
        <li><a href="#" className="underline">Post a job</a></li>
        <li><a href="#" className="underline">How it works</a></li>
        <li><a href="#" className="underline">Find trades</a></li>
        <li><a href="#" className="underline">Customer helpdesk</a></li>
        <li><a href="#" className="underline">Ask a trades'<br/> person</a></li>
      </ul>
      <ul className="space-y-1.5">
        <li><a href="#" className="underline">Register as trades<br/>person</a></li>
        <li><a href="#" className="underline">Quality requirements</a></li>
        <li><a href="#" className="underline">Reviews policy</a></li>
        <li><a href="#" className="underline">Tradespeople helpdesk</a></li>
      </ul>
      <ul className="space-y-1.5">
        <li><a href="#" className="underline">About us</a></li>
        <li><a href="#" className="underline">Press and media</a></li>
        <li><a href="#" className="underline">Vacancies</a></li>
        <li><a href="#" className="underline">Become a partner</a></li>
      </ul>
      <ul className="space-y-1.5">
        <li><a href="#" className="underline">Trades</a></li>
        <li><a href="#" className="underline">Services</a></li>
        <li><a href="#" className="underline">Cities</a></li>
        <li><a href="#" className="underline">Pricing guides</a></li>
      </ul>
    </div>
  </div>

  {/* Trustpilot + Store Badges */}
  <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center gap-4 ml-[13%] mr-[10%]">
    {/* Left: Social & Trustpilot */}
    <div className="flex flex-wrap items-center gap-3">
      {/* Icons */}
      <a href="#"><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1.35986" width="35" height="35" rx="17.5" fill="#F1FAEE"/>
<rect x="1" y="1.35986" width="35" height="35" rx="17.5" stroke="#DFDFE4"/>
<path d="M16 20.213V26.8599H19.625V20.213H22.3281L22.8906 17.1567H19.625V16.0755C19.625 14.4599 20.2594 13.8411 21.8969 13.8411C22.4062 13.8411 22.8156 13.8536 23.0531 13.8786V11.1067C22.6063 10.9849 21.5125 10.8599 20.8812 10.8599C17.5406 10.8599 16 12.438 16 15.8411V17.1567H13.9375V20.213H16Z" fill="#262627"/>
</svg>
</a>
      <a href="#"><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1.35986" width="35" height="35" rx="17.5" fill="#F1FAEE"/>
<rect x="1" y="1.35986" width="35" height="35" rx="17.5" stroke="#DFDFE4"/>
<path d="M25.7675 15.1953C25.593 14.5384 25.0789 14.021 24.4262 13.8454C23.2432 13.5264 18.4993 13.5264 18.4993 13.5264C18.4993 13.5264 13.7554 13.5264 12.5723 13.8454C11.9196 14.021 11.4055 14.5384 11.2311 15.1953C10.9141 16.3861 10.9141 18.8705 10.9141 18.8705C10.9141 18.8705 10.9141 21.3549 11.2311 22.5456C11.4055 23.2026 11.9196 23.6984 12.5723 23.874C13.7554 24.193 18.4993 24.193 18.4993 24.193C18.4993 24.193 23.2431 24.193 24.4262 23.874C25.0789 23.6984 25.593 23.2026 25.7675 22.5456C26.0845 21.3549 26.0845 18.8705 26.0845 18.8705C26.0845 18.8705 26.0845 16.3861 25.7675 15.1953ZM16.9477 21.1261V16.6148L20.9127 18.8705L16.9477 21.1261Z" fill="#262627"/>
</svg>
</a>
      <a href="#"><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1.35986" width="35" height="35" rx="17.5" fill="#F1FAEE"/>
<rect x="1" y="1.35986" width="35" height="35" rx="17.5" stroke="#DFDFE4"/>
<path d="M22.6609 12.3599H24.8672L20.0484 17.8661L25.7172 25.3599H21.2797L17.8016 20.8161L13.8266 25.3599H11.6172L16.7703 19.4692L11.3359 12.3599H15.8859L19.0266 16.513L22.6609 12.3599ZM21.8859 24.0411H23.1078L15.2203 13.6099H13.9078L21.8859 24.0411Z" fill="#262627"/>
</svg>
</a>
     
    </div>

    {/* Right: App Store Badges */}
    <div className="flex items-center gap-1">
      <a href=""><img src="/app-store.svg" alt="App Store" className="h-10" /></a>
      <a href=""><img src="/google-play.svg" alt="Google Play" className="h-10" /></a>
    </div>
  </div>

  {/* Bottom Links */}
  <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-white text-xs ml-[13%] mr-[10%]">
    <div className="space-x-4 mb-2 md:mb-0">
      <a href="#" className="underline">Privacy</a>
      <a href="#" className="underline">Cookie policy</a>
      <a href="#" className="underline">Cookie settings</a>
      <a href="#" className="underline">Terms and conditions</a>
    </div>
    <div>© 2008–2025 The Builder <br/> Network Limited</div>
  </div>
</footer>

      {/* Blue Panel */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white px-10 md:px-52 py-20 text-xs">

        {/* Find tradespeople */}
        <div className="mb-24">
          <h3 className="font-semibold mb-8 text-sm md:text-base ml-[5%]">Find tradespeople in your area</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-5 ml-[5%]">
            {[
              "London", "Manchester", "Glasgow", "Bristol", "Birmingham",
              "Nottingham", "Leeds", "Liverpool", "Sheffield", "Edinburgh",
              "Cardiff", "Leicester", "Stockport", "Newcastle Upon Tyne",
              "Milton Keynes", "Northampton", "Norwich", "Derby", "Reading",
              "Coventry", "Stoke On Trent", "Cambridge", "Southampton", "More cities +"
            ].map(city => (
              <a
                key={city}
                href="#"
                className="underline font-sans text-xs md:text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {city}
              </a>
            ))}
          </div>
        </div>

        {/* Our tradespeople */}
        <div>
          <h3 className="font-semibold mb-8 text-sm md:text-base ml-[5%]">Our tradespeople's professions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-5 ml-[5%]">
            {[
              "Handymen", "Painters and Decorators", "Builders", "Landscape Gardeners",
              "Carpenters", "Plasterers", "Tilers", "Flooring Fitters", "Fencers",
              "Bricklayers", "Bathroom Fitters", "Window Fitters", "Kitchen Fitters",
              "Fascias and Soffits Installers", "Gas Engineers", "Roofers",
              "Fireplace Installers", "More trades +"
            ].map(trade => (
              <a
                key={trade}
                href="#"
                className="underline font-sans text-xs md:text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {trade}
              </a>
            ))}
          </div>
        </div>

      </section>

      {/* Partner section */}
      <div className="bg-black text-white text-center text-[11px] py-4 px-6">
        Part of the Instar Group and Anti family <br />
        USA: <a href="#" className="underline">HomeAdvisor</a> & <a href="#" className="underline">Anti</a> & <a href="#" className="underline">Instar</a> &nbsp;
        Canada: <a href="#" className="underline">Homes</a> &nbsp;
        The Netherlands: <a href="#" className="underline">Workshop</a> &nbsp;
        France: <a href="#" className="underline">Travail</a> &nbsp;
        Germany: <a href="#" className="underline">Hammer</a> &nbsp;
        Austria: <a href="#" className="underline">Hammer</a> &nbsp;
        Italy: <a href="#" className="underline">Instar</a>
      </div>
    </>
  );
};

export default Footers;
