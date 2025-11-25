import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* BANNER CTA */}
<section id="banner" className="rounded-2xl bg-gradient-to-r from-red-600 to-pink-500 p-6 text-white">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div>
<h3 className="text-xl font-bold">Ready to make an impact?</h3>
<p className="mt-1 text-sm opacity-90">Sign up for a donation, or host a community drive with our support.</p>
</div>
<div className="flex gap-3">
<a href="#" className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/40">Host a Drive</a>
<a href="#" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-red-600 hover:brightness-95 focus-visible:ring-2 focus-visible:ring-white/40">Sign Up</a>
</div>
</div>
</section>
        </div>
    );
};

export default Banner;