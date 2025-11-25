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
<div className="h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.25))]" />
<img
src="https://images.unsplash.com/photo-1584438788510-0626c2a8a8b5?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b8f6c2b4a3f2d58e3e8d7b5b1a7a9d6"
alt="Volunteers helping a donor"
className="h-72 w-full object-cover md:h-[420px] lg:h-[540px] brightness-75"
/>
</div>


<div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
<div className="max-w-3xl text-center mx-auto text-white">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">Donate blood — save a life today</h1>
<p className="mt-4 text-lg sm:text-xl opacity-90">Join thousands of volunteers and donors. Quick, safe, and impactful — every donation matters.</p>


<div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
<a
href="#banner"
className="inline-flex items-center gap-3 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow hover:scale-[1.02] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
>
Become a Donor
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
<path d="M5 12h14" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M12 5l7 7-7 7" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</a>
<a
href="#features"
className="text-sm underline underline-offset-4 hover:text-white/90"
>
Learn how it works
</a>
</div>


<p className="mt-6 text-sm opacity-90">We follow WHO recommended safety protocols and maintain high standards for donor care.</p>
</div>
</div>
</section>
        </div>
    );
};

export default Hero;