import {
  FiMessageSquare,
  FiPhoneCall,
  FiSend,
  FiMapPin,
  FiChevronDown
} from 'react-icons/fi';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 flex flex-col font-sans px-4 md:px-8 lg:px-12">

      {/* Top Features Row */}
      <div className="border-b border-gray-200 w-full mb-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 py-5 lg:py-6">

          {/* Customer Service */}
          <div className="flex items-start gap-3 p-4 pl-0">
            <FiMessageSquare className="w-[18px] h-[18px] text-[#3b5d9c] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-gray-900 text-xs mb-1">Customer Service</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed">Mon-Sat, 9am-6pm EST.</p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-start gap-3 p-4 md:pl-6 lg:pl-8">
            <FiPhoneCall className="w-[18px] h-[18px] text-[#3b5d9c] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-gray-900 text-xs mb-1">Call Us</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed">+1 888-234-1234 (toll-free)</p>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="flex items-start gap-3 p-4 pl-0 lg:pl-8">
            <FiSend className="w-[18px] h-[18px] text-[#3b5d9c] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-gray-900 text-xs mb-1">Get in Touch</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed">touch@garacestore.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 p-4 md:pl-6 lg:pl-8">
            <FiMapPin className="w-[18px] h-[18px] text-[#3b5d9c] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-gray-900 text-xs mb-1">Address</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed">382 NE 191st St # 87394 Miami</p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Newsletter & Links */}
      <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 mb-8">

        {/* Newsletter Column */}
        <div className="w-full lg:w-[35%]">
          <h3 className="text-[20px] md:text-[22px] font-extrabold text-gray-900 mb-2 tracking-tight">Join Our Newsletter</h3>
          <p className="text-[12px] text-gray-600 mb-5 font-medium">Sign up to our newsletter & receive 10% off your first order.</p>

          <form className="flex gap-2 w-full mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#f6f6f6] text-gray-900 text-[12px] rounded-full px-5 py-3 outline-none focus:bg-[#f0f0f0] transition-colors shadow-sm"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-full text-[12px] font-bold hover:bg-gray-800 transition-colors shrink-0"
            >
              Sign Up
            </button>
          </form>

          <p className="text-[11px] text-gray-500 leading-[1.8] max-w-[90%] font-medium">
            By subscribing you agree to the <a href="#" className="underline hover:text-black">Terms of Services</a> and <a href="#" className="underline hover:text-black">Privacy Policy</a>.
          </p>
        </div>

        {/* Links Columns */}
        <div className="w-full lg:w-[55%] grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 lg:pl-10">
          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 text-[12px] mb-4">Company</h4>
            <ul className="space-y-3">
              {['About us', 'Contact', 'FAQs', 'Blog', 'Find a Store'].map((link) => (
                <li key={link}><a href="#" className="text-[12px] text-gray-500 font-medium hover:text-black transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Collection */}
          <div>
            <h4 className="font-bold text-gray-900 text-[12px] mb-4">Collection</h4>
            <ul className="space-y-3">
              {['Tables', 'Bow Chairs', 'Turn Table', 'Turn Chair', 'Cross Bar Chair'].map((link) => (
                <li key={link}><a href="#" className="text-[12px] text-gray-500 font-medium hover:text-black transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-gray-900 text-[12px] mb-4">Shop</h4>
            <ul className="space-y-3">
              {['Sofas', 'Outdoor', 'Seating', 'Lighting', 'Accessories'].map((link) => (
                <li key={link}><a href="#" className="text-[12px] text-gray-500 font-medium hover:text-black transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1400px] w-full mx-auto pb-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-5 gap-5">

          {/* Currency Dropdown & Payments */}
          <div className="flex flex-col gap-4">
            <button className="flex items-center gap-2 text-[12px] font-bold hover:text-black text-gray-900 w-max">
              <span className="text-sm rounded-full overflow-hidden w-[20px] h-[20px] flex items-center justify-center bg-gray-100 border shadow-sm">
                <img src="https://flagcdn.com/w40/us.png" alt="US" className="w-full h-full object-cover" />
              </span>
              United States (USD $)
              <FiChevronDown className="w-3 h-3 ml-1 stroke-[3]" />
            </button>

            {/* Payment Icons */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-[22px] bg-white border border-gray-200 rounded flex items-center justify-center px-1 shadow-sm"><span className="text-[8px] font-bold text-blue-900">VISA</span></div>
              <div className="w-9 h-[22px] bg-white border border-gray-200 rounded flex items-center justify-center p-0.5 shadow-sm"><div className="flex -space-x-1"><div className="w-2.5 h-2.5 rounded-full bg-red-500/90 mix-blend-multiply"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/90 mix-blend-multiply"></div></div></div>
              <div className="w-9 h-[22px] bg-white border border-gray-200 rounded flex items-center justify-center px-1 shadow-sm"><span className="text-[7px] font-bold text-blue-600">AMEX</span></div>
              <div className="w-9 h-[22px] bg-white border border-gray-200 rounded flex items-center justify-center px-1 shadow-sm"><span className="text-[8px] font-bold text-blue-800 italic pr-0.5">Pay</span><span className="text-[8px] font-bold text-[#009cde] italic">Pal</span></div>
              <div className="w-9 h-[22px] bg-white border border-gray-200 rounded flex items-center justify-center px-1 shadow-sm"><span className="text-[7px] font-bold text-gray-800">Diners</span></div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a href="#" className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-900 hover:border-black transition-colors">
              <FaFacebook className="w-[15px] h-[15px]" />
            </a>
            <a href="#" className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-900 hover:border-black transition-colors">
              <FaXTwitter className="w-[15px] h-[15px]" />
            </a>
            <a href="#" className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-900 hover:border-black transition-colors">
              <FaInstagram className="w-[15px] h-[15px]" />
            </a>
            <a href="#" className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-900 hover:border-black transition-colors">
              <FaTiktok className="w-[14px] h-[14px]" />
            </a>
            <a href="#" className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-900 hover:border-black transition-colors">
              <FaYoutube className="w-[16px] h-[16px]" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[11px] font-medium text-gray-900 gap-3 border-t border-gray-100 pt-4">
          <p className="flex items-center gap-1.5"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M14.83 14.83a4 4 0 1 1 0-5.66" /></svg> 2026 Hyper Garace. Powered by Shopify</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
