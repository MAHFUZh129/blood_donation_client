import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">BloodDonate</h2>
          <p className="mt-2 text-sm">
            Saving lives one drop at a time. Become a donor today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/" className="hover:text-red-400">Home</a></li>
            <li><a href="/donors" className="hover:text-red-400">Find Donors</a></li>
            <li><a href="/request-blood" className="hover:text-red-400">Request Blood</a></li>
            <li><a href="/dashboard" className="hover:text-red-400">Dashboard</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-3 text-sm">
            Email: support@blooddonate.org  
            <br />
            Phone: +880 1234-567890
          </p>
        </div>
      </div>

      <p className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} BloodDonate — All Rights Reserved.
      </p>
    </footer> 
        </div>
    );
};

export default Footer;