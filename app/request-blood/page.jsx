"use client";

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaTint, FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa';
import ProtectedRoute from '../components/ProtectedRoute';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const RequestBloodPage = () => {
  const [requestData, setRequestData] = useState({
    patientName: '',
    bloodGroup: '',
    unitsNeeded: '',
    hospitalName: '',
    hospitalAddress: '',
    contactName: '',
    contactNumber: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequestData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic Validation: Check mandatory fields
    if (!requestData.patientName || !requestData.bloodGroup || !requestData.contactNumber || !requestData.hospitalName) {
      toast.error("Patient Name, Blood Group, Hospital Name, and Contact Number are required.");
      return;
    }

    setIsSubmitting(true);

    try {
     
      const res = await fetch('https://blood-donation-server-three-zeta.vercel.app/blood-requests', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to submit request to the server.');
      }
      
      const result = await res.json();
      console.log('Server Response:', result);

      toast.success(result.message || "Your blood request has been submitted successfully!");

      // Reset Form
      setRequestData({
        patientName: '',
        bloodGroup: '',
        unitsNeeded: '',
        hospitalName: '',
        hospitalAddress: '',
        contactName: '',
        contactNumber: '',
        message: '',
      });

    } catch (error) {
      console.error("Submission error:", error);
      toast.error(`Error: ${error.message || "Could not connect to the dedicated server."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ProtectedRoute>
 <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-2xl border-t-4 border-red-600">
        
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            <FaTint className="inline-block text-red-600 mr-3 align-middle"/> Urgent Blood Request
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Please provide accurate patient details to help us find a suitable donor quickly.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Patient Info Section */}
          <fieldset className="border p-6 rounded-lg shadow-sm">
            <legend className="text-lg font-semibold text-red-600 px-2">Patient Information</legend>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="col-span-1">
                    <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
                        Patient Name *
                    </label>
                    <input
                        type="text"
                        name="patientName"
                        id="patientName"
                        required
                        value={requestData.patientName}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
                    />
                </div>
                
                <div className="col-span-1">
                    <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
                        Required Blood Group *
                    </label>
                    <select
                        id="bloodGroup"
                        name="bloodGroup"
                        required
                        value={requestData.bloodGroup}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
                    >
                        <option value="">Select Group</option>
                        {bloodGroups.map((group) => (
                            <option key={group} value={group}>{group}</option>
                        ))}
                    </select>
                </div>
                
                <div className="col-span-1">
                    <label htmlFor="unitsNeeded" className="block text-sm font-medium text-gray-700">
                        Units of Blood Needed
                    </label>
                    <input
                        type="number"
                        name="unitsNeeded"
                        id="unitsNeeded"
                        min="1"
                        value={requestData.unitsNeeded}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
                    />
                </div>
            </div>
          </fieldset>
          
          {/* Hospital and Contact Info Section */}
          <fieldset className="border p-6 rounded-lg shadow-sm">
            <legend className="text-lg font-semibold text-red-600 px-2">Contact & Location</legend>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="col-span-full">
                    <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-gray-500"/> Hospital Name *
                    </label>
                    <input
                        type="text"
                        name="hospitalName"
                        id="hospitalName"
                        required
                        value={requestData.hospitalName}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
                    />
                </div>
                
                 <div className="col-span-full">
                    <label htmlFor="hospitalAddress" className="block text-sm font-medium text-gray-700">
                        Hospital Address (Detailed)
                    </label>
                    <textarea
                        name="hospitalAddress"
                        id="hospitalAddress"
                        rows="2"
                        value={requestData.hospitalAddress}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
                    />
                </div>
                
                <div className="col-span-1">
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                        Contact Person's Name
                    </label>
                    <input
                        type="text"
                        name="contactName"
                        id="contactName"
                        value={requestData.contactName}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
                    />
                </div>
                
                <div className="col-span-1">
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 flex items-center">
                        <FaMobileAlt className="mr-2 text-gray-500"/> Contact Number *
                    </label>
                    <input
                        type="tel"
                        name="contactNumber"
                        id="contactNumber"
                        required
                        value={requestData.contactNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
                    />
                </div>
            </div>
          </fieldset>
          
          {/* Additional Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Additional Message (Optional)
            </label>
            <textarea
              name="message"
              id="message"
              rows="3"
              value={requestData.message}
              onChange={handleChange}
              placeholder="Provide context about the patient's condition or the urgency of the request..."
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting Request...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
    </ProtectedRoute>
   
  );
};

export default RequestBloodPage;