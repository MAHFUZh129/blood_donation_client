import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute";

async function getData() {
  const res = await fetch("http://localhost:5000/donors", {
    cache: "no-store",
  });
  return res.json();
}

export default async function DonorsPage() {
  const donors = await getData();

  return (
     <ProtectedRoute>
<div>
     <div className="min-h-screen p-6">
  <h1 className="text-3xl font-bold mb-6">All Donors</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {donors.map((donor) => (
      <div
        key={donor._id}
        className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
      >
        {/* Blood Group Badge */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-xl mx-auto group-hover:bg-red-600 transition">
          {donor.bloodGroup}
        </div>

        {/* Body */}
        <div className="text-center mt-4 space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">{donor.name}</h2>

          <p className="text-sm text-gray-600">
            <strong className="text-gray-800">Age:</strong> {donor.age}
          </p>

          <p className="text-sm text-gray-600">
            <strong className="text-gray-800">District:</strong> {donor.district}
          </p>

          {/* <p className="text-sm text-gray-600">
            <strong className="text-gray-800">Phone:</strong> {item.phone}
          </p> */}

          <p className="text-sm text-gray-600">
            <strong className="text-gray-800">Last Donation:</strong> {donor.lastDonation}
          </p>
        </div>
        {/* Button */}
        <Link href={`/donors/${donor._id}`} >
         <button className="w-full mt-4 py-2 rounded-xl bg-red-700 text-white font-medium hover:bg-red-600 transition"> Details Info </button>
        </Link>
      </div>
    ))}
  </div>
</div>

    </div>
     </ProtectedRoute>
    
  );
}
