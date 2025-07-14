import header_image from "../assets/header_image.png";

const Header = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-14 pb-0">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <img 
            src={header_image} 
            alt="logo" 
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
          />
        </div>
        <div className="flex flex-col text-center lg:text-left w-full lg:w-1/2 order-2 lg:order-1">
          <div className="text-[#61655F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4"> Enroll Now for
School Year Aug. 2012 - May 2013 </div>
          
          <div className="text-brand-gray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-itim mb-4 sm:mb-6 md:mb-8">Classes are held every Sunday from 9:30am to 12:30pm at
          </div>
          <div className="text-brand-gray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-itim mb-4 sm:mb-6 md:mb-8">KHALSA CARE FOUNDATION
9989 Laurel Canyon Blvd., Pacoima, CA 91331</div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className="bg-[#E84B23] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg text-sm sm:text-base md:text-lg hover:bg-[#d13d1a] transition-colors duration-300">About Us</button>
            <button className="bg-[#E84B23] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg text-sm sm:text-base md:text-lg hover:bg-[#d13d1a] transition-colors duration-300">Contact Us</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
