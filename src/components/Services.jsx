import React from 'react';

const services = [
  {
    title: 'Individual Therapy',
    desc: 'One-on-one sessions blending CBT, mindfulness, and trauma-informed care tailored to your goals.',
  },
  {
    title: 'Couples & Relationships',
    desc: 'Evidence-based approaches to communication, conflict repair, and rebuilding connection.',
  },
  {
    title: 'Workshops for Teams',
    desc: 'Interactive sessions for startups on resilience, burnout prevention, and psychologically safe culture.',
  },
  {
    title: 'Consultation & Supervision',
    desc: 'Clinical consultation for practitioners and mental health program design for organizations.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How we can help</h2>
          <p className="mt-4 text-gray-600">Practical, science-backed support for real life challenges.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
