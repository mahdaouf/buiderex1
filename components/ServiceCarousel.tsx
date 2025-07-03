'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const slides = [
  {
    title: 'Painting & Decorating',
    description:
      'Ready to refresh your space with a new look? Our expert guides help you explore ideas, estimate costs, and find the right professionals to bring your vision to life.',
    image: '/c1.png',
  },
  {
    title: 'Plumbing',
    description:
      'Wondering what plumbing services cost or what’s involved? Our comprehensive guides break it all down — from pricing to what to expect — so you can plan with confidence.',
    image: '/c2.png',
  },
  {
    title: 'Gardening & Landscaping',
    description:
      'Dreaming of a garden that soothes and inspires? Our detailed guides cover design tips, costs, and how to find the best landscapers for the job.',
    image: '/c3.jpg',
  },
];

export default function ServiceCarousel() {
  return (
    <section className="py-16 bg-white w-full overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-[6%]">
      <div className="inline-block mb-4 px-3 py-1 bg-[#1646D2] text-white text-xs font-semibold tracking-wider">
        POPULAR TRADES
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug -mb-12">
        Discover Trusted Services for <br className="hidden md:inline" />
        Every Home Project
      </h1>
    </div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={8000}
        slidesPerView="auto"
        spaceBetween={30}
        grabCursor={false}
        allowTouchMove={false}
        className="w-full"
      >
        {[...slides, ...slides, ...slides].map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!w-[500px] flex-shrink-0"
          >
            <div
              className="relative h-[500px] overflow-hidden rounded-2xl -skew-x-6 shadow-lg"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-6 left-6 right-6 p-10">
                <div className="bg-[#FFFFFF] h-[300px] p-5">
                  <h3 className="text-xl font-bold text-gray-900 mt-15">{slide.title}</h3>
                  <p className="text-base text-gray-700 mb-2">{slide.description}</p>
                  <button className="bg-[#1646D2] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
