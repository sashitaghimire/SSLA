import { useState } from "react"
import { MapPin, Phone, Mail, Youtube, Instagram, Facebook, Twitter } from "lucide-react"
// import { Button } from "@/components/ui/button"


export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <section className="min-h-screen bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 inline-block relative">
            CONTACT
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-16 sm:w-20 md:w-24 h-[3px] sm:h-[4px] bg-orange-500"></span>
            <span className="absolute -bottom-1 sm:-bottom-2 left-20 sm:left-24 md:left-28 w-4 sm:w-6 md:w-8 h-[3px] sm:h-[4px] bg-orange-500"></span>
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
            {/* Left Side - Contact Form */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                Leave Us A Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-12 sm:h-14 px-4 sm:px-6 text-sm sm:text-base border-2 border-gray-200 rounded-full focus:border-orange-500 focus:ring-0 transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-12 sm:h-14 px-4 sm:px-6 text-sm sm:text-base border-2 border-gray-200 rounded-full focus:border-orange-500 focus:ring-0 transition-colors"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 sm:px-6 py-4 text-sm sm:text-base border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:ring-0 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 sm:h-14 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Right Side - Contact Information */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 bg-gray-50 lg:bg-white">
              <div className="space-y-6 sm:space-y-8 mb-8">
                {/* Address */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      9989 LAUREL CANYON BLVD,
                      <br />
                      PACOIMA, CA, 91331
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700">+NATASHA KAUR (630) 267-3480</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700">JOGINDER SINGH SIDHU (818) 266-4757</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700">hp@info.com</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.8924243198694!2d-118.43041231603763!3d34.25128853780565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29117189f92b9%3A0x4d5aed0149c92e5f!2s9989%20Laurel%20Canyon%20Blvd%2C%20Arleta%2C%20CA%2091331!5e0!3m2!1sen!2sus!4v1752461690064!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
