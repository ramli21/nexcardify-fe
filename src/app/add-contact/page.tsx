'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email && !phone && !linkedin) {
      alert('Please provide at least one contact method.');
      return;
    }

    // Redirect ke halaman lain
    router.push('/theme');
  };

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="mb-4">
        <img src="/images/logo/NexCardify.png" alt="Logo" className="h-12" />
      </div>
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="+62 812-3456-7890"
            />
          </div>

          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
              LinkedIn Profile
            </label>
            <input
              id="linkedin"
              type="url"
              value={linkedin}
              onChange={e => setLinkedin(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}
