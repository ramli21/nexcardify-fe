'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfessionalInfoPage() {
  const router = useRouter();

  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (!company && !address && !website) {
    //   alert('Please provide at least one field.');
    //   return;
    // }

    // Optional: cek di console
    console.log({ company, address, website });

    router.push('/theme');
  };

  return (
    <section className="w-full h-full min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-10">
      <div className="mb-4">
        <img src="/images/logo/NexCardify.png" alt="Logo" className="h-12" />
      </div>
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={e => setCompany(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Company Name"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Company Address"
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700">
              Link Website
            </label>
            <input
              id="website"
              type="url"
              value={website}
              onChange={e => setWebsite(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="https://yourcompany.com"
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
