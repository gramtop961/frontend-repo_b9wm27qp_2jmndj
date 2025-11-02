import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-xl">PsychSphere</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#contact" className="rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700">Free consult</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} PsychSphere. All rights reserved.</p>
          <div className="text-sm text-gray-600">Built with care for people and teams.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
