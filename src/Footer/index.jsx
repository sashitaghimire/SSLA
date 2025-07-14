import { Youtube, Instagram, Facebook, Twitter } from "lucide-react"
import { useState } from "react"
import logo from "../assets/ssla_logo_transparent.png"

export  function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    // Handle newsletter subscription
    setEmail("")
  }

  return (
    <footer className="bg-[#FF9763] text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {/* Logo Section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              
                <div className="text-center">
                 <img src={logo} alt="logo" style={{ height: "150px", width: "150px" }} />
                 
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#contact"
                    className="text-sm sm:text-base md:text-lg text-white hover:text-orange-100 transition-colors duration-200 block py-1"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-sm sm:text-base md:text-lg text-white hover:text-orange-100 transition-colors duration-200 block py-1"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Others */}
            <div className="col-span-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">Others</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#faqs"
                    className="text-sm sm:text-base md:text-lg text-white hover:text-orange-100 transition-colors duration-200 block py-1"
                  >
                    User FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm sm:text-base md:text-lg text-white hover:text-orange-100 transition-colors duration-200 block py-1"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#legal"
                    className="text-sm sm:text-base md:text-lg text-white hover:text-orange-100 transition-colors duration-200 block py-1"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="text-sm sm:text-base md:text-lg text-white hover:text-orange-100 transition-colors duration-200 block py-1"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-sm sm:text-base md:text-lg text-white hover:text-orange-100 transition-colors duration-200 block py-1"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
                  Subscribe to our newsletter and be the first to know about our updates
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 sm:h-12 px-4 text-sm sm:text-base bg-white bg-opacity-90 border-0 rounded-full placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white"></div>

      {/* Bottom Bar */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-1 sm:py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright/Stats */}
          <div className="flex items-center space-x-2">
           <p>© {new Date().getFullYear()} All rights reserved</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a
              href="#youtube"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E84B23] bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-[#E84B23]" />
            </a>
            <a
              href="#instagram"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E84B23] bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#E84B23]" />
            </a>
            <a
              href="#facebook"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E84B23] bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#E84B23]" />
            </a>
            <a
              href="#twitter"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E84B23] bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-[#E84B23]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
