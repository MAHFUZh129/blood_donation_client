import React from 'react';

const Hero = () => {
    return (
        <div>
            

{/* HERO */}
<section
id="hero"
className="relative overflow-hidden"
aria-label="Hero section with headline and CTA"
>
<div className="absolute inset-0">
<div className="h-full w-full bg-gray-500" />

</div>


<div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
<div className="max-w-3xl text-center mx-auto text-white">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">Donate blood — save a life today</h1>
<p className="mt-4 text-lg sm:text-xl opacity-90">Join thousands of volunteers and donors. Quick, safe, and impactful — every donation matters.</p>


<div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
<a
href="/joinAsDonor"
className="inline-flex items-center gap-3 rounded-full bg-red-600 px-5 py-3 text-lg font-semibold text-white shadow hover:scale-[1.02] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
>
Become a Donor
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
<path d="M5 12h14" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M12 5l7 7-7 7" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</a>
<a
href="#features"
className="text-lg underline underline-offset-4 hover:text-white/90"
>
Learn how it works
</a>
</div>


<p className="mt-6 text-md opacity-90">We follow WHO recommended safety protocols and maintain high standards for donor care.</p>
</div>
</div>
</section>
        </div>
    );
};

export default Hero;