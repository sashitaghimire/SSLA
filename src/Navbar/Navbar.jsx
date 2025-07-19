import { useEffect, useState } from "react";
import logo from "../assets/ssla_logo_transparent.png";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpenForm, setIsOpenForm] = useState(false);
  const navigate = useNavigate();

  // Define navigation items
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/staff", label: "Staff" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const scrollToSection = (href) => {
    const element = document.getElementById(href);
    if (element) {
      const navHeight = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setActiveSection(href);
    setIsOpen(false);
  };
  // Handle scroll event to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.href)
      );
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reusable button component
  const NavButton = ({ item, isMobile = false }) => (
    <button
      onClick={() => navigate(item.href)}
      className={`
        text-brand-text-color px-3 py-2 rounded-md font-medium  font-rethink
        ${
          isMobile
            ? "block text-base w-full text-left"
            : "text-base lg:text-base md:text-sm"
        }
        ${
          activeSection === item.href
            ? "text-[#995524]"
            : "hover:text-[#995524]"
        }
      `}
    >
      {item.label}
    </button>
  );
  return (
    <nav className="fixed bg-[#DD765B] top-0 left-0 right-0 z-50 pt-1">
      <div className="">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "50px", width: "50px", marginLeft: "30px" }}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 md:text-sm mr-2">
            {navItems.map((item) => (
              <NavButton key={item?.label} item={item} />
            ))}
            <button
              className="bg-[#E84B23] text-white px-6 py-2 rounded-lg"
              onClick={() => setIsOpenForm(true)}
            >
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <svg
                  fill="#524342"
                  width="80px"
                  height="80px"
                  className="w-7 h-7"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <NavButton key={item?.label} item={item} isMobile={true} />
              ))}
            </div>
          </div>
        )}
      </div>

      {isOpenForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full h-[90vh] max-w-5xl relative">
            <div className="flex row justify-between align-center">
              <h2 className="text-xl font-semibold mb-4">Sample Form</h2>
              <button className="mb-5" onClick={() => setIsOpenForm(false)}>
                <X />
              </button>
            </div>
            <iframe
              style={{ height: "85%", width: "100%" }}
              src="https://docs.google.com/forms/d/e/1FAIpQLSfAr-SMbxpozJP7MMukcTTdxUFXnm2_nG7mATloneC4gzoABA/viewform"
            />
            <button
              className="text- mt-5 hover:text-blue-800"
              onClick={() =>
                window.open(
                  "https://docs.google.com/spreadsheets/d/1KInaDmRnnYWe0YT9pnu_gJ_93H2cX8xKurcjFXLVEQg/edit?resourcekey=&gid=1658396389#gid=1658396389",
                  "_blank"
                )
              }
            >
              Click here to view responses
            </button>
            {/* <div className="flex justify-end mt-2">
              <button
                onClick={() => setIsOpenForm(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
