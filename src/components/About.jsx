import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A thoughtful, human approach</h2>
            <p className="mt-4 text-gray-600 leading-7">
              PsychSphere was founded by two clinicians with a shared mission: to make mental health care
              more accessible, personalized, and stigma-free. We draw from CBT, trauma-informed practice,
              mindfulness, and organizational psychology to support the full spectrum of human experience.
            </p>
            <p className="mt-4 text-gray-600">
              Sessions are confidential, collaborative, and paced to your needs. We offer in-person and
              secure virtual sessions, plus workshops for startups and growing teams.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-200/60 via-teal-200/60 to-rose-200/60 ring-1 ring-gray-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
