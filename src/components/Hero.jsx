import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-teal-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
            Welcome to PsychSphere
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Compassionate therapy for modern lives
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            We help individuals, couples, and teams build emotional resilience, find clarity,
            and create lasting change through evidence-based, culturally attuned care.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#contact" className="rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Book a free consult
            </a>
            <a href="#services" className="rounded-md bg-white px-6 py-3 text-indigo-700 font-medium ring-1 ring-indigo-200 shadow-sm hover:bg-indigo-50">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
