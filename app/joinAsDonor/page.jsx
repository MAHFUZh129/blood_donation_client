"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ProtectedRoute from "../components/ProtectedRoute";

export default function DonorSignUpSimple() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    bloodGroup: "",
    upazila: "",
    district: "",
    status: "Available",
    lastDonation: "",
    nextEligibleDate: "",
    totalDonations: "",
    bio: "",
    weight: "",
    bloodPressure: "",
  });

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const submit = async (e) => {
    e.preventDefault();


const res = await fetch("https://blood-donation-server-three-zeta.vercel.app/donors", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});

const data = await res.json();

if (!res.ok) {
  toast.error(data.message);
  return;
}

toast.success("Donor Registered!");

  }

  return (
    <ProtectedRoute>
         <form onSubmit={submit} className="max-w-2xl mx-auto p-5 space-y-3 bg-white rounded shadow">
      <h2 className="text-xl font-semibold">Become a Donor</h2>

      {/* Basic */}
      <input className="input"  required placeholder="Full Name" value={form.name} onChange={(e) => update("name", e.target.value)} />
      <input className="input" required type="number" placeholder="Age" value={form.age} onChange={(e) => update("age", e.target.value)} />

      <select className="input" required value={form.gender} onChange={(e) => update("gender", e.target.value)}>
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <select className="input" required value={form.bloodGroup} onChange={(e) => update("bloodGroup", e.target.value)}>
        <option value="">Blood Group</option>
        {bloodGroups.map((bg) => (
          <option key={bg}>{bg}</option>
        ))}
      </select>

      {/* Contact */}
      <input className="input" required  placeholder="Phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
      <input className="input" required placeholder="Email" value={form.email} onChange={(e) => update("email", e.target.value)} />

      {/* Address */}
      <input className="input" required placeholder="Upazila" value={form.upazila} onChange={(e) => update("upazila", e.target.value)} />
      <input className="input" required placeholder="District" value={form.district} onChange={(e) => update("district", e.target.value)} />

      {/* Donation */}
      <select className="input" required value={form.status} onChange={(e) => update("status", e.target.value)}>
        <option>Available</option>
        <option>Not Available</option>
      </select>

      <input className="input" required type="date" value={form.lastDonation} onChange={(e) => update("lastDonation", e.target.value)} />
      <input className="input" required type="date" value={form.nextEligibleDate} onChange={(e) => update("nextEligibleDate", e.target.value)} />
      <input className="input" required type="number" placeholder="Total Donations" value={form.totalDonations} onChange={(e) => update("totalDonations", e.target.value)} />

      {/* Health */}
      <input className="input" required type="number" placeholder="Weight (kg)" value={form.weight} onChange={(e) => update("weight", e.target.value)} />
      <input className="input" required placeholder="Blood Pressure" value={form.bloodPressure} onChange={(e) => update("bloodPressure", e.target.value)} />

      {/* Bio */}
      <textarea className="input" rows="3" placeholder="Bio" value={form.bio} onChange={(e) => update("bio", e.target.value)} />

      <button className="w-full bg-red-600 text-white py-3 rounded">Submit</button>

      <style>{`
        .input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; }
      `}</style>
    </form>
    </ProtectedRoute>
   
  );
}
