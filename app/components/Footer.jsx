import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <footer className="w-full px-5 bg-gray-900 text-gray-300 py-8 ">
      <div className="max-w-6xl mx-auto pr-10 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
           <Link href="/" className="text-3xl italic font-bold text-red-700">
          Donate<span className="text-red-600">Blood</span>
        </Link>
          <p className="mt-2 text-md">
            Saving lives one drop at a time. Become a donor today.Blood donation app connecting donors to nearby drives. Schedule appointments, receive urgent blood-type alerts, track donations and lives saved. One tap to give life. Every drop counts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-lg">
            <li><Link href="/" className="hover:text-red-400">Home</Link></li>
            <li><Link href="/donors" className="hover:text-red-400">Find Donors</Link></li>
            <li><Link href="/request-blood" className="hover:text-red-400">Request Blood</Link></li>
            <li><Link href="/dashboard" className="hover:text-red-400">Dashboard</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <p className="mt-3 text-lg">
            Email: support@donateblood.org  
            <br />
            Phone: +880 1234-567890
          </p>
        </div>
      </div>

      <p className="text-center mt-8 text-lg text-gray-500">
        © {new Date().getFullYear()} BloodDonate — All Rights Reserved.
      </p>
    </footer> 
        </div>
    );
};

export default Footer;