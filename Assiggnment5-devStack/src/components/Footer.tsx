import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-black text-base-content border-t border-base-200 mt-auto">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col items-center text-center md:text-left md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5 max-w-sm mb-8 md:mb-0">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="bg-gradient-to-tr from-purple-600 to-pink-500 text-white font-bold px-2 py-1 rounded-lg text-sm ">
                  DS
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-base-content to-pink-500 bg-clip-text text-transparent">
                  Dev Stack
                </span>
              </div>

              <p className="text-sm text-base-content/60  mb-6">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 text-sm font-medium text-base-content/60">
                <a href="#" className="hover:text-[#DB2777] transition-colors">
                  GitHub
                </a>
                <span className="md:hidden text-base-content/30">•</span>
                <a href="#" className="hover:text-[#DB2777] transition-colors">
                  Twitter
                </a>
                <span className="md:hidden text-base-content/30">•</span>
                <a href="#" className="hover:text-[#DB2777] transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="hidden md:block md:col-span-1"></div>

            <div className="hidden md:block md:col-span-2">
              <h6 className="footer-title text-xs font-bold text-base-content  uppercase opacity-100 mb-4">
                Product
              </h6>
              <div className="flex flex-col gap-3 text-sm text-base-content/60">
                <a href="#" className="hover:text-[#DB2777] transition-colors">
                  Home
                </a>
                <a href="#" className="hover:text-[#DB2777] transition-colors">
                  Technologies
                </a>
                <a href="#" className="hover:text-[#DB2777] transition-colors">
                  Projects
                </a>
              </div>
            </div>

            <div className="hidden md:block md:col-span-2">
              <h6 className="footer-title text-xs font-bold text-base-content  uppercase opacity-100 mb-4">
                Company
              </h6>
              <div className="flex flex-col gap-3 text-sm text-base-content/60">
                <a href="#" className="hover:text-[#DB2777] transition-colors">
                  About
                </a>
                <a href="#" className="hover:text-[#DB2777] transition-colors">
                  Contact
                </a>
                <a href="#" className="hover:text-[#DB2777] transition-colors">
                  Careers
                </a>
              </div>
            </div>

            <div className="hidden md:block md:col-span-2">
              <h6 className="footer-title text-xs font-bold text-base-content  uppercase opacity-100 mb-4">
                Legal
              </h6>
              <div className="flex flex-col gap-3 text-sm text-base-content/60">
                <a href="#" className="hover:text-[#DB2777] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#DB2777] transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-base-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-base-content/50">
            <div>&copy; 2026 Dev Stack. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#DB2777] transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-[#DB2777] transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
