// 'use client'
import React from "react";

export default  async function DonorDetails({params}) {
  const {id} = await params
  const res = await fetch(`http://localhost:5000/donors/${id}`);
  const donor = await res.json();
  return (


    <div className="max-w-4xl mx-auto p-6">
      
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          

          {/* Info */}
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {donor.name}
            </h1>

            <p className="text-gray-700">
              <strong>Age:</strong> {donor.age}
            </p>

            <p className="text-gray-700">
              <strong>Gender:</strong> {donor.gender}
            </p>

            <p className="text-gray-700">
              <strong>Location:</strong> {donor.upazila}, {donor.district}
            </p>

            <p className="text-gray-700">
              <strong>Phone:</strong> {donor.phone}
            </p>

            <p className="text-gray-700">
              <strong>Email:</strong> {donor.email}
            </p>

            {/* Blood Group Badge */}
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-xl font-semibold text-lg">
              Blood Group: {donor.bloodGroup}
            </div>
          </div>
        </div>

        {/* Status Box */}
        <div className="mt-6 p-4 rounded-xl bg-gray-50 border">
          <p className="text-gray-800">
            <strong>Status:</strong> 
            <span
              className={`ml-2 font-bold ${
                donor.status === "Available" ? "text-green-600" : "text-red-600"
              }`}
            >
              {donor.status}
            </span>
          </p>

          <p className="text-gray-800">
            <strong>Last Donation:</strong> {donor.lastDonation}
          </p>

          <p className="text-gray-800">
            <strong>Next Eligible Date:</strong> {donor.nextEligibleDate}
          </p>

          <p className="text-gray-800">
            <strong>Total Donations:</strong> {donor.totalDonations}
          </p>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">About Donor</h2>
          <p className="text-gray-700 mt-2">{donor.bio}</p>
        </div>

        {/* Health Info */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white border rounded-xl">
            <strong className="block text-gray-900">Weight:</strong>
            {donor.weight} kg
          </div>

          <div className="p-4 bg-white border rounded-xl">
            <strong className="block text-gray-900">Blood Pressure:</strong>
            {donor.bloodPressure}
          </div>
        </div>

       

        {/* Contact Button */}
        <button className="w-full mt-8 py-3 rounded-xl bg-red-600 text-white text-lg font-semibold hover:bg-red-500 transition">
          Contact Donor
        </button>
      </div>
    </div>
  );
}
