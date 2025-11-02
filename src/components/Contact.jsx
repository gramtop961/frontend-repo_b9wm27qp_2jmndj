import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    newsletter_opt_in: false,
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });
    try {
      const res = await fetch(`${backend}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'psychsphere-website' }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setStatus({ type: 'success', message: 'Thanks! We\'ll be in touch shortly.' });
      setForm({ name: '', email: '', phone: '', message: '', newsletter_opt_in: false });
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    }
  }

  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Start your journey</h2>
            <p className="mt-4 text-gray-600">
              Tell us a little about what you\'re looking for. We\'ll reply within one business day to
              schedule a free 15-minute consultation.
            </p>
            <div className="mt-8 rounded-2xl bg-indigo-50 p-6 ring-1 ring-indigo-100">
              <p className="text-sm text-indigo-900">
                Prefer email? Reach us at <span className="font-medium">hello@psychsphere.co</span>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Alex Rivera"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="alex@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="+1 555 000 1234"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">How can we help?</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Share a few details about your goals or challenges."
                />
              </div>
              <div className="sm:col-span-2 flex items-center gap-2">
                <input
                  id="news"
                  type="checkbox"
                  checked={form.newsletter_opt_in}
                  onChange={(e) => setForm({ ...form, newsletter_opt_in: e.target.checked })}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="news" className="text-sm text-gray-700">
                  I\'d like occasional tips and updates
                </label>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60"
              >
                {status.type === 'loading' ? 'Sending...' : 'Send inquiry'}
              </button>
              {status.type === 'success' && (
                <p className="text-sm text-green-700">{status.message}</p>
              )}
              {status.type === 'error' && (
                <p className="text-sm text-red-600">{status.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
