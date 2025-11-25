import React from 'react';

const Itemcard = () => {
    return (
        <div>
            {/* BLOOD DONATION CAMPS / EVENTS */}
            <section id="items" className="mb-12">
                <div className="flex mb-5 items-start justify-between">
                    <div >
                        <h2 className="text-2xl font-bold">Upcoming Blood Donation Drives</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Join a nearby drive and help save lives. Pick a date that works for you.
                        </p>
                    </div>
                    <a href="#" className="text-sm text-red-600 underline hidden sm:inline">
                        View all drives
                    </a>
                </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
  {/* Card 1 */}
  <article className="group rounded-lg bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all focus-within:ring-2 focus-within:ring-red-200">
    <div className="h-36 w-full rounded-md bg-gray-100 overflow-hidden">
      <img
        src="https://i.ibb.co.com/JwrgGC7g/download-27.jpg"
        alt=""
        className="h-full w-full object-cover"
      />
    </div>

    <div className="mt-3">
      <h3 className="text-lg font-semibold">Blood Donation Camp #1</h3>
      <p className="mt-1 text-sm text-gray-500">
        {new Date().toLocaleDateString()} · 10:00 AM — 4:00 PM
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Organized by Lifesavers Network
      </p>
    </div>

    <div className="mt-4 flex items-center gap-3">
      <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:brightness-105">
        Register as Donor
      </button>
      <button className="text-sm text-gray-600 hover:underline">Details</button>
    </div>
  </article>

  {/* Card 2 */}
  <article className="group rounded-lg bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all focus-within:ring-2 focus-within:ring-red-200">
    <div className="h-36 w-full rounded-md bg-gray-100 overflow-hidden">
      <img
        src="https://source.unsplash.com/featured/800x400/?blood,donation,camp&sig=2"
        alt=""
        className="h-full w-full object-cover"
      />
    </div>

    <div className="mt-3">
      <h3 className="text-lg font-semibold">Blood Donation Camp #2</h3>
      <p className="mt-1 text-sm text-gray-500">
        {new Date().toLocaleDateString()} · 10:00 AM — 4:00 PM
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Organized by Lifesavers Network
      </p>
    </div>

    <div className="mt-4 flex items-center gap-3">
      <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:brightness-105">
        Register as Donor
      </button>
      <button className="text-sm text-gray-600 hover:underline">Details</button>
    </div>
  </article>

  {/* Card 3 */}
  <article className="group rounded-lg bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all focus-within:ring-2 focus-within:ring-red-200">
    <div className="h-36 w-full rounded-md bg-gray-100 overflow-hidden">
      <img
        src="https://source.unsplash.com/featured/800x400/?blood,donation,camp&sig=3"
        alt=""
        className="h-full w-full object-cover"
      />
    </div>

    <div className="mt-3">
      <h3 className="text-lg font-semibold">Blood Donation Camp #3</h3>
      <p className="mt-1 text-sm text-gray-500">
        {new Date().toLocaleDateString()} · 10:00 AM — 4:00 PM
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Organized by Lifesavers Network
      </p>
    </div>

    <div className="mt-4 flex items-center gap-3">
      <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:brightness-105">
        Register as Donor
      </button>
      <button className="text-sm text-gray-600 hover:underline">Details</button>
    </div>
  </article>

  {/* Card 4 */}
  <article className="group rounded-lg bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all focus-within:ring-2 focus-within:ring-red-200">
    <div className="h-36 w-full rounded-md bg-gray-100 overflow-hidden">
      <img
        src="https://source.unsplash.com/featured/800x400/?blood,donation,camp&sig=4"
        alt=""
        className="h-full w-full object-cover"
      />
    </div>

    <div className="mt-3">
      <h3 className="text-lg font-semibold">Blood Donation Camp #4</h3>
      <p className="mt-1 text-sm text-gray-500">
        {new Date().toLocaleDateString()} · 10:00 AM — 4:00 PM
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Organized by Lifesavers Network
      </p>
    </div>

    <div className="mt-4 flex items-center gap-3">
      <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:brightness-105">
        Register as Donor
      </button>
      <button className="text-sm text-gray-600 hover:underline">Details</button>
    </div>
  </article>

  {/* Card 5 */}
  <article className="group rounded-lg bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all focus-within:ring-2 focus-within:ring-red-200">
    <div className="h-36 w-full rounded-md bg-gray-100 overflow-hidden">
      <img
        src="https://source.unsplash.com/featured/800x400/?blood,donation,camp&sig=5"
        alt=""
        className="h-full w-full object-cover"
      />
    </div>

    <div className="mt-3">
      <h3 className="text-lg font-semibold">Blood Donation Camp #5</h3>
      <p className="mt-1 text-sm text-gray-500">
        {new Date().toLocaleDateString()} · 10:00 AM — 4:00 PM
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Organized by Lifesavers Network
      </p>
    </div>

    <div className="mt-4 flex items-center gap-3">
      <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:brightness-105">
        Register as Donor
      </button>
      <button className="text-sm text-gray-600 hover:underline">Details</button>
    </div>
  </article>

  {/* Card 6 */}
  <article className="group rounded-lg bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all focus-within:ring-2 focus-within:ring-red-200">
    <div className="h-36 w-full rounded-md bg-gray-100 overflow-hidden">
      <img
        src="https://source.unsplash.com/featured/800x400/?blood,donation,camp&sig=6"
        alt=""
        className="h-full w-full object-cover"
      />
    </div>

    <div className="mt-3">
      <h3 className="text-lg font-semibold">Blood Donation Camp #6</h3>
      <p className="mt-1 text-sm text-gray-500">
        {new Date().toLocaleDateString()} · 10:00 AM — 4:00 PM
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Organized by Lifesavers Network
      </p>
    </div>

    <div className="mt-4 flex items-center gap-3">
      <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:brightness-105">
        Register as Donor
      </button>
      <button className="text-sm text-gray-600 hover:underline">Details</button>
    </div>
  </article>

</div>

            </section>
        </div>
    );
};

export default Itemcard;
