import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className='flex items-center'>
              <img
                src="/assets/Eminent_logo.png"
                alt="Eminent IT Services"
                className="h-16 w-auto mr-2"
              />
              </div>
            <p className="text-gray-400">
              Connecting businesses with exceptional talent across industries since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/eminentitservices/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                {/* X Logo (formerly Twitter) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#rpo" className="text-gray-400 hover:text-blue-400 transition-colors">RPO Solutions</Link>
              </li>
              <li>
                <Link to="/services#recruitment" className="text-gray-400 hover:text-blue-400 transition-colors">IT Staffing</Link>
              </li>
              <li>
                <Link to="/services#recruitment" className="text-gray-400 hover:text-blue-400 transition-colors">Contract Staffing</Link>
              </li>
              <li>
                <Link to="/services#recruitment" className="text-gray-400 hover:text-blue-400 transition-colors">Executive Search</Link>
              </li>
              <li>
                <Link to="/services#offshore" className="text-gray-400 hover:text-blue-400 transition-colors">Offshore Development</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  1007 N Orange St., 
                  4th Floor Suite #2472, 
                  Wilington, Delaware 19801<br />
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+1 (302)-355-5566</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">jkennedy@eminentitinc.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Eminent IT Services LLC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}