

import React from 'react';
import { FaHeart, FaHandsHelping, FaGlobe } from 'react-icons/fa'; // Icons for visual appeal

const page = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-red-700 sm:text-5xl">
            আমাদের সম্পর্কে: BloodDonate
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            জীবন বাঁচানোর একটি ডিজিটাল সেতুবন্ধন।
          </p>
        </header>

        {/* Mission and Vision */}
        <section className="bg-white shadow-lg rounded-xl p-8 mb-12 border-t-4 border-red-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
             <FaHeart className="text-red-500 mr-3"/> আমাদের লক্ষ্য
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            প্রতিদিন হাজার হাজার মানুষের রক্তের প্রয়োজন হয়। আমাদের প্রধান লক্ষ্য হলো এই জরুরি মুহূর্তে রক্তদাতা এবং রক্তপ্রার্থীদের মধ্যে দ্রুততম সময়ে, কোনো বাধা ছাড়াই, কার্যকর সংযোগ স্থাপন করা। আমরা বিশ্বাস করি, রক্তের অভাবে একটিও জীবন বিপন্ন হওয়া উচিত নয়।
          </p>
        </section>

        {/* Key Pillars / Why BloodDonate */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaHandsHelping className="text-4xl text-red-500 mb-4"/>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">দ্রুত সংযোগ</h3>
            <p className="text-gray-600 text-sm">আমাদের প্ল্যাটফর্ম ব্যবহার করে রক্তপ্রার্থীরা কয়েক মিনিটের মধ্যেই তাদের প্রয়োজনীয় রক্তের গ্রুপের দাতার কাছে বার্তা পৌঁছাতে পারে।</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaGlobe className="text-4xl text-red-500 mb-4"/>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">স্বচ্ছতা ও নির্ভরযোগ্যতা</h3>
            <p className="text-gray-600 text-sm">নিবন্ধিত দাতা এবং আপডেটেড ডেটা নিশ্চিত করে আমরা একটি নির্ভরযোগ্য রক্তদান নেটওয়ার্ক তৈরি করেছি।</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaHeart className="text-4xl text-red-500 mb-4"/>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">শক্তিশালী সম্প্রদায়</h3>
            <p className="text-gray-600 text-sm">আমরা শুধু একটি প্ল্যাটফর্ম নই; আমরা একটি মানবিক সম্প্রদায়, যেখানে প্রতিটি সদস্য একে অপরের জীবন রক্ষায় অঙ্গীকারবদ্ধ।</p>
          </div>
        </section>

        {/* Call to Action */}
        <footer className="text-center pt-8 border-t border-gray-200">
          <p className="text-2xl font-bold text-red-600 mb-4">
            জীবন বাঁচাতে আমাদের সাথে যোগ দিন।
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/joinAsDonor" 
              className="bg-red-600 text-white font-medium py-3 px-6 rounded-full hover:bg-red-700 transition duration-300 shadow-md"
            >
              দাতা হিসেবে নিবন্ধন করুন
            </a>
            <a 
              href="/request-blood" 
              className="bg-gray-800 text-white font-medium py-3 px-6 rounded-full hover:bg-gray-700 transition duration-300 shadow-md"
            >
              জরুরী রক্তের অনুরোধ
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default page;