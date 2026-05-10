import { useState } from "react";
import { Link, NavLink } from "react-router";
import { BiSupport } from "react-icons/bi";
import { MdOutlineHandshake } from "react-icons/md";
import { PiChartLineUpBold } from "react-icons/pi";

function Main() {
  const slides = [
    <div>
      <p className="text-[1.4em] font-semibold uppercase">Testimonials</p><br />
      <p className="text-[1.3em] text-[#e5242a] font-semibold mb-1">"Great Experience!!!"</p>
      <p className="text-[1em] text-[#56585b] italic">"Nick was my sales Rep and from the minute I ordered the computer to the time it went out in shipping I got updated on every process, step-by-step. Polite, knowledgeable, and of course the best...</p>
    </div>,
    <div>
      <p className="text-[1.4em] font-semibold uppercase">Testimonials</p><br />
      <p className="text-[1.3em] text-[#e5242a] font-semibold mb-1">"Amazing new PC ordering experience!"</p>
      <p className="text-[1em] text-[#56585b] italic">"After months of research, and being let down with support/responses from at least 5 other system integrators, I have finally landed here at TechForge PC, and let me tell you I am so very glad I ...</p>
    </div>,
    <div>
      <p className="text-[1.4em] font-semibold uppercase">Testimonials</p><br />
      <p className="text-[1.3em] text-[#e5242a] font-semibold mb-1">"Amazing service and PC quality"</p>
      <p className="text-[1em] text-[#56585b] italic">"I ordered the 7000x with a hardline custom loop. My sales rep was Arturo, super cool and nice. He had a lot of product knowledge, as well as keeping me updated through the entire process. The...</p>
    </div>,
    <div>
      <p className="text-[1.4em] font-semibold uppercase">Testimonials</p><br />
      <p className="text-[1.3em] text-[#e5242a] font-semibold mb-1">"Amazing Experience Overall. "</p>
      <p className="text-[1em] text-[#56585b] italic">"My experience with TechForge Pc has left me extremely satisfied with my purchase, speedy and truly HELPFUL customer support, amazing communication from their team throughout the whole process, quick...</p>
    </div>,
    <div>
      <p className="text-[1.4em] font-semibold uppercase">Testimonials</p><br />
      <p className="text-[1.3em] text-[#e5242a] font-semibold mb-1">"Great Service with the ultimate PC experience "</p>
      <p className="text-[1em] text-[#56585b] italic">"TechForgePC has truly provided the best service and an amazing custom pc built with care and extreme professionalism."</p>
    </div>,
  ];
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="min-h-screen flex-1 flex flex-col">
        <div className="flex justify-center bg-[#da1a25] text-[#fff] py-5 font-semibold text-center">
          <p>While Others Raise Prices, We’re Cutting Them. Check it out now!</p>
        </div>
        <div className="flex flex-wrap justify-center md:flex-row bg-[#1e1f24] py-[3em] gap-5">
          <NavLink to="/catalog?category=gaming-pcs" className="flex flex-col items-center text-[#dfdfdf]">
            <img src="/assets/image/prebuilt-bar.webp" alt="Prebuild PC" className="w-[12em]"/>
            <span>Prebuilt Gaming PCs</span>
          </NavLink>
          <NavLink to="/catalog?category=gaming-laptops" className="flex flex-col items-center text-[#dfdfdf]">
            <img src="/assets/image/gaming-laptop-bar.webp" alt="Prebuild PC" className="w-[12em]"/>
            <span>Gaming Laptops</span>
          </NavLink>
          <NavLink to="/catalog?category=all-accessories" className="flex flex-col items-center text-[#dfdfdf]">
            <img src="/assets/image/accessories-bar.webp" alt="Prebuild PC" className="w-[12em]"/>
            <span>Accessories</span>
          </NavLink>
          <NavLink to="/catalog?category=monitors" className="flex flex-col items-center text-[#dfdfdf]">
            <img src="/assets/image/monitor-bar.png" alt="Prebuild PC" className="w-[8em]"/>
            <span>Monitors</span>
          </NavLink>
          <NavLink to="/catalog?category=all-components" className="flex flex-col items-center text-[#dfdfdf]">
            <img src="/assets/image/gpu-bar.png" alt="Prebuild PC" className="w-[8.5em]"/>
            <span>Components</span>
          </NavLink>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-[30em] bg-[url('/assets/image/featured-review-millennium-ign.jpg')] bg-cover bg-right flex flex-col justify-center lg:items-end p-10 md:rounded-b-xl">
            <div className="max-w-[500px]">
              <p className="text-[#8e9097] text-[1.3em] font-semibold uppercase tracking-tight">Featured Review</p>
              <p className="text-white text-[2em] font-bold">MILLENNIUM</p>
              <p className="text-[#ffbb33] text-[1.8em] font-semibold leading-tight">The Millennium Is a Monster of a Gaming PC</p>
              <p className="text-[#f1f2f3] text-[1.25em] italic my-3">"There aren’t really any games out there right now that you’d ever have to worry about compromising on image quality.” - IGN</p>
              <NavLink to="/catalog?category=gaming-pcs" className="flex flex-col items-center text-[#dfdfdf]"><button className="text-white text-[0.8em] font-semibold tracking-tight self-start border-2 border-white px-8 py-4 rounded-sm">SHOP NOW</button></NavLink>
            </div>
          </div>
          <div className="md:w-1/2 h-[30em] bg-white flex flex-col items-center lg:max-w-[500px] lg:items-start p-10">
            <div className="flex flex-col items-center h-full relative">
              <div className="flex items-center justify-center">
                {slides[current]}
              </div>
              <div className="flex space-x-2 absolute bottom-0 mb-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      current === index ? "bg-gray-800" : "bg-gray-400"
                    }`}
                    onClick={() => setCurrent(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative h-[5em]">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 150"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path fill="#e5242a"
                  d="M0,50 C360,150 1080,0 1440,50 L1440,150 L0,150 Z"/>
          </svg>
        </div>
        <div className="relative h-[25em] 2xl:h-[50em] w-full overflow-hidden">
          <img src="/assets/image/financing.jpg" 
              className="w-full h-full object-cover object-center" 
              alt="Financing"/>
          <div className="absolute inset-0 bg-black/50 2xl:hidden"></div>
          <div className="absolute inset-0 flex flex-col justify-center max-w-[1300px] m-auto px-[2em] py-[3em]">
            <p className="text-white font-bold uppercase text-[2em]">PLAY NOW, PAY LATER</p>
            <p className="text-gray-300 text-[1.3em] max-w-[500px] mb-2">
              Easy Pre-Approved Online Financing Available On All Systems For Qualifying Customers
            </p>
            <button className="text-white text-[0.8em] font-semibold tracking-tight self-start bg-red-600 px-5 py-3 rounded-sm hover:bg-red-700 transition">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row max-w-[1300px] m-auto gap-8 py-10 px-10">
          <div className="flex-1 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-8">
            <PiChartLineUpBold className="text-[3em] text-[#e5242a] mb-4" />
            <h3 className="font-bold text-[1.6em] mb-2">FINANCING</h3>
            <p className="text-lg mb-2 font-semibold">Play Now and Pay Later</p>
            <ul className="list-disc text-md md:text-sm xl:text-lg list-inside text-left mt-2 text-[#777]">
              <li>Easy to apply</li>
              <li>Get instant pre-approved offers and rates</li>
              <li>Three months same as cash available*</li>
              <li>No prepayment penalties</li>
              <li>Up to 36 months of payment options</li>
            </ul>
            <button className="border-2 border-black px-4 py-2 text-sm font-semibold mt-4">LEARN MORE</button>
          </div>
          <div className="flex-1 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:px-8">
            <MdOutlineHandshake className="text-[3em] text-[#e5242a] mb-4" />
            <h3 className="font-bold text-[1.6em] mb-2">AFFILIATES</h3>
            <p className="text-lg mb-2 font-semibold">Join the Best</p>
            <p className="text-[#777] max-w-[400px] text-md md:text-sm xl:text-lg">Partner up with the best custom PC system builder in the world and earn extra cash! Become An Official ORIGIN PC Affiliate Today!</p>
            <NavLink to="/contact-us"><button className="border-2 border-black px-4 py-2 text-sm font-semibold mt-4">JOIN</button></NavLink>
          </div>
          <div className="flex-1 flex flex-col items-center text-center md:pl-8">
            <BiSupport className="text-[3em] text-[#e5242a] mb-4" />
            <h3 className="font-bold text-[1.6em] mb-2">SUPPORT</h3>
            <p className="text-lg mb-2 font-semibold">US Based Support</p>
            <p className="text-[#777] max-w-[400px] text-md md:text-sm xl:text-lg">Once you join us, we will have you covered. With every system, ORIGIN PC provides a free phone and online lifetime service guarantee. Available from 6am - 8pm PST.</p>      
            <NavLink to="/contact-us"><button className="border-2 border-black px-4 py-2 text-sm font-semibold mt-4">LEARN MORE</button></NavLink>
          </div>
        </div>
        <div className="relative w-full h-[28em] md:h-[35em] bg-[url('/assets/image/main-bg.jpg')] bg-cover bg-left">
          <div className="absolute inset-0 bg-black/40 xl:hidden"></div>
          <div className="relative max-w-[1300px] m-auto h-full flex justify-center xl:justify-end items-center px-10">
            <div className="flex flex-col items-center text-center w-[500px] text-white">
              <img src="/assets/image/emblem.png" className="w-32"/>
              <p className="text-[1.5em] font-bold tracking-tight mt-4">ASSEMBLED AND SUPPORTED</p>
              <p className="text-[1.2em] font-semibold tracking-tight border-b-4 border-[#e5242a] w-[100px] mt-2">IN THE USA</p>
              <p className="tracking-tight text-[0.9em] font-semibold my-6">
                By buying a TECHFORGE PC, you get access to a fast and powerful PC as well as supporting jobs based in the United States.
              </p>
              <NavLink to="/about-us"><button className="text-white text-[0.8em] font-semibold tracking-tight bg-red-600 px-5 py-3 rounded-sm hover:bg-red-700 transition">
                LEARN MORE
              </button></NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center bg-[#fff] py-[6em]">
          <p className="font-bold text-[1.5em] uppercase">Industry Awards</p>
          <div className="flex flex-wrap justify-center gap-5">
            <img src="/assets/image/award1.webp" alt="Industry Award" />
            <img src="/assets/image/award2.webp" alt="Industry Award" />
            <img src="/assets/image/award3.webp" alt="Industry Award" />
            <img src="/assets/image/award4.png" alt="Industry Award" />
            <img src="/assets/image/award5.webp" alt="Industry Award" />
            <img src="/assets/image/award6.webp" alt="Industry Award" />
            <img src="/assets/image/award7.webp" alt="Industry Award" />
            <img src="/assets/image/award8.webp" alt="Industry Award" />
            <img src="/assets/image/award9.webp" alt="Industry Award" />
          </div>
        </div>
        <div className=" bg-[#1e1f24] px-12 py-10">
          <div className="max-w-[1300px] flex flex-col gap-5 m-auto">
            <p className="text-[#fff] font-bold uppercase text-xl">why buy from TechForge PC?</p>
            <p className="text-[#c6c7c9]">If you’re searching for the cheapest Gaming PC made with inferior products and questionable quality, you might as well leave now. TECHFORGE PC only uses the highest quality performance Gaming PC components available. Every single customized Gaming PC and Gaming Laptop is assembled right here in the United States by highly trained and incredibly skilled technicians and assembly engineers. Sure, we can assemble our award-winning Gaming PCs overseas for less. In fact, that’s what most of our competitors do. However, we choose to assemble all our Gaming PCs right here in the United States because it gives us the best control over manufacturing, performance, and overall quality. And we’re thrilled to hire only the best PC Builders in the country.</p>
            <NavLink to="/about-us"><button className="text-[#fff] text-[0.7em] font-semibold tracking-tight self-start bg-[#da1a25] px-4 py-2 rounded-sm">READ MORE</button></NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
