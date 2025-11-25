import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <section id="testimonials" className="mb-12">
<h2 className="text-2xl font-bold">Testimonials</h2>
<p className="mt-2 text-sm text-gray-600">Real stories from donors and recipients.</p>


<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
{[
{ name: 'Aisha', quote: 'Donating was simple and the staff took great care of me.' },
{ name: 'Rahim', quote: 'The mobile drive came to our neighborhood — very convenient.' },
{ name: 'Sana', quote: 'I felt proud to help. It only takes a small amount of time.' },
].map((t) => (
<figure key={t.name} className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow focus-within:shadow-md">
<blockquote className="text-sm leading-relaxed">“{t.quote}”</blockquote>
<figcaption className="mt-3 flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">{t.name[0]}</div>
<div className="text-xs text-gray-600">{t.name}</div>
</figcaption>
</figure>
))}
</div>
</section>
        </div>
    );
};

export default Testimonials;