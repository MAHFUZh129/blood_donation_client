import React from 'react';

const Features = () => {
    return (
        <div>
            <section id="features" className="mb-12">
<h2 className="text-2xl font-bold">Features</h2>
<p className="mt-2 text-sm text-gray-600">What makes our program reliable and donor-friendly.</p>


<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{[
{ title: 'Safe & Hygienic', desc: 'Sterile single-use kits and trained staff.', icon: '🩺' },
{ title: 'Fast Registration', desc: 'Register online and skip the queues.', icon: '📝' },
{ title: 'Mobile Drives', desc: 'We come to your community.', icon: '🚐' },
{ title: 'Support Services', desc: 'Post-donation care and helpline.', icon: '☎️' },
].map((f) => (
<article key={f.title} className="group rounded-xl bg-white p-5 shadow-sm border border-gray-100 hover:shadow-lg focus-within:shadow-lg transition-shadow transform hover:-translate-y-1 focus-within:-translate-y-1">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-2xl group-hover:bg-red-100 transition-colors">{f.icon}</div>
<div>
<h3 className="font-semibold text-sm">{f.title}</h3>
<p className="mt-1 text-xs text-gray-500">{f.desc}</p>
</div>
</div>
<button className="mt-4 text-xs font-medium text-red-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200">Learn more →</button>
</article>
))}
</div>
</section>
        </div>
    );
};

export default Features;